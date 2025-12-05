export * from "./generated";

export interface Translateable {
  key: string;
  default: string;
}

export interface Hero {
  class_color: {
    R: number;
    G: number;
    B: number;
    A: number;
    hex: string;
  };
  thumbnail: string;
  name: Translateable;
  title: Translateable;
  description: Translateable;
  biography: Translateable;
  difficulty: number;
  id: string;
  talents: {
    id: string;
    name: Translateable;
    unlocked_at: number;
    row: number;
    cost: number;
    description: Translateable;
    thumbnail: string;
  }[];
  stats: {
    agility: number;
    armor: number;
    base_health: number;
    block_chance: number;
    cooldown_recovery: number;
    crit_chance: number;
    crit_multiplier: number;
    damage_threat_multiplier: number;
    dodge_chance: number;
    expertise: number;
    haste: number;
    heal_threat_multiplier: number;
    health_regen_rate: number;
    health_regen_tick_time: number;
    incoming_damage_multiplier: number;
    intellect: number;
    life_steal: number;
    mana: number;
    mana_regen_rate: number;
    mana_regen_tick_time: number;
    max_mana: number;
    max_resources: number;
    max_resources_second: number;
    max_spirit_points: number;
    move_speed: number;
    out_of_combat_health_regen_rate: number;
    out_of_combat_health_regen_tick_time: number;
    out_of_combat_mana_regen_rate: number;
    out_of_combat_mana_regen_tick_time: number;
    passive_move_speed: number;
    power: number;
    reflect_heal: number;
    resist: number;
    resources: number;
    resources_second: number;
    spirit: number;
    spirit_generation_damage: number;
    spirit_generation_heal: number;
    spirit_points: number;
    spirit_refund_chance_scale: number;
    stamina: number;
    stamina_to_max_health_multiplier: number;
    strength: number;
    weapon_damage_max: number;
    weapon_damage_min: number;
    parry_chance: number;
    max_resources_tertiary: number;
    resources_tertiary: number;
  };
}

export interface Npc {
  name: Translateable;
  id: string;
  thumbnail?: string;
  tags: string[];
  stats: {
    default_base_health_multiplier: number;
    strength: number;
    armor: number;
    resist: number;
    kill_score: number;
    spirit_point_value: number;
    passive_move_speed: number;
    block_damage_reduction_multiplier: number;
    block_chance: number;
    crit_chance: number;
    move_speed: number;
    base_health: number;
    agility: number;
    intellect: number;
    block_damage_reduction: number;
    life_steal: number;
    dodge_chance: number;
    health_regen_rate: number;
    incoming_damage_multiplier: number;
    mana_regen_rate: number;
    max_mana: number;
    mana: number;
    min_health: number;
    haste: number;
    crit_multiplier: number;
  };
}
