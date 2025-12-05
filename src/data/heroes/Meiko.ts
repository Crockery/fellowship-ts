import type { Hero } from "../../types";
export const Meiko: Hero = {
  id: "Meiko",
  class_color: { R: 40, G: 224, B: 92, A: 255, hex: "#28E05C" },
  thumbnail: "hero_portrait_meiko_default",
  name: { key: "17C34D1C4A98CF5EE2D9C381EB3550B1", default: "Meiko" },
  title: { key: "42C8A165413885DE37AA95AAA39EC0CD", default: "The Twinsoul" },
  description: {
    key: "084113E84A7AC0EDB000B2A796FF80AF",
    default:
      "As a martial artist, Meiko utilizes a variety of fighting techniques to empower herself and defend her allies.\r\n\r\nMeiko is a Melee Tank that uses Ability Combo Mechanics. She excels in the front lines taking hits instead of her allies.\r\n\r\nShe uses Ability Combos to perform powerful Finishing Moves.\r\n\r\nBig cooldowns and self buffs allow her to mend her own wounds and survive dangerous attacks.",
  },
  biography: {
    key: "BD518B48423AB76A56298EA3B8062B9C",
    default:
      "After the fall of the Edosaka Barrier, Meiko was sent away by her mother to survive. She traveled the world learning to channel her turmoil into martial grace as a Twinsoul.\r\n\r\nShe joins the Fellowship to continue her training and seek heroes strong enough to challenge the Demon King that reigns over her homeland.",
  },
  difficulty: 4,
  talents: [
    {
      id: "Talent2",
      name: {
        key: "C6B0C3DB409C3961CD8C38BCA32F209A",
        default: "Resonance of Earth",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "9DCC99CE40E77650D6BDD4A2A2334CD7",
        default:
          "When you activate <rt.absorb>Stone Shield</> you take <rt.bold>20% reduced damage</> for 8 seconds.",
      },
      thumbnail: "textures_T_Nhance_RPG_Energy_19",
    },
    {
      id: "Talent3",
      name: {
        key: "74F0B8454F8ABA1E43BE7CB1BF9E567F",
        default: "Perfect Storm",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "DB11F5734E1C0A37F2DE3A81476821E3",
        default:
          "Your <rt.absorb>Lashing Stormkick</> has a <rt.bold>50% chance to deal damage an additional time</> for <rt.warning>60% of the initial hit</>.",
      },
      thumbnail: "tex_skill_icons_pack_Tex_blue_6",
    },
    {
      id: "Talent1",
      name: { key: "5A48009A4CDE941941BA49874406279C", default: "Earthwell" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        key: "077859D040BC5A9921FC6F8962BFA3C0",
        default:
          "Each hit with <rt.absorb>Earthfist Barrage</> adds <rt.bold>1 stack</> to your <rt.absorb>Serenity</> ability.\r\n\r\n<rt.absorb>Serenity</> now prevents your <rt.absorb>Stone Shield</> from losing health for 0.1 seconds per stack of <rt.absorb>Serenity</> consumed.",
      },
      thumbnail: "textures_T_Icon_Cosmic_01",
    },
    {
      id: "Talent5",
      name: {
        key: "9E8B37394C8AB5E8200593A8A1833764",
        default: "Will of Stone",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "4F1374294A66A02EB937229A110F2290",
        default:
          "Your <rt.absorb>Shatter Earth</> now also activates your <bold>Spirited Strikes</> and <bold>Spirited Vortex</> buffs.",
      },
      thumbnail: "meiko_T_Meiko_SlamStun",
    },
    {
      id: "Talent15",
      name: { key: "0E8E122E43DEBE2B48D864AE768814B7", default: "Harsh Winds" },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "E5D3381B4C8FE3F3DCF4BDA5C3F927A2",
        default:
          "Your <rt.absorb>Spirited Vortex</> deals <rt.warning>20% more damage</>.\r\n\r\nEach time you perform a finisher ability while <rt.effect>Spirited Vortex</> is active it grants you <rt.bold>+20% dodge chance</>, stacking up to 3 times.\r\n\r\nAll stacks of the <rt.bold>bonus dodge</> are consumed upon successfully dodging an attack.",
      },
      thumbnail: "electromancer_Electromancer5",
    },
    {
      id: "Talent14",
      name: {
        key: "7E27702C4DC04FD839D8A98612FD0E64",
        default: "Rumbling Stone",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        key: "9F7C59F84C8DD4A2FB3306BAE0E1DCF2",
        default:
          "Your <bold>Earth abilities</> deal <rt.warning>20% more damage</>.",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_NatureAmbush",
    },
    {
      id: "Talent11",
      name: {
        key: "EBCA49FD42D5AC58CA1E1EB828D9F024",
        default: "Thundering Kicks",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "913046CC477CC74292F3609F5B6BE833",
        default:
          "Your <rt.absorb>Lashing Stormkick</> has <rt.warning>+20% increased critical strike chance</>.",
      },
      thumbnail: "meiko_Meiko_AbilityIcon_08",
    },
    {
      id: "Talent6",
      name: {
        key: "588B03E94BDD61EE74397C9F06060D55",
        default: "Debilitating Vortex",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "0EF7F6FE4AB100DEF6091DB8C6C57552",
        default:
          "Enemies hit by <rt.absorb>Spirited Vortex</> have <rt.effect>20% reduced attack speed</> for 5 seconds.",
      },
      thumbnail: "meiko_Meiko_AbilityIcon_07",
    },
    {
      id: "Talent17",
      name: {
        key: "429742144D6E6FD8599286BE68416F2B",
        default: "Guardian's Fluidity",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        key: "A3A3FBCF47ECBB411F88778D2C2D545E",
        default:
          "Your <rt.absorb>Finishing Moves</> reduce the cooldown of your <rt.absorb>Stone Shield</> ability by <rt.bold>1 second</>.",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_NatureStone",
    },
    {
      id: "Talent4",
      name: { key: "6F0D58474D39020DCC3A8A8BD54CAF5A", default: "Slipstream" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "7538702348F395081C5F8DBB16BA466C",
        default:
          "Each time you cast <rt.absorb>Gust</> you release a burst of winds at your starting location, causing all enemies within 750 radius to have <rt.effect>50% reduced movement speed</> for 6 seconds.",
      },
      thumbnail: "meiko_Meiko_AbilityIcon_10",
    },
    {
      id: "Talent12",
      name: { key: "E5D4FD2241264D50495AC095A4F7780A", default: "Magic Ward" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "36CEB1ED47DC3E1BA0646A9488625A1C",
        default: "You take 10% less <bold>Magic damage</>.",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent10",
      name: {
        key: "BBA9684643195F071E53188BC5C593EC",
        default: "Unwavering Spirit",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        key: "5621E8CF451F8913A9DA4A96DE5DEF8D",
        default:
          "The <rt.effect>Spirit Armor</> buff you gain whenever you trigger a <rt.mana>Spirit Refund</> now also generates <rt.bold>1 stone</> for your <rt.absorb>Stone Shield</>.\r\n\r\nYour <rt.bold>Spirit</> is increased by +3% passively.",
      },
      thumbnail: "textures_T_TranquilityOrb",
    },
    {
      id: "Talent7",
      name: {
        key: "A06934984C2F80BD9A2EBD8F759B3BC7",
        default: "Warden of the Temple",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "18193A394D0498D19048AA8BDFB3FFFA",
        default:
          "Each time you consume <rt.effect>Earthfall</> or <rt.effect>Stormfall</>, you gain 1 stack of <rt.effect>Warden of the Temple</>. At <rt.bold>3 stacks</>, your next <rt.absorb>Palm Finisher</> is enhanced.\r\n\r\n<rt.absorb>Double Palm Strike:</> Deals <rt.warning>300% increased damage</> and grants <rt.absorb>25 Serenity</> charges.\r\n\r\n<rt.absorb>Spirited Vortex:</> Deals <rt.warning>50% increased damage</> and its <rt.bold>Dodge Bonus</> is increased to <rt.bold>+30%</>.",
      },
      thumbnail: "meiko_Meiko_AbilityIcon_01",
    },
    {
      id: "Talent8",
      name: { key: "66490E1B41F2A00E13A9FB96BA414B3F", default: "Earthbourne" },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "3860D5214922A62BABB2EEA4F904C173",
        default:
          "Each cast of <rt.absorb>Shatter Earth</> reduces the cooldown of <rt.absorb>Twin Souls: Bulwark</> by <rt.bold>30%</>.",
      },
      thumbnail: "meiko_T_Meiko_TauntTotem",
    },
    {
      id: "Talent9",
      name: {
        key: "719B5BB7499C878D7D6CE289D4B63168",
        default: "Forbidden Technique",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        key: "40EE51E74A3C988480E076BA9CE42591",
        default:
          "Your <rt.absorb>Double Palm Strike</> finisher applies <rt.effect>Forbidden Technique</> to the target for 15 seconds.\r\n\r\n<rt.effect>Forbidden Technique</> accumulates <rt.warning>18% of all damage you deal to the target</>. Once it expires, is removed, or if the enemy dies while it is active -  the accumulated amount explodes on the target and onto nearby enemies. You are <rt.heal>healed for 100% of the damage dealt</> by <rt.effect>Forbidden Technique</>.\r\n\r\nYou can only have one <rt.effect>Forbidden Technique</> active at any time.",
      },
      thumbnail: "meiko_Meiko_AbilityIcon_04",
    },
    {
      id: "Talent16",
      name: { key: "BBE2369D4A857FFF72ABBAA328A66E0E", default: "Peacefield" },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "F605F23F4D91E6D9AF7F7FA5002B4686",
        default:
          "Your <rt.absorb>Serenity</> applies <rt.effect>Peacefield</> on you, healing you for <rt.heal>30% of the initial heal's value over 9 seconds</>.",
      },
      thumbnail: "textures_T_Icon_Elements_77",
    },
    {
      id: "Talent13",
      name: { key: "C804F5FC40D043CD83003492BD01EE99", default: "Stone Guard" },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "349168264FC84CABD1E7AF945DCAB29A",
        default:
          "Any time you gain health from your self healing abilities, <rt.heal>10% of the healing amount</> also replenishes your <rt.absorb>Stone Shield's</> health.",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_EarthTranquility",
    },
    {
      id: "Talent18",
      name: {
        key: "34B8BAEF42785576272BED88699D8E83",
        default: "Conclusive Strikes",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        key: "CEC92BF14C4B925E3B1F5DA9A8C9197B",
        default: "Your <bold>Finishers</> deal <rt.warning>10% more damage</>.",
      },
      thumbnail: "textures_T_Icon_Elements_71",
    },
  ],
  abilities: [
    "GA_Meiko_MeleeInterrupt",
    "GA_Meiko_FrontalAoeDebuff_C",
    "GA_Meiko_ChargedForwardDash_C",
    "GA_Meiko_MeleeLeft_C",
    "GA_Meiko_MeleeDown_C",
    "GA_Meiko_MeleeRight_C",
    "GA_Meiko_PlaceHolderFinisher_C",
    "GA_Meiko_MeleeDamageSelfBuff_C",
    "GA_Meiko_HighDamageCleave_C",
    "GA_Meiko_MeleeDamageLowHealthSelfBuff_C",
    "GA_Meiko_MeleeDamageImmediateSelfBuff_C",
    "GA_Meiko_ChanneledHeavyDamage_C",
    "GA_Meiko_DurationalMultipleTeleportDamage_New",
    "GA_Meiko_MeleeAutoAttack_C",
    "GA_Meiko_RangedTaunt_C",
    "GA_Meiko_DamageSoakBuff_C",
    "GA_Meiko_DurationalAoeDamageBuff_C",
    "GA_Meiko_MoveToLocationAoeDamage_C",
    "GA_Meiko_Passive_DamageSoakBuff_Monitor_C",
    "GA_Meiko_MeleeAutoATtack_MultiHit_C",
    "GA_Meiko_TauntTotem",
    "GA_Meiko_AoePull_C",
    "GA_Meiko_InstantSelfDefensive_C",
    "GA_Meiko_Passive_Talent_MeleeDamageImmediateSelfBuff_DamageBuilder_C",
  ],
  stats: {
    resources_tertiary: 0,
    max_resources_tertiary: 0,
    parry_chance: 0.05,
    weapon_damage_min: 0,
    weapon_damage_max: 0,
    strength: 0,
    stamina_to_max_health_multiplier: 61.771,
    stamina: 1000,
    spirit_refund_chance_scale: 1,
    spirit_points: 0,
    spirit_generation_heal: 0.02,
    spirit_generation_damage: 0.05,
    spirit: 0,
    resources_second: 0,
    resources: 100,
    resist: 0,
    reflect_heal: 0,
    power: 0,
    passive_move_speed: 1,
    out_of_combat_mana_regen_tick_time: 1,
    out_of_combat_mana_regen_rate: 0,
    out_of_combat_health_regen_tick_time: 0.5,
    out_of_combat_health_regen_rate: 0.01,
    move_speed: 1,
    max_spirit_points: 100,
    max_resources_second: 2,
    max_resources: 100,
    max_mana: 0,
    mana_regen_tick_time: 1,
    mana_regen_rate: 0,
    mana: 0,
    life_steal: 0,
    intellect: 0,
    incoming_damage_multiplier: 1,
    health_regen_tick_time: 5,
    health_regen_rate: 0,
    heal_threat_multiplier: 0.75,
    haste: 1,
    expertise: 0,
    dodge_chance: 0.05,
    damage_threat_multiplier: 9,
    crit_multiplier: 2,
    crit_chance: 0.05,
    cooldown_recovery: 1,
    block_chance: 0,
    base_health: 22160,
    armor: 0,
    agility: 1000,
  },
};
