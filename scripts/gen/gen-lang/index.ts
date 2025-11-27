import fs from "fs-extra";

import { DataGenerator } from "../shared/data-generator";

const copyLocaleJson = async (
  key: string,
  root: string,
  dest: string,
  generator: DataGenerator,
) => {
  const base_json = await fs.readJson(`${root}/${key}/Game.json`);

  if (base_json && base_json[""]) {
    const actual_json = base_json[""];

    generator.addWrite({
      path: `${dest}/${key}/${key}.json`,
      content: JSON.stringify(actual_json, null, 2),
    });
  }
};

export const genLang = async (generator: DataGenerator) => {
  const root = `${process.env.FMODEL_OUTPUT}/Content/Localization/Game`;

  const dest = "./src/localization";

  generator.addClean(`${dest}/locales`);

  const rootJson = await fs.readJson(`${root}/Game.json`);

  let keys: string[] = [];

  if (rootJson && rootJson["CompiledCultures"]) {
    keys = rootJson["CompiledCultures"];
  }

  if (keys.length) {
    await Promise.all(
      keys.map((key) =>
        copyLocaleJson(key, root, `${dest}/locales`, generator),
      ),
    );

    generator.addStaticFileContent({
      file: "typings",
      type: "body",
      content: `export const LangKeys = [${keys.map((key) => `"${key}"`)}];`,
    });
  }
};
