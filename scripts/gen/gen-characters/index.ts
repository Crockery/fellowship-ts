import { DataGenerator } from "../../shared";
import { CharacterAttributeBp } from "./common/types";
import { genHeroes } from "./gen-heroes";
import { genNpcs } from "./gen-npcs";

import fs from "fs-extra";

export const genCharacters = async (generator: DataGenerator) => {
  await generator.addFile("attributes", async () => {
    return (await fs.readJSON(
      `${process.env.FMODEL_OUTPUT}/Content/Abilities/DataTables/CT_CharacterBaseAttributes.json`,
    )) as CharacterAttributeBp;
  });

  await Promise.all([genHeroes(generator), genNpcs(generator)]);
};
