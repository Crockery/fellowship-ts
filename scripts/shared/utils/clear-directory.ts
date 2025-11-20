import fs from "fs-extra";
import path from "path";

export const clearDirectory = async (dir: string) => {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile()) {
      const filePath = path.join(dir, file.name);
      await fs.unlink(filePath);
    }
  }
};
