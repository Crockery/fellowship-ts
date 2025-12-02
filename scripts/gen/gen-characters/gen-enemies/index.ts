import path from "path";
import { getDirectoryContents } from "../../../shared/utils/get-directory-contents";
import { FileType } from "../../../shared/types";
import { DataGenerator } from "../../shared/data-generator";
import { FSBlueprint } from "../../shared/types/shared";
import fs from "fs-extra";
import { type Enemy } from "../../../../src/types";
import { NpcDataRaw } from "../../shared/types/enemy";

const getMetaDataPaths = async (
  npc_folder_contents: Awaited<ReturnType<typeof getDirectoryContents>>,
) => {
  const paths: string[] = [];

  const getMetaDataFiles = async (npc_folder: string) => {
    return await getDirectoryContents(npc_folder, (dirent) => {
      return (
        dirent.name.startsWith("BP_NPC") &&
        path.extname(dirent.name) === ".json"
      );
    });
  };

  await Promise.all(
    npc_folder_contents.map(async (root_item) => {
      console.log(root_item);
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

const isEnemyDataBlock = (block: FSBlueprint): block is NpcDataRaw => {
  const name = block.Template?.ObjectName;

  return (
    !!name &&
    (name.startsWith("BP_NPC_Critter") || name.startsWith("BP_AICharacter"))
  );
};

const getEnemyMetaData = async (
  all_metada_paths: string[],
): Promise<Enemy[]> => {
  const enemies: Enemy[] = [];

  await Promise.all(
    all_metada_paths.map(async (data_path) => {
      const json: FSBlueprint[] = await fs.readJson(data_path);

      const enemy_info = json.find(isEnemyDataBlock);

      if (enemy_info) {
        enemies.push({
          id: enemy_info.Properties.CharacterID,
          tags: enemy_info.Properties.CharacterTags,
          thumbnail: enemy_info.Properties.PortraitIcon.ObjectName.replace(
            "Texture2D'",
            "",
          ).replace("'", ""),
          name: {
            default: enemy_info.Properties.DisplayName.SourceString,
            key: enemy_info.Properties.DisplayName.Key,
          },
        });
      }
    }),
  );

  return enemies;
};

export const genEnemies = async (generator: DataGenerator) => {
  const srcRoot = "./src/data/enemies";

  generator.addClean(srcRoot);

  // Get all of the NPC folder directories.
  const npc_folder_contents = await getDirectoryContents(
    `${process.env.FMODEL_OUTPUT}/Content/characters/NPC`,
    (dirent) => dirent.name !== "Shared" && dirent.isDirectory(),
  );

  const all_metada_paths = await getMetaDataPaths(npc_folder_contents);

  const meta_data = await getEnemyMetaData(all_metada_paths);

  meta_data.forEach(async (enemy) => {
    generator.addWrite({
      path: `${srcRoot}/${enemy.id}.ts`,
      content: `
        import type { Enemy } from "../types";
        export const ${enemy.id}: Enemy = ${JSON.stringify(enemy)};
      `,
    });
  });

  const enemy_ids = meta_data
    .map((enemy) => `"${enemy.id}"`)
    .sort((a, b) => {
      return a.localeCompare(b);
    });

  // Index file to export all the hero data files.
  generator.addWrite({
    path: `${srcRoot}/index.ts`,
    content: `${enemy_ids.map((id) => `export * from "./${id}";`).join("\n")}`,
  });
};
