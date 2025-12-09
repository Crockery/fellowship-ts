import fs from "fs-extra";

import { DataGenerator } from "../../shared";

const getLocaleKeys = async () => {
  const root = `${process.env.FMODEL_OUTPUT}/Content/Localization/Game`;
  const json = await fs.readJson(`${root}/Game.json`);
  let keys: string[] = [];

  if (json && json["CompiledCultures"]) {
    keys = json["CompiledCultures"];
  }

  return keys;
};

export const addLocaleGenerators = async (generator: DataGenerator) => {
  const keys = await getLocaleKeys();

  keys.forEach((key) => {
    generator.addGenerator({
      key,
      generator: async (_, key) => {
        const base_json = await fs.readJson(
          `${process.env.FMODEL_OUTPUT}/Content/Localization/Game/${key}/Game.json`,
        );

        return base_json && base_json[""] ? base_json[""] : {};
      },
      dir: "./src/data/localization",
      cast: "as Record<string, string>",
    });
  });
};

export const genLangKeys = async () => {
  const keys = await getLocaleKeys();

  return { keys };
};
