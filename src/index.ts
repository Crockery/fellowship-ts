import ABILITY_DATA, { type Ability_DO_NOT_IMPORT } from "./data/abilities";
import HERO_DATA, { type Hero_DO_NOT_IMPORT } from "./data/heroes";
import NPC_DATA, { type NPC_DO_NOT_IMPORT } from "./data/npcs";

export type HeroId = (typeof HERO_DATA)[number]["id"];
export type NpcId = (typeof NPC_DATA)[number]["id"];
export type AbilityId = (typeof ABILITY_DATA)[number]["id"];
export type TalenIds = (typeof HERO_DATA)[number]["talents"][number]["id"];

export interface Hero extends Hero_DO_NOT_IMPORT {
  id: HeroId;
}

export interface Ability extends Ability_DO_NOT_IMPORT {
  id: AbilityId;
}

export interface Npc extends NPC_DO_NOT_IMPORT {
  id: NpcId;
}

export class FellowshipTs {
  // Ability to ability id map.
  private ability_map: Map<string, Ability> = new Map();
  private hero_map: Map<string, Hero> = new Map();
  private npc_map: Map<string, Npc> = new Map();
  translations: Record<string, string> | undefined = undefined;

  constructor() {
    ABILITY_DATA.forEach((ability) => {
      this.ability_map.set(ability.id, ability);
    });

    HERO_DATA.forEach((hero) => {
      this.hero_map.set(hero.id, hero as unknown as Hero);
    });

    NPC_DATA.forEach((npc) => {
      this.npc_map.set(npc.id, npc as unknown as Npc);
    });
  }

  // ABILITIES
  getAbility(id: string) {
    return this.ability_map.get(id);
  }
  getAbilities(filter: (ability: Ability) => boolean) {
    return ABILITY_DATA.filter(filter);
  }

  // HEROES
  getHero(id: HeroId) {
    return this.hero_map.get(id) as Hero;
  }

  // NPCS
  getNpc(id: NpcId) {
    return this.npc_map.get(id) as Npc;
  }
}
