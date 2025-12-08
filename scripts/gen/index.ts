import { loadEnvFile } from "node:process";
import { DataGenerator } from "../shared";

// import { genCharacters } from "./gen-characters";
// import { genLang } from "./gen-lang";
import { genAbilities } from "./gen-abilities";
// import { genItems } from "./gen-items";

try {
  loadEnvFile(".env");
} catch (error) {
  console.error("Unable to generate data: missing env file.", error);
}

const generator = new DataGenerator();

// generator.addHandler("characters", genCharacters);
generator.addGenerator("abilities", "Ability", genAbilities);
// generator.addHandler("items", genItems);
// generator.addHandler("localization", genLang);

generator.start();
