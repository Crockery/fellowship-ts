import {
  HeroMetaDataRaw,
  HeroDataRaw,
  HeroTalentDataRaw,
} from "../../shared/types";
import fs from "fs-extra";
import { FSBlueprint } from "../../shared/types/shared";
import {
  Hero,
  HeroData,
  HeroMetaData,
  HeroTalentData,
} from "../../../../src/data/types";
import { saveHeroSupplementals } from "./helpers/save-hero-supplementals";

const getHeroMetaData = async (
  meta_data_path: string,
): Promise<HeroMetaData | null> => {
  try {
    const json: HeroMetaDataRaw[] = await fs.readJson(meta_data_path);

    if (!json || !json[0]) {
      throw new Error("No JSON");
    }

    const hero_info_raw = json[0];

    const R = hero_info_raw.Properties.ClassColor.R;
    const G = hero_info_raw.Properties.ClassColor.G;
    const B = hero_info_raw.Properties.ClassColor.B;
    const A = hero_info_raw.Properties.ClassColor.A;

    const thumbnail =
      hero_info_raw.Properties.PortraitTexture.AssetPathName.split(".")[1];

    if (!thumbnail) {
      console.log(
        `no thumb for ${hero_info_raw.Properties.HeroName.SourceString}`,
        hero_info_raw.Properties.PortraitTexture,
      );
    }

    return {
      class_color: {
        R,
        G,
        B,
        A,
        hex: `#${hero_info_raw.Properties.ClassColor.Hex}`,
      },
      thumbnail:
        hero_info_raw.Properties.PortraitTexture.AssetPathName.split(".")[1] ??
        "",
      name: {
        key: hero_info_raw.Properties.HeroName.Key,
        default: hero_info_raw.Properties.HeroName.SourceString,
      },
      title: {
        key: hero_info_raw.Properties.HeroTitle.Key,
        default: hero_info_raw.Properties.HeroTitle.SourceString,
      },
      description: {
        key: hero_info_raw.Properties.HeroDescription.Key,
        default: hero_info_raw.Properties.HeroDescription.SourceString,
      },
      biography: {
        key: hero_info_raw.Properties.Biography.Key,
        default: hero_info_raw.Properties.Biography.SourceString,
      },
      difficulty: hero_info_raw.Properties.OverallDifficulty,
    };
  } catch (error) {
    console.log(
      `Encountered error loading hero json at ${meta_data_path}`,
      error,
    );
    return null;
  }
};

const getHeroData = async (data_path: string): Promise<HeroData | null> => {
  const json: FSBlueprint[] = await fs.readJson(data_path);

  const hero_data = json.find((block) => {
    return !!block["Properties"]?.HeroID;
  });

  if (hero_data) {
    return {
      id: (hero_data as HeroDataRaw).Properties.HeroID.TagName,
    };
  }

  return null;
};

const getHeroTalents = async (
  talents_path: string,
): Promise<HeroTalentData[]> => {
  const json: FSBlueprint[] = await fs.readJson(talents_path);

  const talent_data = json.find((block) => {
    return block.Type === "CRTalentData";
  });

  if (!talent_data) {
    throw new Error(`Unable to find talent_data for ${talents_path}`);
  }

  return (talent_data as HeroTalentDataRaw).Properties.Talents.filter(
    (talent) => !talent.DisabledInGame,
  ).map((talent) => {
    return {
      id: talent.TalentID.TagName,
      name: {
        default: talent.Name.SourceString,
        key: talent.Name.Key,
      },
      unlocked_at: talent.UnlockLevel,
      row: talent.TalentRow,
      // TODO: Get column
      cost: talent.TalentPointCost,
      description: {
        default: talent.DetailedDescription.SourceString,
        key: talent.DetailedDescription.Key,
      },
      thumbnail: talent.UIIconTexture.ResourceObject.ObjectPath,
    };
  });
};

interface HeroDataPath {
  data_file: string;
  metadata_file: string;
  talents_file: string;
  hero_key: string;
}

export const genHeroes = async () => {
  console.group();
  console.log("Generating hero data.");

  // Step 1. Get the directory names within the hero directory
  const hero_paths_all = await fs.readdir(
    `${process.env.FMODEL_OUTPUT}/Content/characters/Heroes`,
    { withFileTypes: true },
  );

  const hero_keys = hero_paths_all
    .filter((path) => path.isDirectory())
    .map((dirent) => dirent.name);

  console.log(hero_keys);

  // Step 2. Using the keys, traverse the hero directory and
  // find which directories have a data, and meta-data file
  // for use to parse.
  const hero_paths: HeroDataPath[] = [];

  const getDataPaths = async (hero_key: string) => {
    // Get the files in the hero's directory.
    const paths = await fs.readdir(
      `${process.env.FMODEL_OUTPUT}/Content/characters/Heroes/${hero_key}`,
      { withFileTypes: true },
    );

    const files = paths.filter((dirent) => dirent.isFile());

    // Find the "data" file for that hero.
    const data_file = files.find((dirent) =>
      dirent.name
        .toLowerCase()
        .startsWith(`bp_hero_${hero_key}.json`.toLowerCase()),
    );

    // Find the "meta_data file for that hero. Seems like this can"
    // be named with or without a "_" before "MetaData"
    const metadata_file = files.find(
      (dirent) =>
        dirent.name
          .toLowerCase()
          .startsWith(`da_${hero_key}metadata.json`.toLowerCase()) ||
        dirent.name
          .toLowerCase()
          .startsWith(`da_${hero_key}_metadata.json`.toLowerCase()),
    );

    const talents_file = `${process.env.FMODEL_OUTPUT}/Content/Abilities/Talents/${hero_key}/DA_Talents_${hero_key}.json`;

    // Only add the hero if they have both a data, and metadata
    // path.
    if (data_file && metadata_file) {
      hero_paths.push({
        data_file: `${data_file.parentPath}/${data_file.name}`,
        metadata_file: `${metadata_file.parentPath}/${metadata_file.name}`,
        talents_file: talents_file,
        hero_key,
      });
    }
  };

  await Promise.all(hero_keys.map((key) => getDataPaths(key)));

  console.log(
    `${hero_paths.length} valid heroes found: ${hero_paths.map((hero) => hero.hero_key).join(", ")}`,
  );

  // Step 3. Using the data, and metadata files, convert
  // the JSON in them to usable hero info JSON.
  const all_hero_data = await Promise.all(
    hero_paths.map(async (hero) => {
      const [meta_data, data, talents] = await Promise.all([
        getHeroMetaData(hero.metadata_file),
        getHeroData(hero.data_file),
        getHeroTalents(hero.talents_file),
      ]);

      if (!meta_data || !data) {
        throw new Error(
          `Unable to get hero data for ${hero.hero_key}: meta: ${!!meta_data} / data: ${!!data}`,
        );
      }

      const data_full: Hero = { ...meta_data, ...data, talents };
      return data_full;
    }),
  );

  await fs.ensureDir("./src/data/heroes");

  // Step 4. Write the hero data to .ts files to be used by the library.
  await Promise.all(
    all_hero_data.map(async (hero) => {
      const file = `
        import type { Hero } from "../types";
        export const ${hero.name.default}: Hero = ${JSON.stringify(hero)};
      `;
      await fs.writeFile(`./src/data/heroes/${hero.name.default}.ts`, file);
    }),
  );

  // Index file to export all the hero data files.
  const heroExports = `${all_hero_data.map((hero) => `export * from "./${hero.name.default}";`).join("\n")}`;

  await fs.writeFile(`./src/data/heroes/index.ts`, heroExports);

  await saveHeroSupplementals(
    all_hero_data.map((hero) => `"${hero.name.default}"`),
  );

  console.log("Done generating heroes.");
  console.groupEnd();
};
