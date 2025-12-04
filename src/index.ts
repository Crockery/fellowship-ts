import type { Hero, Npc, NpcId, HeroId } from "./types";
import * as AllHeroData from "./data/heroes";
import * as AllNpcData from "./data/npcs";
import { HeroIds, NpcIds } from "./constants";

export class FellowshipTs {
  private heroes_map: Map<HeroId, Hero>;
  private npc_map: Map<NpcId, Npc>;
  heroes: Hero[];
  npcs: Npc[];
  constructor() {
    this.heroes_map = new Map();
    this.npc_map = new Map();

    HeroIds.forEach((hero_id) => {
      this.heroes_map.set(hero_id, AllHeroData[hero_id]);
    });

    this.heroes = Array.from(this.heroes_map.values());

    NpcIds.forEach((npc_id) => {
      this.npc_map.set(npc_id, AllNpcData[npc_id]);
    });

    this.npcs = Array.from(this.npc_map.values());
  }

  getHero(id: HeroId) {
    return this.heroes_map.get(id);
  }

  getNpc(id: NpcId) {
    return this.npc_map.get(id);
  }
}
