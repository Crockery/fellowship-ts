import path from "path";
import { getDirectoryContents } from "../../../shared/utils/get-directory-contents";
import { FileType } from "../../../shared/types";
import { DataGenerator } from "../../shared/data-generator";
// import { Enemy } from "../../../../src/data/types";
// import { FSBlueprint } from "../../shared/types/shared";
// import fs from "fs-extra";

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

// const getEnemyMetaData = async (all_metada_paths: string[]): Enemy[] => {
//   const enemies: Enemy[] = [];

//   await Promise.all(
//     all_metada_paths.map(async (data_path) => {
//       const json: FSBlueprint[] = await fs.readJson(data_path);
//     }),
//   );

//   return enemies;
// };

export const genEnemies = async (generator: DataGenerator) => {
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
