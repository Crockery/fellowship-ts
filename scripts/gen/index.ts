import { loadEnvFile } from "node:process";
import { DataGenerator } from "../shared";

import { genCharacters } from "./gen-characters";
import { genLang } from "./gen-lang";

try {
  loadEnvFile(".env");
} catch (error) {
  console.error("Unable to generate data: missing env file.", error);
}

const generator = new DataGenerator();

generator.addHandler("characters", genCharacters);
generator.addHandler("localization", genLang);

generator.start();
