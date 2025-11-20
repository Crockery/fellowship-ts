import fs from "fs-extra";
import path from "path";
import { loadEnvFile } from "process";
import { clearDirectory } from "../shared";
import sharp from "sharp";

interface ResizeRequest {
  x: number;
  y: number;
  name: string;
}

interface PathConfig {
  root: string;
  sizes?: ResizeRequest[];
}

const ROOT_PATHS: Record<string, PathConfig> = {
  heroes: {
    root: "Content\\ui\\icons\\hero_portraits",
    sizes: [
      { x: 300, y: 300, name: "300" },
      { x: 80, y: 80, name: "80" },
    ],
  },
  abilities: {
    root: "Content\\ui\\icons\\Hero_Abilities",
    sizes: [
      { x: 300, y: 300, name: "300" },
      { x: 80, y: 80, name: "80" },
    ],
  },
};

interface CopyRequest {
  source: string;
  destination: string;
  key: string;
}

try {
  loadEnvFile(".env");
} catch (error) {
  console.error("Unable to generate data: missing env file.");
}

const getAllPngPaths = async (
  searchDir: string,
  key: string
): Promise<CopyRequest[]> => {
  const contents = await fs.readdir(searchDir, { withFileTypes: true });

  const files: CopyRequest[] = contents
    .filter((dirent) => dirent.isFile() && path.extname(dirent.name) === ".png")
    .map((dirent) => {
      return {
        source: `${dirent.parentPath}\\${dirent.name}`,
        destination: `.\\assets\\${key}\\raw\\${dirent.name}`,
        key,
      };
    });

  const directories = contents.filter((dirent) => dirent.isDirectory());

  const subFiles = await Promise.all(
    directories.map(async (dirent) =>
      getAllPngPaths(`${dirent.parentPath}\\${dirent.name}`, key)
    )
  );

  return [...files, ...subFiles.flatMap((subFile) => subFile)];
};

interface ConversionRequest {
  source: string;
  destination: string;
  resize?: ResizeRequest;
}

const getAllConversions = (requests: CopyRequest[]): ConversionRequest[] => {
  return requests.flatMap((request) => {
    const config = ROOT_PATHS[request.key];

    const destination = request.destination.replace(
      `raw\\${path.basename(request.destination)}`,
      path.basename(request.destination)
    );

    if (config) {
      if (config.sizes) {
        return config.sizes.map((size) => ({
          source: request.destination,
          destination: destination.replace(
            path.extname(destination),
            `@${size.x}${path.extname(destination)}`
          ),
          resize: size,
        }));
      }
      return { source: request.destination, destination };
    } else {
      return [];
    }
  });
};

const copyAssets = async () => {
  if (!process.env.FMODEL_OUTPUT) {
    throw new Error("FMODEL_OUTPUT path not set in .env");
  }

  const root_keys = Object.keys(ROOT_PATHS);

  // For each task key, clear the root directory and add a "raw"
  // directory.
  await Promise.all(
    root_keys.map(async (key) => {
      await clearDirectory(`.\\assets\\${key}`);
      await clearDirectory(`.\\assets\\${key}\\raw`);
      await fs.ensureDir(`.\\assets\\${key}\\raw`);
    })
  );

  // Get the paths to all of the pngs in the source folder.
  // with source and destination paths
  const all_requests = await Promise.all(
    root_keys.map(async (key) => {
      const root = ROOT_PATHS[key]?.root;
      if (root) {
        return await getAllPngPaths(
          `${process.env.FMODEL_OUTPUT}\\${root}`,
          key
        );
      } else {
        return [];
      }
    })
  );

  const requests = all_requests.flatMap((request) => request);

  // Copy all of the assets to their destinations
  await Promise.all(
    requests.map((request) => {
      return fs.copyFile(request.source, request.destination);
    })
  );

  // Convert all of the assets if necessary.
  const conversions = getAllConversions(requests);

  await Promise.all(
    conversions.map(async (conversion) => {
      if (conversion.resize) {
        await sharp(conversion.source)
          .resize(conversion.resize.x, conversion.resize.y)
          .webp()
          .toFile(conversion.destination);
      } else {
        await sharp(conversion.source).webp().toFile(conversion.destination);
      }
    })
  );
};

copyAssets();
