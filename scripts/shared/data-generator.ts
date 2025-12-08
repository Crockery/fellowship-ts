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

type GeneratedData = Record<string, unknown>[];

type GeneratorFn = (generator: DataGenerator) => Promise<GeneratedData>;

interface Write {
  path: string;
  content: string;
}

export class DataGenerator {
  generators: Map<string, { type_name: string; generator: GeneratorFn }>;
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

  private async generate() {
    console.log("Done!");
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
      { data: Record<string, unknown>[]; type_name: string }
    >();

    console.log("Generating and writing data.");

    await Promise.all(
      Array.from(this.generators).map(
        async ([key, { generator, type_name }]) => {
          console.group(`Generating data for "${key}".`);

          const data = await generator(this);

          generated.set(key, { data, type_name });

          console.groupEnd();

          console.log(`Finished generating data for "${key}".`);
        },
      ),
    );

    await Promise.all(
      Array.from(generated).map(async ([key, { data, type_name }]) => {
        console.group(`Writing data & types for "${key}".`);

        // First clean out the old type & data files.
        const dest = path.join(data_root, `${key}.ts`);

        console.log(`Cleaning ${dest}.`);

        await deleteFile(dest);

        // Generate a JSON schema from the collection, then an interface string
        // from that schema.
        const schema = createCompoundSchema(data);
        const type_string = await compile(schema, type_name, {
          additionalProperties: false,
        });

        console.log(`Writing ${key} data & types to ${dest}.`);

        await this.writeFile({
          content: `${type_string}\n\nexport default ${JSON.stringify(data)}`,
          path: dest,
        });

        console.groupEnd();
      }),
    );

    // console.group(`Running ${this.handlers.size} handlers to generate writes.`);
    // await Promise.all(
    //   [...this.handlers.entries()].map(async (entry) => {
    //     console.log(`Running ${entry[0]}`);
    //     await entry[1](this);
    //     console.log(`${entry[0]} finished.`);
    //   }),
    // );
    // console.groupEnd();
    // console.log("Handlers finished.");
    // console.log(`${this.cleans.length} directories to clean.`);
    // console.group("Files to write:");
    // console.log(`${this.writes.length} writes pending.`);
    // console.log(`${this.typings.count} typings pending.`);
    // console.log(`${this.constants.count} constants pending.`);
    // console.groupEnd();

    // console.log("Cleaning directories.");
    // await Promise.all(
    //   this.cleans.map(async (path) => {
    //     return clearDirectory(path);
    //   }),
    // );

    // console.log("Writing writes.");
    // const write_chunks = chunk(this.writes, 100);

    // for await (const chunk of write_chunks) {
    //   await Promise.all(
    //     chunk.map(async (to_write) => {
    //       return this.writeFile(to_write);
    //     }),
    //   );
    // }
    // // console.log("Writing static files.");
    // // await Promise.all([
    // //   this.writeFile(this.getStaticWrite(this.typings)),
    // //   this.writeFile(this.getStaticWrite(this.constants)),
    // // ]);

    // await this.generate();

    // console.log("Formatting files.");

    console.log("Formatting files.");

    await execSync("npm run format");

    console.log("Done!");
  }

  // addClean(path: string) {
  //   this.cleans.push(path);
  // }

  // addWrite(write: Write) {
  //   this.writes.push(write);
  // }

  // addHandler(key: string, handler: HandlerFn) {
  //   if (!this.handlers.has(key)) {
  //     this.handlers.set(key, handler);
  //   }
  // }

  addGenerator(key: string, type_name: string, generator: GeneratorFn) {
    if (!this.generators.has(key)) {
      this.generators.set(key, { generator, type_name });
    }
  }
}
