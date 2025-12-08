import type { Hero, Npc, NpcId, HeroId } from "./types";
import * as AllHeroData from "./data/heroes";
import * as AllNpcData from "./data/npcs";
import { HeroIds, NpcIds } from "./constants";

import ABILITY_DATA, { type Ability } from "./data/abilities";

interface Args {
  should_throw?: boolean;
}

export class FellowshipTs {
  private heroes_map: Map<HeroId, Hero>;
  private npc_map: Map<NpcId, Npc>;
  private ability_map: Map<string, Ability>;

  should_throw: boolean;

  heroes: Hero[];
  npcs: Npc[];
  constructor({ should_throw }: Args) {
    this.should_throw = !!should_throw;

    this.heroes_map = new Map();
    this.npc_map = new Map();
    this.ability_map = new Map();

    ABILITY_DATA.forEach((ability) => {
      this.ability_map.set(ability.id, ability);
    });

    HeroIds.forEach((hero_id) => {
      this.heroes_map.set(hero_id, AllHeroData[hero_id]);
    });

    this.heroes = Array.from(this.heroes_map.values());

    NpcIds.forEach((npc_id) => {
      this.npc_map.set(npc_id, AllNpcData[npc_id]);
    });

    this.npcs = Array.from(this.npc_map.values());
  }

  getAbility(id: string) {
    return this.ability_map.get(id);
  }

  getAbilities(filter: (ability: Ability) => boolean) {
    return ABILITY_DATA.filter(filter);
  }

  getHero(id: HeroId) {
    return this.heroes_map.get(id);
  }

  getNpc(id: NpcId) {
    return this.npc_map.get(id);
  }
}
