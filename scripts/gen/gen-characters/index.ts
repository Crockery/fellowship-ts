import { genHeroes } from "./gen-heroes";

export const genCharacters = async () => {
  return await Promise.all([genHeroes()]);
};
