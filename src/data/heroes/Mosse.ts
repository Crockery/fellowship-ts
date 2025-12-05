import type { Hero } from "../../types";
export const Mosse: Hero = {
  id: "Mosse",
  class_color: { R: 234, G: 79, B: 132, A: 255, hex: "#EA4F84" },
  thumbnail: "hero_portrait_Mosse_01_default",
  name: { key: "E0CF1169469B16621C48E3A819E61667", default: "Sylvie" },
  title: {
    key: "05ED62E745B745321C6806A5B84DF699",
    default: "The Daughter of the Forest",
  },
  description: {
    key: "46A8A058428C2AC7BD2D1F8F98E00CD9",
    default:
      "Sylvie is a healer who uses her innate connection to nature and its many friends to heal her allies and harm her foes.\r\n\r\nSylvie is a Healer that uses Pet Management Mechanics. She excels at sending her pets to heal her allies over time and attack her enemies.\r\n\r\nShe commands her Flutterflies and Plants to heal allies and attack enemies.\r\n\r\nHer powerful Heal over Time spells allow her to prepare for battle and endure long and sustained fights.",
  },
  biography: {
    key: "08DADB074F7EED9DD6725A84AB7DA20D",
    default:
      "A changeling abandoned as a child, Sylvie was raised by the creatures of the Wyrdwoods and taught the language of flora and fauna.\r\n\r\nOutcast from civilization, she joins the Fellowship in search of kinship and a home she has never known.",
  },
  difficulty: 3,
  talents: [
    {
      id: "Talent1",
      name: {
        key: "3A75326140BFA7C6290F3BA1B0398991",
        default: "Nettle to the Petal",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "2BBC59F945C6A5243533B39211A3B271",
        default:
          "Each time you deal damage with <rt.absorb>Nettlebolt</>, your <rt.absorb>Life Petal</> triggers an additional tick of its healing.",
      },
      thumbnail: "sylvie_T_Mosse_Lifepetal",
    },
    {
      id: "Talent2",
      name: {
        key: "EFB88164466E2D34A2EE388E16793033",
        default: "Synchronized Fluttering",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "8C2E90E545B7B7D35D66CCB72DCE2A14",
        default:
          "Hold down <rt.absorb>Fluttercall: Heal</> for 2 seconds to overcharge it, causing the ability to be cast on up to 4 allies within 4000 range in one cast. The mana cost is increased by 100% when cast in this way.\r\n\r\n<bold>Overcharged Abilities</>\r\nHold down the relevant ability button until a cast bar is displayed. Once the cast has completed, the overcharged version of the ability will trigger.",
      },
      thumbnail: "sylvie_Sylvie_AbilityIcon_03",
    },
    {
      id: "Talent3",
      name: {
        key: "3249BF6548400871C589E3BCA409C976",
        default: "Verdant Restoration",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "1BE7FFA54B34176844B493920F64AE4E",
        default:
          "The initial heal of your <rt.absorb>Fluttercall: Restore Life</> has +50% increased critical strike chance.",
      },
      thumbnail: "textures_T_Nhance_RPG_Shadow_58",
    },
    {
      id: "Talent4",
      name: {
        key: "2C60A9454A47B9F806D9408C282A8CCD",
        default: "Sprouting Nettles",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "FCA8E9ED47BDCFC1EAC0FAB4EC7EBA42",
        default:
          "Each tick of <rt.meikoability1>Flutterfly Healing</> has a chance to make your next <rt.absorb>Nettlebolt</> <rt.bold>instant cast</> and have <rt.warning>+400% critical strike chance</>.\r\n\r\n(2.0 PPM)\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
      },
      thumbnail: "sylvie_Sylvie_AbilityIcon_02",
    },
    {
      id: "Talent5",
      name: {
        key: "065769AD4EA82D9C3CF87383C9BE582C",
        default: "Natural Knowledge",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "5565A2D344A18E7D5400ED89BD4C5801",
        default:
          "Each time your Nettlebolt deals damage, you replenish 1% mana.",
      },
      thumbnail: "tex_skill_icons_pack_Tex_blue_9",
    },
    {
      id: "Talent6",
      name: {
        key: "BAD9E98A46A79C13E848AAAE3F8E4B07",
        default: "Trailing Restoration",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "A6B1BA8442DA9368B91EDFA6CB556FCC",
        default:
          "The duration of your <rt.absorb>Fluttercall: Restore Life</> is increased by 9 seconds.",
      },
      thumbnail: "textures_T_ArcaneAid",
    },
    {
      id: "Talent18",
      name: { key: "23B77C43410F3C625BC77B9C86118B39", default: "Symbiosis" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "E8087CEC4011198023BFA5BA7CDF5093",
        default:
          "Your <rt.absorb>Prickly Vines</> deal <rt.warning>12% more damage</> for each player that has a <rt.effect>Pink Flutterfly</>.",
      },
      thumbnail: "sylvie_T_Mosse_Vine",
    },
    {
      id: "Talent8",
      name: {
        key: "4D2A346D4EE8D944D9BBF3A08A51E06D",
        default: "Will of Nature",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "4DF530204A7E808B8244D0935DBB044D",
        default:
          "Your healing is increased by 25% on players with <bold>30% or less health</>.\r\n",
      },
      thumbnail: "textures_T_Icon_Fel_07",
    },
    {
      id: "Talent9",
      name: {
        key: "8A6FDA13410372F10178D8930646AECB",
        default: "Rowdy Rootsap",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "CC7C78D846BB2DABAA7A58A4ACCDAF7A",
        default:
          "Your <rt.absorb>Enfeebling Rootsap</> causes the target and all enemies within a 700 radius of the target to have 20% reduced attack speed and 50% reduced movement speed while active.",
      },
      thumbnail: "sylvie_T_Mosse_Rootheal",
    },
    {
      id: "Talent10",
      name: {
        key: "7463AAFD4EA1ADF20A5265888783FCB6",
        default: "Nurtured Haven",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "40968DBD426F60FD404E51A224B78980",
        default:
          "The cooldown of your <rt.absorb>Safe Haven</> is reduced each time one of your plants wither.\r\n\r\n<rt.absorb>Prickly Vine</> - 1 second\r\n<rt.absorb>Life Petal</> - 2 seconds\r\n<rt.absorb>Heart Bloom</> - 3 seconds",
      },
      thumbnail: "sylvie_T_Mosse_LinkCD",
    },
    {
      id: "Talent11",
      name: { key: "5C172D0E449591E02B05898263F37FA6", default: "Magic Ward" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "2592EF3C4EA009BAAC1B969CA0275794",
        default: "You take <rt.bold>10% less magic damage</>.",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent16",
      name: {
        key: "48A5848F43DB11543AF94B8B2726D0EE",
        default: "Bluey's Gambit",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "EF9A18864B3AEDE66C5626B0CB4A484D",
        default:
          "While your <bold>Blue Flutterfly</> is following you, you take 5% reduced damage.\r\n\r\nWhile your <bold>Blue Flutterfly</> is following another player, they take 5% reduced damage.",
      },
      thumbnail: "textures_T_Nhance_RPG_Elements_32",
    },
    {
      id: "Talent13",
      name: {
        key: "1ED4858E45F8BA172C288CB6263F1A62",
        default: "Natural Protector",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "C5CA6B9E43AC73F6FD3DBFBF9FCCA165",
        default:
          "Your <rt.absorb>Ironleaf Ward</> and <rt.absorb>Safe Haven</> abilities shield players for 15 seconds, absorbing up to <rt.heal>4263% intellect</> damage.",
      },
      thumbnail: "druid_Druid17",
    },
    {
      id: "Talent14",
      name: {
        key: "96E3640C456437149CD081999AEEF28E",
        default: "Flutterswift",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "53DF8E464CF32486EF8450BFAC8173EE",
        default:
          "Your <rt.absorb>Fluttercall: Heal</> ticks 100% faster for the first 12 seconds each time it begins healing a player.",
      },
      thumbnail: "textures_T_ArcaneWhirl",
    },
    {
      id: "Talent15",
      name: {
        key: "DF99486A4609DD215A5505B5B1528B90",
        default: "Flower Power",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "E4E95D924704DF7E01CC0C849C8A7725",
        default:
          "Your <rt.absorb>Heart Bloom</> has 2 charges but only accumulates 8% of all <rt.meikoability1>Flutterfly Healing</>.\r\n\r\n<rt.absorb>Heart Bloom</> gains <rt.meikoability2>Cooldown Acceleration</> equal to your Haste.",
      },
      thumbnail: "sylvie_T_Mosse_Bigheal",
    },
    {
      id: "Talent7",
      name: {
        key: "069A560441E7058DFF18A1A804FE490B",
        default: "Elusive Wildling",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "C7CA0E0746EDD1EE6D7AEBA7233E2885",
        default:
          "You take <rt.bold>20% reduced damage</> while <rt.absorb>Hidden Trail</> is active.",
      },
      thumbnail: "sylvie_T_Mosse_Hide",
    },
    {
      id: "Talent12",
      name: {
        key: "2DC8302C4E61C3F357D06D892053DFD6",
        default: "Spirited Fortitude",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "5C29F7F7472F394E4E32138404381645",
        default: "You take <rt.bold>10% less Area of effect damage</>.",
      },
      thumbnail: "barbarian_Barbarian3",
    },
    {
      id: "Talent17",
      name: {
        key: "B218768B47A062019532709E1956C305",
        default: "Bloomin' Boomshrooms",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "B6B6BFD6471169D0F439FCA01321066D",
        default:
          "Your <rt.absorb>Shroomsplosion</> ability can now target allies, sending up to 5 <bold>Boomshrooms</> to detonate on them, instantly healing them for <rt.heal>308% Intellect</> each.\r\n\r\nWhen targeting allies in this way, the <bold>Boomshroom</> still deals its normal damage to nearby enemies.",
      },
      thumbnail: "sylvie_T_Mosse_Boomshroom",
    },
  ],
  abilities: [
    "GA_Mosse_DurationalAoeHealPlacement_C",
    "GA_Mosse_CastedSingleTargetHeal_C",
    "GA_Mosse_SingleTargetDispel_C",
    "GA_Mosse_CastedSingleTargetProjectile_C",
    "GA_Mosse_SingleTargetDot_C",
    "GA_Mosse_BlueButterfly_SendOut",
    "GA_Mosse_BlueButterfly_Recall",
    "GA_Mosse_PinkButterfly_Simple",
    "GA_Mosse_PinkButterfly_Double",
    "GA_Mosse_ProjectileTurrets",
    "GA_Mosse_SharedHealthBuff_C",
    "GA_Mosse_Passive_HealingMushroomPlacement_C",
    "GA_Mosse_PlacedAoeBuff",
    "GA_Mosse_InstantSelfEscapeBuff",
    "GA_Mosse_HealingAoeTotem",
    "GA_Mosse_SingleTargetCastedDamageReduction",
    "GA_Mosse_ExplosiveMinion_C",
    "GA_Mosse_TurretChannelHeal",
  ],
  stats: {
    resources_tertiary: 4,
    max_resources_tertiary: 4,
    parry_chance: 0,
    weapon_damage_min: 0,
    weapon_damage_max: 0,
    strength: 0,
    stamina_to_max_health_multiplier: 39.978,
    stamina: 1000,
    spirit_refund_chance_scale: 1,
    spirit_points: 0,
    spirit_generation_heal: 0.04,
    spirit_generation_damage: 0.04,
    spirit: 0,
    resources_second: 0,
    resources: 100,
    resist: 0,
    reflect_heal: 0,
    power: 0,
    passive_move_speed: 1,
    out_of_combat_mana_regen_tick_time: 0.1,
    out_of_combat_mana_regen_rate: 0.0036,
    out_of_combat_health_regen_tick_time: 0.5,
    out_of_combat_health_regen_rate: 0.01,
    move_speed: 1,
    max_spirit_points: 100,
    max_resources_second: 0,
    max_resources: 100,
    max_mana: 1440,
    mana_regen_tick_time: 0.1,
    mana_regen_rate: 0.0005,
    mana: 1440,
    life_steal: 0,
    intellect: 1000,
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
    base_health: 16433,
    armor: 0,
    agility: 0,
  },
};
