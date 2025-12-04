import type { Hero } from "../../types";
export const Bowguy: Hero = {
  id: "Bowguy",
  class_color: { R: 137, G: 255, B: 0, A: 255, hex: "#89FF00" },
  thumbnail: "hero_portrait_Bowguy_01",
  name: { key: "ADCD24044D572984A7894487022E30B6", default: "Elarion" },
  title: { key: "4AC02F244CC10CFDA70D2081ABEB3736", default: "The Skystrider" },
  description: {
    key: "5B977E8F4089D531E062AB83F16AFB5D",
    default:
      "The Skystrider moves about the battlefield with the grace of a trained marksman.\r\n\r\nElarion is a Ranged Damage Dealer that builds and spends Focus to perform powerful abilities.\r\n\r\nAs an mythic bowman, Elarion has access to powerful buffs and debuffs that empower his shots and manipulate the battlefield.",
  },
  biography: {
    key: "1D4C959D4F2EDBC9285435917EE8A2E9",
    default:
      "A sentinel of starlight, Elarion Beau'ghai has walked the world for millenia as the surviving half of an ancient myth that shaped the world.\r\n\r\nHe joins the Fellowship to watch over those who might one day fall to the same corrupting power he is fated to stop.",
  },
  difficulty: 2,
  talents: [
    {
      id: "Talent7",
      name: {
        default: "Focused Expanse",
        key: "70C6E0AE45B0ACA1F77797820E5D1F01",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Focused Shot</> has a 20% chance to generate <rt.effect>1 Empowered Multishot</> and all your <rt.effect>Empowered Multishots</> deal <rt.warning>+25% increased damage</>.\r\n\r\n<rt.effect>EMPOWERED MULTISHOT</>\r\nYour next <rt.absorb>Multishot</> has <rt.mana>50% reduced Focus cost</> and always fires at least 3 arrow regardelss of how many targets are in range.",
        key: "EF40FA9C45DA1B5368F8848324B29F25",
      },
      thumbnail: "bowguy_Bowguy_Multishot",
    },
    {
      id: "Talent5",
      name: { default: "Fusillade", key: "48499EF5491C8BFEC003078933BC80C2" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Heartseeker Barrage</> channel time is increased by 0.5 seconds and its <rt.warning>critical strike chance is increased by +20%</>.",
        key: "38219E1941A33B829C38628CA29F74D1",
      },
      thumbnail: "textures_T_Icon_Energy_106",
    },
    {
      id: "Talent15",
      name: {
        default: "Final Crescendo",
        key: "C96A63A04C9AFEE71E1386AC3053DD93",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Each time you cast <rt.absorb>Highwind Arrow</>, you gain 1 stack of <rt.effect>Final Crescendo</>. At 3 stacks, your next <rt.absorb>Highwind Arrow</> consumes all stacks, causing it to deal <rt.warning>+100% increased damage</> and increasing the maximum number of ricochets up to 7.",
        key: "82D2D61E430FC99B93CEB18EFF9D55F6",
      },
      thumbnail: "bowguy_Bowguy_Ricochet",
    },
    {
      id: "Talent4",
      name: {
        default: "Skylit Grace",
        key: "85311458452E428B8C9B1882BDFF16F0",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "While <rt.absorb>Starfall Volley</> is active, your <rt.absorb>Skystrider's Grace</> has 100% increased cooldown recovery.",
        key: "CFC140E74C0EE534926B208893A39A75",
      },
      thumbnail: "tex_scifiskillsicon_Tex_b_03",
    },
    {
      id: "Talent2",
      name: {
        default: "Piercing Seekers",
        key: "68099F78451CE715688D4DA1E8FCDDA5",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Heartseeker Barrage</> arrows ricochet to 1 additional nearby enemy. Riccochets have <rt.warning>70% of the power of the initial hit</>.",
        key: "92772EF84049DD49EA5EFAB77078E0DB",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_SoulArrow",
    },
    {
      id: "Talent9",
      name: {
        default: "Skyward Munitions",
        key: "EB5331824B861DFB763C91B8C9403231",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Each time you cast <rt.absorb>Celestial Shot</> or <rt.absorb>Multishot</> the cooldown of <rt.absorb>Highwind Arrow</> & <rt.absorb>Heartseeker Barrage</> is reduced by 1 second.",
        key: "2614115E4E31EE2C4FB26F8EB7ABCACD",
      },
      thumbnail: "bowguy_Bowguy_Shot",
    },
    {
      id: "Talent1",
      name: {
        default: "Repeating Stars",
        key: "18116CCE44856C4234B45F844BD0CF97",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Each time your <rt.absorb>Multshot</> deals damage to an enemy, the cooldown of your <rt.absorb>Starfall Volley</> is reduced by 0.3 seconds.",
        key: "8A8C29164F7FBCE40DFE2CA8665DEBBC",
      },
      thumbnail: "bowguy_Bowguy_Rain",
    },
    {
      id: "Talent10",
      name: {
        default: "Lunarlight Affinity",
        key: "4A9E58EA4DB60BEC53144FB9352F0A20",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Starfall Volley</> hits have twice the chance to trigger <rt.effect>Lunarlight Salvo</> when dealing damage to enemies with <rt.absorb>Lunarlight Mark</> active.\r\n\r\nAdditionally, your <rt.effect>Lunarlight Salvo</> has <rt.warning>+40% increased critical strike chance</>.",
        key: "4942EB534D4596F3EA42FAB4381775EB",
      },
      thumbnail: "textures_T_Icon_Energy_108",
    },
    {
      id: "Talent6",
      name: {
        default: "Lethal Shots",
        key: "B4FB01E44DE4B543A0E4838248D8C648",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Highwind Arrow</> has a 30% chance to have <rt.warning>+100% increased critical strike chance</>.\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
        key: "086FD59D4A3575CEF8BE1B86374DA233",
      },
      thumbnail: "tex_strategyicons_Tex_arrow",
    },
    {
      id: "Talent8",
      name: {
        default: "Path of Twilight",
        key: "592D9EB74AE17D1ABA5D529690988033",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "The duration of <rt.absorb>Pathfinder's Resilience</> is <rt.bold>increased to 8 seconds</> and all <rt.effect>dispellable harmful magic effects</> are instantly removed from you and again upon expiration. ",
        key: "15BFB41B4AD9FD456D8E0B85FB60937A",
      },
      thumbnail: "bowguy_Bowguy_Abilityicon_Defensive",
    },
    {
      id: "Talent18",
      name: { default: "Lunar Fury", key: "BC0D26C34B2099344A9115A5AEF096E8" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "<rt.effect>Lunarlight Salvo</> deals <rt.warning>+30% increased damage</>.",
        key: "398E0AC94A36BF9ADE30BCBF7BA5A8DC",
      },
      thumbnail: "bowguy_Bowguy_Mark",
    },
    {
      id: "Talent11",
      name: { default: "Magic Ward", key: "CB6E72D2463EA99CA599C9A89F6B347A" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default: "You take 10% less <bold>Magic damage</>.",
        key: "1315000D4041D18E426B8882F1EC6D8D",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent13",
      name: {
        default: "Fervent Supremacy",
        key: "CF5320B5494870509EFCA0BEF2EB4BD4",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Your <rt.absorb>Skystrider's Supremacy's</> cooldown is reduced by 20 seconds and grants 4 charges of <rt.absorb>Empowered Multishot</> that last for up to 15 seconds.\r\n\r\nWhile <rt.effect>Fervant Supremacy</> is active, your <rt.absorb>Multishot</> deals <rt.warning>+50% increased damage</>.",
        key: "5F07F2F945BF12A7403308B4AF8423B9",
      },
      thumbnail: "bowguy_Bowguy_Supremacy",
    },
    {
      id: "Talent14",
      name: {
        default: "Impending Heartseeker",
        key: "FF16F8B346E9E8A186E4039CA5BF8E40",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "When your <rt.absorb>Celestial Shot</> consumes <rt.effect>Celestial Impetus</> the cooldown of your <rt.absorb>Heartseeker Barrage</> is reset and you gain <rt.effect>Impending Heartseeker</>.\r\n\r\n<rt.effect>IMPENDING HEARTSEEKER</>\r\nYour <rt.absorb>Heartseeker Barrage</> deals <rt.warning>+10% increased damage</> with each arrow during its channel.",
        key: "7A942CED43BFE73F69E40DACA57F1CDF",
      },
      thumbnail: "bowguy_Bowguy_Spray",
    },
    {
      id: "Talent3",
      name: {
        default: "Resurgent Winds",
        key: "07DE1BDF49B00066DADB238E62437E92",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Your <rt.absorb>Lunarlight Mark</> ability grants you <rt.effect>Resurgent Winds</> for 15 seconds, causing your next <rt.absorb>Highwind Arrow</> to be instant cast, <rt.mana>cost no Focus</>, require no charge, and deal <rt.warning>50% more damage</> against targets with <rt.absorb>Lunarlight Mark</> active.",
        key: "6E62CA7C4706FCCFD9C7229DDDF176F8",
      },
      thumbnail: "textures_T_Icon_Tech_40",
    },
    {
      id: "Talent16",
      name: {
        default: " Last Lights",
        key: "FC06586842A3AFDBDE11C7A32E2E0EB7",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Your attacks and abilities have <rt.warning>+30% additional critical strike chance</> when striking targets below 30% health.",
        key: "424E4D044B8858E2400A199EFB3D5CFC",
      },
      thumbnail: "tex_scifiskillsicon_Tex_b_24",
    },
    {
      id: "Talent12",
      name: {
        default: "Spirited Fortitude",
        key: "1D89A7B84D67C4F18D44C4B5D78A2442",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default: "You take 10% less <bold>Area of Effect damage</>.",
        key: "7B2552C54785C86EEACDDC9D82007127",
      },
      thumbnail: "barbarian_Barbarian3",
    },
    {
      id: "Talent17",
      name: {
        default: "The Weight of Gravity",
        key: "E60648314803697330FA369D42C75135",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Grappling Arrow</> now has 2 charges, but its recharge time is increased to 120 seconds.\r\n\r\n<rt.absorb>Grappling Arrow</> gains <rt.meikoability2>Cooldown Acceleration</> equal to your Haste.",
        key: "25D1E40A48653761B3D76B8A5481DE12",
      },
      thumbnail: "bowguy_Bowguy_GrappleShot",
    },
  ],
  stats: {
    ResourcesTertiary: 0,
    MaxResourcesTertiary: 0,
    ParryChance: 0,
    WeaponDamageMin: 0,
    WeaponDamageMax: 0,
    Strength: 0,
    StaminaToMaxHealthMultiplier: 39.081,
    Stamina: 1000,
    SpiritRefundChanceScale: 1,
    SpiritPoints: 0,
    SpiritGenerationHeal: 0.3,
    SpiritGenerationDamage: 0.3,
    Spirit: 0,
    ResourcesSecond: 0,
    Resources: 100,
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
    MaxResources: 100,
    MaxMana: 0,
    ManaRegenTickTime: 0,
    ManaRegenRate: 0,
    Mana: 0,
    LifeSteal: 0,
    Intellect: 0,
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
    BaseHealth: 17135,
    Armor: 0,
    Agility: 1000,
  },
};
