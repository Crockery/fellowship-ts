import fs from "fs-extra";
import path from "path";
import { FileType } from "../types";

export const deleteFile = async (path: string) => {
  await fs.ensureFile(path);
  await fs.unlink(path);
};

export const clearDirectory = async (dir: string) => {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile()) {
      const filePath = path.join(dir, file.name);
      await fs.unlink(filePath);
    }
  }
};

export const getDirectoryContents = async (
  path: string,
  filterFn?: (dirent: fs.Dirent<string>) => boolean,
) => {
  const contents = await fs.readdir(path, { withFileTypes: true });

  return contents
    .filter((dirent) => {
      const isRightFile = dirent.isFile() || dirent.isDirectory();

      if (filterFn) {
        return filterFn(dirent) && isRightFile;
      }

      return isRightFile;
    })
    .map((dirent) => ({
      path: `${dirent.parentPath}/${dirent.name}`,
      type: dirent.isFile() ? FileType.FILE : FileType.FOLDER,
    }));
};
