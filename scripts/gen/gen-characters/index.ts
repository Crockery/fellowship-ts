import { DataGenerator } from "../../shared";
import { genHeroes } from "./gen-heroes";
import { genNpcs } from "./gen-npcs";

export const genCharacters = async (generator: DataGenerator) => {
  await Promise.all([genHeroes(generator), genNpcs(generator)]);
};
