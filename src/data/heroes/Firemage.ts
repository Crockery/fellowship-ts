import type { Hero } from "../../types";
export const Firemage: Hero = {
  id: "Firemage",
  class_color: { R: 235, G: 99, B: 41, A: 255, hex: "#EB6329" },
  thumbnail: "hero_portrait_Firemage_default",
  name: { key: "F66EC284494CA8D94857669F935318CA", default: "Ardeos" },
  title: { key: "F2E45B0C4FDAB4BFC319F29CA0F6CA24", default: "The Pyromancer" },
  description: {
    key: "AC13D89A4EA21832C19FD6886566C5AE",
    default:
      "Ardeos is a cocky Spellcasting Damage Dealer who utilizes powerful Damage over Time effects. The fact that others have struggled to utilize such raw power doesn’t concern him, he’s found it to be a snap!\r\n\r\nArdeos utilizes a system called Embers and Burning Embers. When he uses his basic abilities he collects the remaining Embers of the spellcast. When enough Embers have been collected they are set ablaze as Burning Embers.\r\n\r\nThe Burning Embers can be spent to cast Detonate, causing your fiery Damage over Time effects to contribute to instantanous burst damage.",
  },
  biography: {
    key: "03EFABA04B2D997DD03ED895528018C2",
    default:
      "An exceptional pyromancer too powerful for the academies and too reckless to leave to his own devices.\r\n\r\nArdeos joins the Fellowship to prove his flame will forge him into a hero, not an omen of apocalypse.",
  },
  difficulty: 3,
  talents: [
    {
      id: "Talent18",
      name: { key: "B07FEFEB449ED9D428E952B5892E585C", default: "Slow Burn" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "2089B01E4D403EF81D186AB7B9D2AAD3",
        default:
          "Each time your <rt.absorb>Fire Ball</> burns an enemy with its damage over time effect, the duration of your <rt.absorb>Engulfing Flames</> and <rt.absorb>Searing Blaze</> is extended by 0.5 seconds.",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_24",
    },
    {
      id: "Talent6",
      name: { key: "2B184AD04B7B183E8D5073A4CA3CDEAD", default: "Frog Squad" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "043070704990A51A98BBAE9B9945E2B6",
        default:
          "Your <rt.absorb>Fire Frogs</> ability conjures 1 additional frog and all your <rt.absorb>Fire Frogs</> now leap on enemies 1 additional time.",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_HypnoToad",
    },
    {
      id: "Talent16",
      name: {
        key: "71FF2CC0432967C9524790A58C8AC048",
        default: "Great Balls of Fire",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "06F9A41C4B154A921AAE77A1A6EEBD5D",
        default: "Your <rt.absorb>Fire Ball</> deals 60% increased damage.",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_36",
    },
    {
      id: "Talent10",
      name: {
        key: "2C13C2124979B31D4B688FADEC0F3F2A",
        default: "Flickering Cinders",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "71610BB14CFE23A0742012A867740CB2",
        default:
          "Your <rt.absorb>Searing Blaze</> and <rt.absorb>Engulfing Flames</> generate 25% more <rt.mana>Cinders</>.",
      },
      thumbnail: "firemage_Firemage_Dot_02",
    },
    {
      id: "Talent17",
      name: { key: "26F2C8204D09787F5111F8BB15E69955", default: "Flare up" },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "F7455B47466C85AA2C7F70A2ECD5F5CA",
        default:
          "Your <rt.absorb>Infernal Wave</> hits cause all enemies near the target with <rt.absorb>Searing Blaze</> active on them to flare up, taking 25% of the damage that <rt.absorb>Infernal Wave</> dealt to the initial target.",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_FireRune",
    },
    {
      id: "Talent12",
      name: {
        key: "22850A264389C652307628AC4F2AE17A",
        default: "Undying Flame",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "10C4BF2C429D04E3880DF1A5EF7852FE",
        default:
          "The duration of your <rt.absorb>Engulfing Flames</> is increased by 3 seconds.",
      },
      thumbnail: "pyromancer_Pyromancer5",
    },
    {
      id: "Talent3",
      name: {
        key: "0AF78F6640509855A87E91BEE79994C2",
        default: "Agonizing Blaze",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "516B7354457034D67E58F8A17E05594E",
        default:
          "Each tick of <rt.absorb>Searing Blaze</> on a target increases the damage it deals by 3% up to a maximum of 30% increased damage at 10 stacks.\r\n\r\nAll stacks are lost when <rt.absorb>Searing Blaze</> is removed from the target.",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_30",
    },
    {
      id: "Talent11",
      name: { key: "DE4D303D4954472683D5D7A2A135D05A", default: "Firestarter" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "75686C764DB0CA39851F328C3834F9F2",
        default:
          "All <bold>damage over time</> effects applied to enemies by your abilities gain +20% critical strike chance.\r\n\r\n<rt.absorb>Fire Frogs</> and <rt.absorb>Fire Ball</> also gain a 20% chance to critically strike with their damage over time effects.",
      },
      thumbnail: "pyromancer_Pyromancer20",
    },
    {
      id: "Talent7",
      name: { key: "578F710E423DFC4821AF5F9BCB8C6661", default: "Ouroboros" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "13774B714414568D789A6F8BF07C2A5E",
        default:
          "Each time your <rt.absorb>Searing Blaze</> deals damage to an enemy, the cooldown of <rt.absorb>Pyromania</> is reduced by 0.15 seconds and by 0.3 seconds if <rt.absorb>Searing Blaze</> critically hits.",
      },
      thumbnail: "firemage_Firemage_Pyromania",
    },
    {
      id: "Talent5",
      name: {
        key: "CD0BCE04418E48AC7D1FD4B74843367F",
        default: "Fiery Resilience",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "5E1B22F84FE201E738AF748D34B48620",
        default:
          "Your <rt.absorb>Flame Ward's</> duration is <rt.bold>extended to 6 seconds</> and now applies an absorb on you for <rt.heal>30% of your maximum health</> that lasts for 6 seconds.\r\n\r\nThe absorb is applied again when <rt.absorb>Flame Ward</> expires.",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_61",
    },
    {
      id: "Talent13",
      name: {
        key: "1416B4764C27B0A27B0ECFA2DB5F2E71",
        default: "Crackling Inferno",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "DB6BB0144AE3FC766526FDB1E1FEFF9B",
        default:
          "Your <rt.absorb>Infernal Wave</> has <rt.warning>+20% increased critical strike chance</> and its critical strikes burn the target for <rt.warning>60% of the damage it dealt</> over 24 seconds.",
      },
      thumbnail: "pyromancer_Pyromancer15",
    },
    {
      id: "Talent14",
      name: { key: "DC08607845BFAFA106441FAB12E1430B", default: "Magic Ward" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "549FCFFE4DC4BB09FD57C7A82A5B9B13",
        default: "You take 10% reduced <bold>Magic Damage</>.",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent8",
      name: {
        key: "391A6DCC4F10117F7065B0927825CACF",
        default: "Rolling Flames",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "B834389147B99734548FD1A7965D3545",
        default:
          "The cooldown of your <rt.absorb>Engulfing Flames</> is reduced by 0.5 seconds each time your <rt.absorb>Searing Blaze</> deals damage to an enemy.",
      },
      thumbnail: "firemage_Firemage_Dot_01",
    },
    {
      id: "Talent1",
      name: {
        key: "A4F9D6A84EB09536894308A654AA5EF4",
        default: "Pyrophibian Frenzy",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "37B490654C0A92CE8ED65C9071F1740B",
        default:
          "Each time one of your <bold>damage over time</> effects critically strikes, you have a 8% chance to spawn a <rt.absorb>Fire Frog</> to leap toward your enemies.",
      },
      thumbnail: "firemage_Firemage_Firefrog",
    },
    {
      id: "Talent2",
      name: {
        key: "1BEDCF7B400FE7F77B9D4E972EC3314F",
        default: "Reign of Fire",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "5B094BD94903B7B4E6190AB36B13C5E4",
        default:
          "Your <rt.absorb>Detonate</> casts have a chance to instantly grant you 1 charge of <rt.absorb>Fire Ball</> and cause your next <rt.absorb>Fire Ball</> to have <rt.warning>+100% critical strike chance</>. (1.0 PPM)\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
      },
      thumbnail: "firemage_Firemage_Inferno",
    },
    {
      id: "Talent4",
      name: {
        key: "375B29F9452702174ACF598AA8CE718B",
        default: "Intensifying Inferno",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "29EFA8B042F9DC037FDB89AB1437F59F",
        default:
          "Your <rt.absorb>Infernal Wave</> deals <rt.warning>+15% increased damage</> for each of your unique damage over time effects that are active on the target.",
      },
      thumbnail: "firemage_Firemage_Bolt",
    },
    {
      id: "Talent15",
      name: {
        key: "D76CCA114E0123B511BC47B0A2C9CCC8",
        default: "Spirited Fortitude",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "2E15AC234013D4A9EE7BBC92F67258B4",
        default: "You take 10% reduced <bold>Area of Effect damage</>.",
      },
      thumbnail: "barbarian_Barbarian3",
    },
    {
      id: "Talent9",
      name: {
        key: "D08014B44F3DAB212999EDB8D23AC92E",
        default: "Spontaneous Combustion",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "9CA3814D4DB0F696A5874087DF73FC0E",
        default:
          "Each tick of <rt.absorb>Searing Blaze</> & <rt.absorb>Engulfing Flames</> has a 4% chance to have <rt.warning>+100% critical strike chance</>.\r\n\r\nThe chance for <rt.effect>Spontaneous Combustion</> to trigger is increased by +1% for every 5% critical strike chance you have.\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
      },
      thumbnail: "tex_scifiskillsicon_Tex_r_02",
    },
  ],
  abilities: [
    "GA_Firemage_CastedSingleDot",
    "GA_Firemage_CastedDotDetonate",
    "GA_Firemage_InstantDotSpread",
    "GA_Firemage_CastedDotBoostProjectile",
    "GA_Firemage_PlacedProjectileAoe",
    "GA_Firemage_InstantSingleInterrupt",
    "GA_Firemage_DashForward",
    "GA_Firemage_SelfDefenceBuff",
    "GA_Firemage_ChanneledForwardAoeDamage",
    "GA_Firemage_InstantSingleTargetDot",
    "GA_Firemage_Firefrogs",
    "GA_Firemage_InstantSingleDotDuplication",
    "GA_Firemage_InstantSingleDisorient",
    "GA_Firemage_CastedPlacedAoe",
    "GA_Firemage_InstantDoubleDot_C",
    "GA_Firemage_CastedSingleDot2_C",
    "GA_Firemage_CastedSingleHeavyDot_C",
    "GA_Firemage_InstantMultiTargetDot_C",
    "GA_Firemage_Passive_PlacedProjectileAoeDamageMonitor_Dot",
    "GA_Firemage_Passive_FrogDamageMonitor",
    "GE_Firemage_PlacedProjectileAoe_DirectDamageBased_Dot",
  ],
  stats: {
    resources_tertiary: 0,
    max_resources_tertiary: 0,
    parry_chance: 0,
    weapon_damage_min: 0,
    weapon_damage_max: 0,
    strength: 0,
    stamina_to_max_health_multiplier: 38.496,
    stamina: 1000,
    spirit_refund_chance_scale: 1,
    spirit_points: 0,
    spirit_generation_heal: 0.06,
    spirit_generation_damage: 0.06,
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
    max_resources_second: 0,
    max_resources: 400,
    max_mana: 0,
    mana_regen_tick_time: 0,
    mana_regen_rate: 0,
    mana: 0,
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
    base_health: 15927,
    armor: 0,
    agility: 0,
  },
};
