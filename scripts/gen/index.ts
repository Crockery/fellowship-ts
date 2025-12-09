import { loadEnvFile } from "node:process";
import { DataGenerator } from "../shared";
import fs from "fs-extra";
// import { genCharacters } from "./gen-characters";
import { genLangKeys, addLocaleGenerators } from "./gen-lang";
import { genAbilities } from "./gen-abilities";
import { genHeroes } from "./gen-heroes";
import { CharacterAttributeBp } from "./common";
// import { genItems } from "./gen-items";

try {
  loadEnvFile(".env");
} catch (error) {
  console.error("Unable to generate data: missing env file.", error);
}

const generator = new DataGenerator();

const gen = async () => {
  // Add the attributes data table to the generator.
  // Used by genHeroes and genNpcs
  await generator.addFile("attributes", async () => {
    return (await fs.readJSON(
      `${process.env.FMODEL_OUTPUT}/Content/Abilities/DataTables/CT_CharacterBaseAttributes.json`,
    )) as CharacterAttributeBp;
  });

  generator.addGenerator({
    key: "abilities",
    generator: genAbilities,
    type_name: "Ability",
    cast: "as const",
  });

  generator.addGenerator({
    key: "locales",
    generator: genLangKeys,
    dir: "./src/data/localization",
    cast: "as const",
  });

  generator.addGenerator({
    key: "heroes",
    type_name: "Hero",
    generator: genHeroes,
    cast: "as const",
  });

  await addLocaleGenerators(generator);

  generator.start();
};

gen();
