import fs from "fs-extra";

import { DataGenerator } from "../../../shared/data-generator";
import { HeroMapTable, RawHeroMetaData, RawHeroTalentData } from "./types";
import { Hero } from "../../../../src/types";
import { getImagePathId, resolveAssetPath } from "../../../shared";
import {
  ATTRIBUTES_KEY,
  CharacterAttributeBp,
  getHeroAttributes,
} from "../common";

const getHeroId = (raw_path: string) =>
  raw_path.replace("CharacterID.Hero.", "");

// const hero_stat_keys = new Map<string, string[]>();

// const logUniqueStats = () => {
//   let all_keys = Array.from(hero_stat_keys).flatMap(([, keys]) => {
//     return keys;
//   });

//   all_keys = all_keys.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });

//   console.log("All keys:");
//   console.log(all_keys);
//   console.log("---");

//   Array.from(hero_stat_keys).map(([id, keys]) => {
//     all_keys.forEach((key) => {
//       if (!keys.includes(key)) {
//         console.log(`${id} is missing ${key}`);
//       }
//     });
//   });
// };

const mapRawHeroToHero = (
  raw_metadata: RawHeroMetaData,
  raw_talents: RawHeroTalentData,
  id: string,
  generator: DataGenerator,
): Hero => {
  const talents: Hero["talents"] = raw_talents.Properties.Talents.filter(
    (talent) => !talent.DisabledInGame,
  ).map((talent) => {
    return {
      id: talent.TalentID.TagName.replace("Talent.ID.", ""),
      name: {
        default: talent.Name.SourceString,
        key: talent.Name.Key,
      },
      unlocked_at: talent.UnlockLevel,
      row: talent.TalentRow,
      cost: talent.TalentPointCost,
      description: {
        default: talent.DetailedDescription.SourceString,
        key: talent.DetailedDescription.Key,
      },
      thumbnail: getImagePathId(talent.UIIconTexture.ResourceObject.ObjectPath),
    };
  });

  const properties = raw_metadata.Properties;

  const { R, G, B, A } = properties.ClassColor;

  const thumbnail = properties.PortraitTexture.AssetPathName.split(".")[1];

  const attributes = generator.getFile<CharacterAttributeBp>(ATTRIBUTES_KEY);

  if (!attributes || !attributes[0].Rows) {
    throw new Error("No attributes");
  }

  const stats = getHeroAttributes<Hero["stats"]>(attributes[0].Rows, id);

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
    name: {
      key: properties.HeroName.Key,
      default: properties.HeroName.SourceString,
    },
    title: {
      key: properties.HeroTitle.Key,
      default: properties.HeroTitle.SourceString,
    },
    description: {
      key: properties.HeroDescription.Key,
      default: properties.HeroDescription.SourceString,
    },
    biography: {
      key: properties.Biography.Key,
      default: properties.Biography.SourceString,
    },
    difficulty: properties.OverallDifficulty,
    talents,
    stats,
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

      generator.addWrite({
        path: `./src/data/heroes/${hero_id}.ts`,
        content: `
            import type { Hero } from "../../types";
            export const ${hero_id}: Hero = ${JSON.stringify(mapRawHeroToHero(meta_data, talent_data, hero_id, generator))};
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
