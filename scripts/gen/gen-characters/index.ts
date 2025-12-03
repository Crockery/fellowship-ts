import { DataGenerator } from "../shared/data-generator";
// import { genEnemies } from "./gen-enemies";
// import { genHeroes } from "./gen-heroes";
import { genHeroesNew } from "./gen-heroes/new";

export const genCharacters = async (generator: DataGenerator) => {
  // await Promise.all([genHeroes(generator), genEnemies(generator)]);
  await Promise.all([genHeroesNew(generator)]);
};
