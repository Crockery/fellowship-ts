import type { HeroData, HeroName } from "./types";
import * as AllHeroData from "./data/heroes";
import { HeroNames } from "./constants";

export class FellowshipTs {
  private heroes_map: Map<HeroName, HeroData>;
  constructor() {
    this.heroes_map = new Map();

    HeroNames.forEach((hero_name) => {
      const hero = AllHeroData[hero_name];
      this.heroes_map.set(hero.name.default as HeroName, hero);
    });
  }

  get heroes() {
    return Array.from(this.heroes_map.values());
  }

  getHero(name: HeroName) {
    return this.heroes_map.get(name);
  }
}
