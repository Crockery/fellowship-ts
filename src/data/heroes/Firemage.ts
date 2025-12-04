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
      name: { default: "Slow Burn", key: "B07FEFEB449ED9D428E952B5892E585C" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Each time your <rt.absorb>Fire Ball</> burns an enemy with its damage over time effect, the duration of your <rt.absorb>Engulfing Flames</> and <rt.absorb>Searing Blaze</> is extended by 0.5 seconds.",
        key: "2089B01E4D403EF81D186AB7B9D2AAD3",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_24",
    },
    {
      id: "Talent6",
      name: { default: "Frog Squad", key: "2B184AD04B7B183E8D5073A4CA3CDEAD" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Fire Frogs</> ability conjures 1 additional frog and all your <rt.absorb>Fire Frogs</> now leap on enemies 1 additional time.",
        key: "043070704990A51A98BBAE9B9945E2B6",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_HypnoToad",
    },
    {
      id: "Talent16",
      name: {
        default: "Great Balls of Fire",
        key: "71FF2CC0432967C9524790A58C8AC048",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default: "Your <rt.absorb>Fire Ball</> deals 60% increased damage.",
        key: "06F9A41C4B154A921AAE77A1A6EEBD5D",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_36",
    },
    {
      id: "Talent10",
      name: {
        default: "Flickering Cinders",
        key: "2C13C2124979B31D4B688FADEC0F3F2A",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Searing Blaze</> and <rt.absorb>Engulfing Flames</> generate 25% more <rt.mana>Cinders</>.",
        key: "71610BB14CFE23A0742012A867740CB2",
      },
      thumbnail: "firemage_Firemage_Dot_02",
    },
    {
      id: "Talent17",
      name: { default: "Flare up", key: "26F2C8204D09787F5111F8BB15E69955" },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Infernal Wave</> hits cause all enemies near the target with <rt.absorb>Searing Blaze</> active on them to flare up, taking 25% of the damage that <rt.absorb>Infernal Wave</> dealt to the initial target.",
        key: "F7455B47466C85AA2C7F70A2ECD5F5CA",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_FireRune",
    },
    {
      id: "Talent12",
      name: {
        default: "Undying Flame",
        key: "22850A264389C652307628AC4F2AE17A",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "The duration of your <rt.absorb>Engulfing Flames</> is increased by 3 seconds.",
        key: "10C4BF2C429D04E3880DF1A5EF7852FE",
      },
      thumbnail: "pyromancer_Pyromancer5",
    },
    {
      id: "Talent3",
      name: {
        default: "Agonizing Blaze",
        key: "0AF78F6640509855A87E91BEE79994C2",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Each tick of <rt.absorb>Searing Blaze</> on a target increases the damage it deals by 3% up to a maximum of 30% increased damage at 10 stacks.\r\n\r\nAll stacks are lost when <rt.absorb>Searing Blaze</> is removed from the target.",
        key: "516B7354457034D67E58F8A17E05594E",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_30",
    },
    {
      id: "Talent11",
      name: { default: "Firestarter", key: "DE4D303D4954472683D5D7A2A135D05A" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "All <bold>damage over time</> effects applied to enemies by your abilities gain +20% critical strike chance.\r\n\r\n<rt.absorb>Fire Frogs</> and <rt.absorb>Fire Ball</> also gain a 20% chance to critically strike with their damage over time effects.",
        key: "75686C764DB0CA39851F328C3834F9F2",
      },
      thumbnail: "pyromancer_Pyromancer20",
    },
    {
      id: "Talent7",
      name: { default: "Ouroboros", key: "578F710E423DFC4821AF5F9BCB8C6661" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Each time your <rt.absorb>Searing Blaze</> deals damage to an enemy, the cooldown of <rt.absorb>Pyromania</> is reduced by 0.15 seconds and by 0.3 seconds if <rt.absorb>Searing Blaze</> critically hits.",
        key: "13774B714414568D789A6F8BF07C2A5E",
      },
      thumbnail: "firemage_Firemage_Pyromania",
    },
    {
      id: "Talent5",
      name: {
        default: "Fiery Resilience",
        key: "CD0BCE04418E48AC7D1FD4B74843367F",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Flame Ward's</> duration is <rt.bold>extended to 6 seconds</> and now applies an absorb on you for <rt.heal>30% of your maximum health</> that lasts for 6 seconds.\r\n\r\nThe absorb is applied again when <rt.absorb>Flame Ward</> expires.",
        key: "5E1B22F84FE201E738AF748D34B48620",
      },
      thumbnail: "textures_T_Nhance_RPG_Fire_61",
    },
    {
      id: "Talent13",
      name: {
        default: "Crackling Inferno",
        key: "1416B4764C27B0A27B0ECFA2DB5F2E71",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Infernal Wave</> has <rt.warning>+20% increased critical strike chance</> and its critical strikes burn the target for <rt.warning>60% of the damage it dealt</> over 24 seconds.",
        key: "DB6BB0144AE3FC766526FDB1E1FEFF9B",
      },
      thumbnail: "pyromancer_Pyromancer15",
    },
    {
      id: "Talent14",
      name: { default: "Magic Ward", key: "DC08607845BFAFA106441FAB12E1430B" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default: "You take 10% reduced <bold>Magic Damage</>.",
        key: "549FCFFE4DC4BB09FD57C7A82A5B9B13",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent8",
      name: {
        default: "Rolling Flames",
        key: "391A6DCC4F10117F7065B0927825CACF",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "The cooldown of your <rt.absorb>Engulfing Flames</> is reduced by 0.5 seconds each time your <rt.absorb>Searing Blaze</> deals damage to an enemy.",
        key: "B834389147B99734548FD1A7965D3545",
      },
      thumbnail: "firemage_Firemage_Dot_01",
    },
    {
      id: "Talent1",
      name: {
        default: "Pyrophibian Frenzy",
        key: "A4F9D6A84EB09536894308A654AA5EF4",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Each time one of your <bold>damage over time</> effects critically strikes, you have a 8% chance to spawn a <rt.absorb>Fire Frog</> to leap toward your enemies.",
        key: "37B490654C0A92CE8ED65C9071F1740B",
      },
      thumbnail: "firemage_Firemage_Firefrog",
    },
    {
      id: "Talent2",
      name: {
        default: "Reign of Fire",
        key: "1BEDCF7B400FE7F77B9D4E972EC3314F",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Your <rt.absorb>Detonate</> casts have a chance to instantly grant you 1 charge of <rt.absorb>Fire Ball</> and cause your next <rt.absorb>Fire Ball</> to have <rt.warning>+100% critical strike chance</>. (1.0 PPM)\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
        key: "5B094BD94903B7B4E6190AB36B13C5E4",
      },
      thumbnail: "firemage_Firemage_Inferno",
    },
    {
      id: "Talent4",
      name: {
        default: "Intensifying Inferno",
        key: "375B29F9452702174ACF598AA8CE718B",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Infernal Wave</> deals <rt.warning>+15% increased damage</> for each of your unique damage over time effects that are active on the target.",
        key: "29EFA8B042F9DC037FDB89AB1437F59F",
      },
      thumbnail: "firemage_Firemage_Bolt",
    },
    {
      id: "Talent15",
      name: {
        default: "Spirited Fortitude",
        key: "D76CCA114E0123B511BC47B0A2C9CCC8",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default: "You take 10% reduced <bold>Area of Effect damage</>.",
        key: "2E15AC234013D4A9EE7BBC92F67258B4",
      },
      thumbnail: "barbarian_Barbarian3",
    },
    {
      id: "Talent9",
      name: {
        default: "Spontaneous Combustion",
        key: "D08014B44F3DAB212999EDB8D23AC92E",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Each tick of <rt.absorb>Searing Blaze</> & <rt.absorb>Engulfing Flames</> has a 4% chance to have <rt.warning>+100% critical strike chance</>.\r\n\r\nThe chance for <rt.effect>Spontaneous Combustion</> to trigger is increased by +1% for every 5% critical strike chance you have.\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
        key: "9CA3814D4DB0F696A5874087DF73FC0E",
      },
      thumbnail: "tex_scifiskillsicon_Tex_r_02",
    },
  ],
  stats: {
    ResourcesTertiary: 0,
    MaxResourcesTertiary: 0,
    ParryChance: 0,
    WeaponDamageMin: 0,
    WeaponDamageMax: 0,
    Strength: 0,
    StaminaToMaxHealthMultiplier: 38.496,
    Stamina: 1000,
    SpiritRefundChanceScale: 1,
    SpiritPoints: 0,
    SpiritGenerationHeal: 0.06,
    SpiritGenerationDamage: 0.06,
    Spirit: 0,
    ResourcesSecond: 0,
    Resources: 0,
    Resist: 0,
    ReflectHeal: 0,
    Power: 0,
    PassiveMoveSpeed: 1,
    OutOfCombatManaRegenTickTime: 0,
    OutOfCombatManaRegenRate: 0,
    OutOfCombatHealthRegenTickTime: 0.5,
    OutOfCombatHealthRegenRate: 0.01,
    MoveSpeed: 1,
    MaxSpiritPoints: 100,
    MaxResourcesSecond: 0,
    MaxResources: 400,
    MaxMana: 0,
    ManaRegenTickTime: 0,
    ManaRegenRate: 0,
    Mana: 0,
    LifeSteal: 0,
    Intellect: 1000,
    IncomingDamageMultiplier: 1,
    HealthRegenTickTime: 5,
    HealthRegenRate: 0,
    HealThreatMultiplier: 0.5,
    Haste: 1,
    Expertise: 0,
    DodgeChance: 0.05,
    DamageThreatMultiplier: 1,
    CritMultiplier: 2,
    CritChance: 0.05,
    CooldownRecovery: 1,
    BlockChance: 0,
    BaseHealth: 15927,
    Armor: 0,
    Agility: 0,
  },
};
