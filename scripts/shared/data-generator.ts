import fs from "fs-extra";
import { execSync } from "child_process";
import { createCompoundSchema } from "genson-js";
import path from "path";
import { compile } from "json-schema-to-typescript";
import { deleteFile } from "./utils";

export type Registry = {
  obj_path: string;
  pkg_name: string;
  pkg_path: string;
  asset_name: string;
  asset_class: string;
  row: string;
}[];

interface RegistryRaw {
  PreallocatedAssetDataBuffers: {
    ObjectPath: string;
    PackageName: string;
    PackagePath: string;
    AssetName: string;
    AssetClass: string;
    TagsAndValues?: {
      RowStructure: string;
    };
  }[];
}

type GeneratedData = Record<string, unknown> | GeneratedData[];

type GeneratorFn = (
  generator: DataGenerator,
  key: string,
) => Promise<GeneratedData>;

type Generator = {
  type_name?: string;
  generator: GeneratorFn;
  dir?: string;
  cast?: string;
};

interface Write {
  path: string;
  content: string;
}

export class DataGenerator {
  generators: Map<string, Generator>;
  registry: Registry = [];
  files: Map<string, unknown>;

  constructor() {
    this.generators = new Map();
    this.files = new Map();
  }

  private async writeFile(to_write: Write) {
    await fs.writeFile(to_write.path, to_write.content);
  }

  private async setRegistry() {
    const registry_path = `${process.env.FMODEL_OUTPUT}/AssetRegistry.json`;

    console.log(`Getting asset registry at ${registry_path}`);

    const registry_raw = await fs.readJson(registry_path);

    if (
      registry_raw &&
      !!(registry_raw as RegistryRaw).PreallocatedAssetDataBuffers?.length
    ) {
      this.registry = (
        registry_raw as RegistryRaw
      ).PreallocatedAssetDataBuffers.map((asset) => ({
        obj_path: asset.ObjectPath,
        pkg_name: asset.PackageName,
        pkg_path: asset.PackagePath,
        asset_name: asset.AssetName,
        asset_class: asset.AssetClass,
        row: asset.TagsAndValues?.RowStructure ?? "",
      }));
    }
  }

  async addFile<T>(key: string, getter: () => Promise<T>) {
    const value = await getter();
    this.files.set(key, value);
  }

  getFile<T>(key: string) {
    return this.files.get(key) as T | undefined;
  }

  async start() {
    if (!process.env.FMODEL_OUTPUT) {
      throw new Error("FMODEL_OUTPUT path not set in .env");
    }

    await this.setRegistry();

    if (!this.registry.length) {
      throw new Error("Stopping data generator: No registry found.");
    }

    const data_root = `./src/data/`;

    const generated = new Map<
      string,
      Omit<Generator, "generator"> & { data: GeneratedData }
    >();

    console.log("Generating and writing data.");

    await Promise.all(
      Array.from(this.generators).map(async ([key, { generator, ...rest }]) => {
        console.log(`Generating data for "${key}".`);

        const data = await generator(this, key);

        generated.set(key, { data, ...rest });

        console.log(`Finished generating data for "${key}".`);
      }),
    );

    await Promise.all(
      Array.from(generated).map(
        async ([key, { data, type_name, dir, cast }]) => {
          console.log(`Writing data & types for "${key}".`);

          // First clean out the old type & data files.
          const dest = path.join(dir ?? data_root, `${key}.ts`);

          console.log(`Cleaning ${dest}.`);

          await deleteFile(dest);

          if (!type_name) {
            await this.writeFile({
              content: `export default ${JSON.stringify(data)}${cast ?? ""};`,
              path: dest,
            });
          } else {
            // Generate a JSON schema from the collection, then an interface string
            // from that schema.
            const schema = createCompoundSchema(
              Array.isArray(data) ? data : [data],
            );
            const type_string = await compile(
              schema,
              `${type_name}_DO_NOT_IMPORT`,
              {
                additionalProperties: false,
              },
            );

            console.log(`Writing ${key} data & types to ${dest}.`);

            await this.writeFile({
              content: `${type_string}\n\nexport default ${JSON.stringify(data)}${cast ?? ""};`,
              path: dest,
            });
          }
        },
      ),
    );

    console.log("Formatting files.");

    execSync("npm run format");

    console.log("Done!");
  }

  addGenerator({ key, ...genetator }: Generator & { key: string }) {
    if (!this.generators.has(key)) {
      this.generators.set(key, genetator);
    }
  }
}
