import type { Hero } from "../../types";
export const Ink: Hero = {
  id: "Ink",
  class_color: { R: 194, G: 124, B: 213, A: 255, hex: "#C27CD5" },
  thumbnail: "hero_portrait_Ink_01",
  name: { key: "87AE9D7D46E872F32A33FDB8D5A464BF", default: "Tariq" },
  title: {
    key: "6595FCFC41B2AFCA2FDC578D9B0AA6E2",
    default: "The Thunderlord",
  },
  description: {
    key: "47BAFD3D4120589C81BF1C8A2AA1DD6A",
    default:
      "Tariq channels storm and fury to deal immense damage to his enemies.\r\n\r\nTariq is a Melee Damage Dealer that uses Builder/Spender and Timing Mechanics. He excels in the front lines to flank his enemies while they face the Tank.\r\n\r\nTiming his abilities around his Swing Timer will maximize his damage and Fury generation.\r\n\r\nFury is required for Tariq to perform powerful attacks.",
  },
  biography: {
    key: "EE05B267473AD55F82CA52A2B63DF218",
    default:
      "Exiled from the Goremdal Mountains, Tariq honors his people by hunting monsters and preserving their traditions.\r\n\r\nStrong of hand and stronger of heart, he joins the Fellowship to uphold the legacy of his clan and find new family forged in honor.",
  },
  difficulty: 4,
  talents: [
    {
      id: "Talent2",
      name: {
        key: "0F5CE1784BE3FB4A1E0DBC970FB1A734",
        default: "Left Hand Path",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "BF84B21D48AAB7DF2D3B3893771A1DCC",
        default:
          "When <rt.absorb>Face Breaker</> deals critical strike damage, <rt.warning>30%</> of the damage dealt is also dealt to enemies near your target, reduced beyond 5 targets.\r\n\r\n<rt.absorb>Face Breaker's</> critical strike chance is increased by <rt.warning>+50%</>.",
      },
      thumbnail: "ink_T_Ink_Facebreaker",
    },
    {
      id: "Talent11",
      name: {
        key: "A9DB45EE4A96339650CC8484AC3ECEA0",
        default: "Concatenation",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "7BCD2F644D3BC2BE88CF319B4B7345EB",
        default:
          "Your <rt.bold>Attack Speed</> is increased by <rt.warning>50%</>.",
      },
      thumbnail: "berserker_Berserker6",
    },
    {
      id: "Talent3",
      name: {
        key: "7E54C35542F76B0CEA9AD897E467899F",
        default: "Blood & Thunder",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "AAFC5F514731CF80ECB6319481C2D980",
        default:
          "Your <rt.absorb>Heavy Strike</> has a chance to cast a free <rt.absorb>Chain Lightning</> at the target.\r\n\r\n(2.0 PPM)",
      },
      thumbnail: "tex_spellbookpage01_Tex_SpellBook01_91",
    },
    {
      id: "Talent6",
      name: { key: "BE75035D42FB83A521E6619C5DD8EDEF", default: "Bloodline" },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "5BDC491341B506270ECBBBAD3A2C2114",
        default:
          "You generate <rt.mana>1 Fury</> every 1 second.\r\n\r\nYou no longer lose <rt.mana>Fury</> while out of combat.",
      },
      thumbnail: "textures_T_Icon_BloodCombat_141",
    },
    {
      id: "Talent14",
      name: { key: "BCA429A346A256C54AA96DAE02030E78", default: "High Road" },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "597184C94454FD481FD8B4859E2A0D39",
        default:
          "When your <rt.absorb>Leap Smash</> ability does not hit an enemy, its cooldown is reduced by <rt.bold>14</>  seconds and your movement speed is increased by <rt.bold>50%</> for 4 seconds.\r\n\r\nYour <rt.absorb>Leap Smash</> has <rt.warning>+20% increased critical strike chance</>.\r\n\r\nYou now only generate <rt.mana>Fury</> with <rt.absorb>Leap Smash</> when it deals damage to an enemy.",
      },
      thumbnail: "barbarian_Barbarian8",
    },
    {
      id: "Talent7",
      name: {
        key: "CF9BD954430236BB653DC3A459851975",
        default: "Ride the Lightning",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "915F6802419D2CCF4240EB8743DC13DE",
        default:
          "Your <rt.absorb>Thunder Call</> generates <rt.mana>60</> Fury over its duration.",
      },
      thumbnail: "ink_T_Ink_Selfbuff",
    },
    {
      id: "Talent10",
      name: { key: "B60ABA8B4B1DA58798688883BD0ACE56", default: "Them Bones" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "039BC5A741FFCDF2BFE2C1A3EFDB61AB",
        default:
          "Your <rt.absorb>Skull Crusher</> has a <rt.bold>30%</> chance to have <rt.warning>+100%</> increased critical strike chance.\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
      },
      thumbnail: "ink_T_Ink_Skullcrusher",
    },
    {
      id: "Talent18",
      name: {
        key: "F8DD387F4DF2430AA0B03FBC58FEA5F2",
        default: "Kill 'Em All",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "0C1B8ECF4CF59415382ABEA44E2E2EDB",
        default:
          "Your <rt.absorb>Hammer Storm</> now spins 3 times per use for the same <rt.mana>Fury</> cost, but each consecutive spin deals <rt.warning>35% more damage</>.",
      },
      thumbnail: "ink_T_Ink_Hammerstorm",
    },
    {
      id: "Talent17",
      name: {
        key: "7B19284F4857B452C35A92A2E7D9E729",
        default: "Thunderstruck",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "280663A343A2615B1AFB0DA0B94F78BB",
        default:
          "Your <rt.absorb>Chain Lightning</> bounces <rt.warning>2</> additional times.",
      },
      thumbnail: "electromancer_Electromancer1",
    },
    {
      id: "Talent4",
      name: { key: "042D1432460604EF9FB759A7F3A5E4FC", default: "Pneuma" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "1F659DF546B2CA1B71A7EBAF2A5093C7",
        default:
          "While <rt.absorb>Thunder Call</> is active you take <rt.bold>10%</> reduced damage and you passively restore health equal to <rt.heal>5% of any damage you deal</> for the duration.",
      },
      thumbnail: "textures_T_Nhance_RPG_Energy_18",
    },
    {
      id: "Talent8",
      name: {
        key: "80E892D0449360AC688865913C722311",
        default: "Far Beyond Driven",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "2257DF2A4F0871081B2BF180AD5CD127",
        default:
          "Each time you use <rt.absorb>Heavy Strike</> you gain 1 stack of <rt.effect>Far Beyond Driven</> for 20 seconds, increasing your Spirit by <rt.warning>+2%</>.\r\n\r\n<rt.effect>Far Beyond Driven</> stacks up to 5 times.",
      },
      thumbnail: "textures_T_Nhance_RPG_Energy_13",
    },
    {
      id: "Talent15",
      name: { key: "C69CC9D5465CC8FBA6F38C8772F3A008", default: "Magic Ward" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "737CB90C4201EB146F1754BC7B0172DA",
        default: "You take 10% reduced Magic damage.",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent5",
      name: {
        key: "F6B55C9E4900C82A42F8258F7FC085A8",
        default: "Mouth for War",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "C6946FDC46205D7CEADF36BEB3404397",
        default:
          "When your <rt.absorb>Leap Smash</> ability deals damage, you are granted 1 charge of <rt.absorb>Focused Wrath</>.",
      },
      thumbnail: "ink_T_Ink_FocusedWrath",
    },
    {
      id: "Talent9",
      name: { key: "387DF58445A5443C0772B5AE23838EF7", default: "Schism" },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "EAB742B145274F2524AA97BDFB4309F0",
        default:
          "Your <rt.absorb>Skull Crusher</> has a chance to make your next <rt.absorb>Hammer Storm</> deal +250% increased damage.\r\n\r\nYour <rt.absorb>Hammer Storm</> has a chance to make your next <rt.absorb>Skull Crusher</> deal +250% increased damage.\r\n\r\n(3.2 PPM)",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_TwoFace",
    },
    {
      id: "Talent1",
      name: {
        key: "8129188741F53DDAB95E8C8ED8DE5F89",
        default: "Square Hammer",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "E039BA1C4D9B80B2D6B686B896A5425A",
        default:
          "<rt.absorb>Wild Swing</>, <rt.absorb>Face Breaker</>, <rt.absorb>Leap Smash</> & <rt.absorb>Chain Lightning</> each grant you 1 stack of <rt.effect>Square Hammer</>, up to <rt.bold>5</> stacks.\r\n\r\n<rt.effect>SQUARE HAMMER</>\r\nYour next <rt.absorb>Heavy Strike</> consumes all stacks of <rt.effect>Square Hammer</> and deals <rt.warning>20%</> more damage per stack consumed.",
      },
      thumbnail: "ink_T_Ink_TimerAbility",
    },
    {
      id: "Talent12",
      name: { key: "1F7DB44C4210EF22D9A5ECBBC61641A6", default: "Spit It Out" },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "B85C08D94DCD61133A17D39F7FC63AA2",
        default: "Your Critical Strike Power is increased by 10%.",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_FieryHammer",
    },
    {
      id: "Talent13",
      name: {
        key: "4ADF4F24459D922719E280AD834B5C81",
        default: "Spirited Fortitude",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "449BEA7646608FB6CB590B88DBB7684E",
        default:
          "You take 10% less damage from <bold>Area of Effect</> attacks.",
      },
      thumbnail: "barbarian_Barbarian3",
    },
    {
      id: "Talent16",
      name: {
        key: "3D806F5640B6C3C98CF1F6B793DD94AE",
        default: "Crack the Sky",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "0D351A0C45AA82187006AEB872DBEE01",
        default:
          "Your <bold>Lightning damage</> has <rt.warning>+20%</> increased critical strike chance.",
      },
      thumbnail: "electromancer_Electromancer18",
    },
  ],
  abilities: [
    "GA_Ink_MeleeInterrupt_C",
    "GA_Ink_MeleeAutoAttack_C",
    "GA_Ink_MoveToLocationAoeDamage_C",
    "GA_Ink_HeavySingleTargetAttack_C",
    "GA_Ink_AoeAttack_C",
    "GA_Ink_AutoAttackBuff_C",
    "GA_Ink_AutoAttackBuff_Attack_C",
    "GA_Ink_SecondChanceSingleTargetAttack_C",
    "GA_Ink_CleaveAttack_C",
    "GA_Ink_ChargedBuff_C",
    "GA_Ink_BouncyProjectile_C",
    "GA_Ink_EnhancedChargedBuff",
    "GA_Ink_LowHealthSingleTargetResourceDamage_C",
    "GA_Ink_AoeFear_C",
    "GA_Ink_CostReductionBuff_C",
    "GA_Ink_SelfDefenceBuff_C",
    "GA_Ink_Taunt_C",
  ],
  stats: {
    resources_tertiary: 0,
    max_resources_tertiary: 0,
    parry_chance: 0.05,
    weapon_damage_min: 0,
    weapon_damage_max: 0,
    strength: 1000,
    stamina_to_max_health_multiplier: 43.567,
    stamina: 1000,
    spirit_refund_chance_scale: 1,
    spirit_points: 0,
    spirit_generation_heal: 0.08,
    spirit_generation_damage: 0.08,
    spirit: 0,
    resources_second: 0,
    resources: 0,
    resist: 0,
    reflect_heal: 0,
    power: 0,
    passive_move_speed: 1,
    out_of_combat_mana_regen_tick_time: 0,
    out_of_combat_mana_regen_rate: 0,
    out_of_combat_health_regen_tick_time: 0.5,
    out_of_combat_health_regen_rate: 0.01,
    move_speed: 1,
    max_spirit_points: 100,
    max_resources_second: 100,
    max_resources: 100,
    max_mana: 0,
    mana_regen_tick_time: 0,
    mana_regen_rate: 0,
    mana: 0,
    life_steal: 0,
    intellect: 0,
    incoming_damage_multiplier: 1,
    health_regen_tick_time: 5,
    health_regen_rate: 0,
    heal_threat_multiplier: 0.5,
    haste: 1,
    expertise: 0,
    dodge_chance: 0.05,
    damage_threat_multiplier: 1,
    crit_multiplier: 2,
    crit_chance: 0.05,
    cooldown_recovery: 1,
    block_chance: 0,
    base_health: 18113,
    armor: 0,
    agility: 0,
  },
};
