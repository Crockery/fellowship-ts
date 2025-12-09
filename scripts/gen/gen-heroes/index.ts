import fs from "fs-extra";
import { DataGenerator } from "../../shared/data-generator";

import { HeroMapTable, RawHeroMetaData, RawHeroTalentData } from "./types";
import {
  getCharacterAbilityIds,
  resolveImageId,
  resolveAssetPath,
  resolveTranslateable,
} from "../../shared";
import {
  ATTRIBUTES_KEY,
  type CharacterAttributeBp,
  getCharacterAttributes,
} from "../common";

const getHeroId = (raw_path: string) =>
  raw_path.replace("CharacterID.Hero.", "");

const mapRawHeroToHero = async (
  raw_metadata: RawHeroMetaData,
  raw_talents: RawHeroTalentData,
  id: string,
  generator: DataGenerator,
) => {
  const talents = raw_talents.Properties.Talents.filter(
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
    console.log(attributes);
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
    stats: getCharacterAttributes(attributes[0].Rows, id),
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

  const hero_data: Record<string, unknown>[] = [];

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

      hero_data.push(
        await mapRawHeroToHero(meta_data, talent_data, hero_id, generator),
      );
    }),
  );

  return hero_data;
};
