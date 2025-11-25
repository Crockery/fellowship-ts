import fs from "fs-extra";
import { FileType } from "../types";

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
