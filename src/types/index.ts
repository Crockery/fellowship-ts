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
    Agility: number;
    Armor: number;
    BaseHealth: number;
    BlockChance: number;
    CooldownRecovery: number;
    CritChance: number;
    CritMultiplier: number;
    DamageThreatMultiplier: number;
    DodgeChance: number;
    Expertise: number;
    Haste: number;
    HealThreatMultiplier: number;
    HealthRegenRate: number;
    HealthRegenTickTime: number;
    IncomingDamageMultiplier: number;
    Intellect: number;
    LifeSteal: number;
    Mana: number;
    ManaRegenRate: number;
    ManaRegenTickTime: number;
    MaxMana: number;
    MaxResources: number;
    MaxResourcesSecond: number;
    MaxSpiritPoints: number;
    MoveSpeed: number;
    OutOfCombatHealthRegenRate: number;
    OutOfCombatHealthRegenTickTime: number;
    OutOfCombatManaRegenRate: number;
    OutOfCombatManaRegenTickTime: number;
    PassiveMoveSpeed: number;
    Power: number;
    ReflectHeal: number;
    Resist: number;
    Resources: number;
    ResourcesSecond: number;
    Spirit: number;
    SpiritGenerationDamage: number;
    SpiritGenerationHeal: number;
    SpiritPoints: number;
    SpiritRefundChanceScale: number;
    Stamina: number;
    StaminaToMaxHealthMultiplier: number;
    Strength: number;
    WeaponDamageMax: number;
    WeaponDamageMin: number;
    ParryChance: number;
    MaxResourcesTertiary: number;
    ResourcesTertiary: number;
  };
}

export interface Npc {
  name: Translateable;
  id: string;
  thumbnail?: string;
  tags: string[];
}
