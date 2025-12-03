import { DataGenerator } from "../shared/data-generator";
import { genEnemies } from "./gen-enemies";
import { genHeroes } from "./gen-heroes";

export const genCharacters = async (generator: DataGenerator) => {
  await Promise.all([genHeroes(generator), genEnemies(generator)]);
};
