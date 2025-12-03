import type { HeroData, HeroId } from "./types";
import * as AllHeroData from "./data/heroes";
import { HeroIds } from "./constants";

export class FellowshipTs {
  private heroes_map: Map<HeroId, HeroData>;
  constructor() {
    this.heroes_map = new Map();

    HeroIds.forEach((hero_id) => {
      const hero = AllHeroData[hero_id];
      this.heroes_map.set(hero.name.default as HeroId, hero);
    });
  }

  get heroes() {
    return Array.from(this.heroes_map.values());
  }

  getHero(id: HeroId) {
    return this.heroes_map.get(id);
  }
}
