import fs from "fs-extra";

import { DataGenerator } from "../../../shared/data-generator";
import { HeroMapTable, RawHeroMetaData, RawHeroTalentData } from "./types";
import { Hero } from "../../../../src/types";
import {
  getCharacterAbilityIds,
  resolveImageId,
  resolveAssetPath,
  resolveTranslateable,
} from "../../../shared";
import {
  ATTRIBUTES_KEY,
  CharacterAttributeBp,
  getHeroAttributes,
} from "../common";

const getHeroId = (raw_path: string) =>
  raw_path.replace("CharacterID.Hero.", "");

const mapRawHeroToHero = async (
  raw_metadata: RawHeroMetaData,
  raw_talents: RawHeroTalentData,
  id: string,
  generator: DataGenerator,
): Promise<Hero> => {
  const talents: Hero["talents"] = raw_talents.Properties.Talents.filter(
    (talent) => !talent.DisabledInGame,
  ).map((talent) => {
    return {
      id: talent.TalentID.TagName.replace("Talent.ID.", ""),
      name: resolveTranslateable(talent.Name),
      unlocked_at: talent.UnlockLevel,
      row: talent.TalentRow,
      cost: talent.TalentPointCost,
      description: resolveTranslateable(talent.DetailedDescription),
      thumbnail: resolveImageId(talent.UIIconTexture.ResourceObject.ObjectPath),
    };
  });

  const properties = raw_metadata.Properties;

  const { R, G, B, A } = properties.ClassColor;

  const thumbnail = properties.PortraitTexture.AssetPathName.split(".")[1];

  const attributes = generator.getFile<CharacterAttributeBp>(ATTRIBUTES_KEY);

  if (!attributes || !attributes[0].Rows) {
    throw new Error(`No attributes found for ${id}.`);
  }

  const abilities = await getCharacterAbilityIds(generator, id);

  return {
    id,
    class_color: {
      R,
      G,
      B,
      A,
      hex: `#${properties.ClassColor.Hex}`,
    },
    thumbnail: thumbnail,
    name: resolveTranslateable(properties.HeroName),
    title: resolveTranslateable(properties.HeroTitle),
    description: resolveTranslateable(properties.HeroDescription),
    biography: resolveTranslateable(properties.Biography),
    difficulty: properties.OverallDifficulty,
    talents,
    abilities,
    stats: getHeroAttributes<Hero["stats"]>(attributes[0].Rows, id),
  };
};

export const genHeroes = async (generator: DataGenerator) => {
  const info_table = await fs.readJSON(
    `${process.env.FMODEL_OUTPUT}/Content/characters/DT_CharacterInfoTable.json`,
  );

  if (!info_table) {
    throw new Error("Unable to find info table.");
  }

  const hero_rows = (info_table as HeroMapTable)[0].Rows;

  let hero_ids = Object.keys(hero_rows).sort((a, b) => {
    return a.localeCompare(b);
  });

  const heroes = hero_ids
    .map((id) => hero_rows[id])
    .filter((hero) => hero.IsLive);

  hero_ids = heroes.map((hero) => getHeroId(hero.HeroID.TagName));

  await Promise.all(
    heroes.map(async (hero) => {
      const hero_id = getHeroId(hero.HeroID.TagName);

      const meta_data = await resolveAssetPath<RawHeroMetaData>({
        asset_path: hero.CharacterMetaData.ObjectPath,
      });

      if (!meta_data) {
        throw new Error(`Unable to find metadata for hero ${hero_id}`);
      }

      const talent_data = await resolveAssetPath<RawHeroTalentData>({
        asset_path: hero.TalentData.AssetPathName,
      });

      if (!talent_data) {
        throw new Error(`Unable to find tale for hero ${hero_id}`);
      }

      const to_write = await mapRawHeroToHero(
        meta_data,
        talent_data,
        hero_id,
        generator,
      );

      generator.addWrite({
        path: `./src/data/heroes/${hero_id}.ts`,
        content: `
            import type { Hero } from "../../types";
            export const ${hero_id}: Hero = ${JSON.stringify(to_write)};
          `,
      });
    }),
  );

  generator.addWrite({
    path: `./src/data/heroes/index.ts`,
    content: `${hero_ids.map((id) => `export * from "./${id}";`).join("\n")}`,
  });

  generator.addStaticFileContent({
    file: "constants",
    type: "imports",
    content: `import type { HeroId } from "../../types";`,
  });

  generator.addStaticFileContent({
    file: "constants",
    type: "body",
    content: `export const HeroIds: HeroId[] = [${hero_ids.map((id) => `"${id}"`).join(", ")}]`,
  });

  generator.addStaticFileContent({
    file: "typings",
    type: "body",
    content: `export type HeroId = ${hero_ids.map((id) => `"${id}"`).join(" | ")};`,
  });
};
