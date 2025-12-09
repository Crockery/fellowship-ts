import {
  chunk,
  DataGenerator,
  getCharacterAbilityIds,
  resolveImageId,
  resolveAssetPath,
  resolveTranslateable,
} from "../../shared";
import { NpcDataRaw } from "./types";
import {
  ATTRIBUTES_KEY,
  CharacterAttributeBp,
  getCharacterAttributes,
} from "../common";

export const genNpcs = async (generator: DataGenerator) => {
  const attributes = generator.getFile<CharacterAttributeBp>(ATTRIBUTES_KEY);

  if (!attributes || !attributes[0].Rows) {
    throw new Error("No attributes file.");
  }

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

  const npc_data: Record<string, unknown>[] = [];

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

          const stats = await getCharacterAttributes(
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
              ? resolveImageId(thumbnail_path)
              : undefined,
            name: resolveTranslateable(json.Properties.DisplayName),
          });
        }
      }),
    );
  }

  const npcs = npc_data.filter((npc) => !!npc.id && !!npc.name && !!npc.tags);

  console.log(`Parsed ${npcs.length} NPCs.`);

  return npcs;
};
