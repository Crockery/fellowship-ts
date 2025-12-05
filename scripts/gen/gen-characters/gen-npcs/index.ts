import {
  chunk,
  DataGenerator,
  getCharacterAbilityIds,
  getImagePathId,
  resolveAssetPath,
  resolveTranslateable,
} from "../../../shared";
import { Npc } from "../../../../src/types";
import { NpcDataRaw } from "./types";
import { getNpcAttributes } from "../common/get-character-attributes";
import { ATTRIBUTES_KEY, CharacterAttributeBp } from "../common";

export const genNpcs = async (generator: DataGenerator) => {
  const src_root = "./src/data/npcs";

  const attributes = generator.getFile<CharacterAttributeBp>(ATTRIBUTES_KEY);

  if (!attributes || !attributes[0].Rows) {
    throw new Error("No attributes file.");
  }

  generator.addClean(src_root);

  console.group("Getting NPC data.");

  const registry = generator.registry;

  const npc_paths = registry.filter((asset) => {
    return (
      asset.asset_class === "BlueprintGeneratedClass" &&
      asset.pkg_name.startsWith("/Game/characters/NPC") &&
      asset.asset_name.startsWith("BP_NPC")
    );
  });

  console.log(`Parsing metadata for ${npc_paths.length} potential NPCs.`);

  const npc_chunks = chunk(npc_paths, 100);

  const npc_data: Npc[] = [];

  for await (const chunk of npc_chunks) {
    await Promise.all(
      chunk.map(async (to_get) => {
        const json = await resolveAssetPath<NpcDataRaw>({
          asset_path: to_get.obj_path,
          id_key: "Type",
        });

        if (json) {
          const thumbnail_path = json.Properties.PortraitIcon?.ObjectPath;
          const npc_id = json.Properties.CharacterID;

          const stats = await getNpcAttributes<Npc["stats"]>(
            attributes[0].Rows,
            npc_id,
          );

          const abilities = await getCharacterAbilityIds(
            generator,
            npc_id,
            true,
          );

          npc_data.push({
            id: json.Properties.CharacterID,
            tags: json.Properties.CharacterTags,
            abilities,
            stats,
            thumbnail: thumbnail_path
              ? getImagePathId(thumbnail_path)
              : undefined,
            name: resolveTranslateable(json.Properties.DisplayName),
          });
        }
      }),
    );
  }

  const npcs = npc_data.filter(
    (npc): npc is Npc => !!npc.id && !!npc.name && !!npc.tags,
  );

  console.log(`Parsed ${npcs.length} NPCs.`);

  npcs.forEach(async (npc) => {
    generator.addWrite({
      path: `${src_root}/${npc.id}.ts`,
      content: `
        import type { Npc } from "../../types";
        export const ${npc.id}: Npc = ${JSON.stringify(npc)};
      `,
    });
  });

  const npc_ids = npcs
    .map((npc) => npc.id)
    .sort((a, b) => {
      return a.localeCompare(b);
    });

  // Index file to export all the hero data files.
  generator.addWrite({
    path: `${src_root}/index.ts`,
    content: `${npc_ids.map((id) => `export * from "./${id}";`).join("\n")}`,
  });

  generator.addStaticFileContent({
    file: "constants",
    type: "imports",
    content: `import type { NpcId } from "../../types";`,
  });

  generator.addStaticFileContent({
    file: "constants",
    type: "body",
    content: `export const NpcIds: NpcId[] = [${npc_ids.map((id) => `"${id}"`).join(", ")}]`,
  });

  generator.addStaticFileContent({
    file: "typings",
    type: "body",
    content: `export type NpcId = ${npc_ids.map((id) => `"${id}"`).join(" | ")};`,
  });

  console.groupEnd();
};
