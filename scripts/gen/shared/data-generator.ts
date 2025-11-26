import fs from "fs-extra";
import { clearDirectory } from "../../shared/utils/clear-directory";

const chunk = <T>(to_chunk: T[], size: number): T[][] => {
  const R = [];
  for (let i = 0; i < to_chunk.length; i += size)
    R.push(to_chunk.slice(i, i + size));
  return R;
};

type StaticFileKey = "typings" | "constants";

interface StaticFileWrite {
  imports: string[];
  body: string[];
  count: number;
  key: StaticFileKey;
}

type HandlerFn = (generator: DataGenerator) => Promise<void>;

interface Write {
  path: string;
  content: string;
}

export class DataGenerator {
  typings: StaticFileWrite;
  constants: StaticFileWrite;
  handlers: Map<string, HandlerFn>;
  writes: Write[];
  cleans: string[];

  constructor() {
    this.typings = { imports: [], body: [], count: 0, key: "typings" };
    this.constants = { imports: [], body: [], count: 0, key: "constants" };
    this.handlers = new Map();
    this.writes = [];
    this.cleans = [];
  }

  private async writeFile(to_write: Write) {
    await fs.writeFile(to_write.path, to_write.content);
  }

  private getStaticWrite(static_to_write: StaticFileWrite): Write {
    const path =
      static_to_write.key === "constants"
        ? "./src/constants/generated/index.ts"
        : "./src/types/generated/index.ts";

    const content = `
      ${static_to_write.imports.join("\n")}

      ${static_to_write.body.join("\n")}
    `;

    return {
      path,
      content,
    };
  }

  async start() {
    if (!process.env.FMODEL_OUTPUT) {
      throw new Error("FMODEL_OUTPUT path not set in .env");
    }

    console.log("Starting data generation!");
    console.group(`Running ${this.handlers.size} handlers to generate writes.`);
    await Promise.all(
      [...this.handlers.entries()].map(async (entry) => {
        console.log(`Running ${entry[0]}`);
        await entry[1](this);
        console.log(`${entry[0]} finished.`);
      }),
    );
    console.groupEnd();
    console.log("Handlers finished.");
    console.log(`${this.cleans.length} directories to clean.`);
    console.group("Files to write:");
    console.log(`${this.writes.length} writes pending.`);
    console.log(`${this.typings.count} typings pending.`);
    console.log(`${this.constants.count} constants pending.`);
    console.groupEnd();

    console.log("Cleaning directories.");
    await Promise.all(
      this.cleans.map(async (path) => {
        return clearDirectory(path);
      }),
    );

    console.log("Writing writes.");
    const write_chunks = chunk(this.writes, 100);

    for await (const chunk of write_chunks) {
      await Promise.all(
        chunk.map(async (to_write) => {
          return this.writeFile(to_write);
        }),
      );
    }
    console.log("Writing static files.");
    await Promise.all([
      this.writeFile(this.getStaticWrite(this.typings)),
      this.writeFile(this.getStaticWrite(this.constants)),
    ]);

    console.log("Done!");
  }

  addClean(path: string) {
    this.cleans.push(path);
  }

  addWrite(write: Write) {
    this.writes.push(write);
  }

  addHandler(key: string, handler: HandlerFn) {
    if (!this.handlers.has(key)) {
      this.handlers.set(key, handler);
    }
  }

  addStaticFileContent({
    file,
    type,
    content,
  }: {
    file: StaticFileKey;
    type: "imports" | "body";
    content: string;
  }) {
    this[file][type].push(content);
    this[file].count = this[file].count + 1;
  }
}
