import path from "path";
import { getDirectoryContents } from "../../../shared/utils/get-directory-contents";
import { FileType } from "../../../shared/types";

const getMetaDataPaths = async (
  npc_folder_contents: Awaited<ReturnType<typeof getDirectoryContents>>,
) => {
  const paths: string[] = [];

  const getMetaDataFiles = async (npc_folder: string) => {
    return await getDirectoryContents(npc_folder, (dirent) => {
      console.log(dirent.name);
      return (
        dirent.name.startsWith("BP_NPC") &&
        path.extname(dirent.name) === ".json"
      );
    });
  };

  await Promise.all(
    npc_folder_contents.map(async (root_item) => {
      if (root_item.type === FileType.FOLDER) {
        const root_contents = await getDirectoryContents(root_item.path);
        await Promise.all(
          root_contents.map(async (item) => {
            if (item.type === FileType.FOLDER) {
              const files = await getMetaDataFiles(item.path);
              files.forEach((file) => paths.push(file.path));
            }
          }),
        );
      }
    }),
  );

  return paths;
};

export const genEnemies = async () => {
  console.group("GENERATING ENEMY DATA");

  // Get all of the NPC folder directories.
  const npc_folder_contents = await getDirectoryContents(
    `${process.env.FMODEL_OUTPUT}/Content/characters/NPC`,
    (dirent) => dirent.name !== "Shared" && dirent.isDirectory(),
  );

  const all_metada_paths = await getMetaDataPaths(npc_folder_contents);

  console.log(all_metada_paths);

  console.groupEnd();
};
