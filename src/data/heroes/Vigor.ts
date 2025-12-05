import type { Hero } from "../../types";
export const Vigor: Hero = {
  id: "Vigor",
  class_color: { R: 221, G: 219, B: 197, A: 255, hex: "#DDDBC5" },
  thumbnail: "hero_portrait_vigor_default",
  name: { key: "481F857443DE80D8404C2FA1ABD4B241", default: "Vigour" },
  title: {
    key: "D68C88394EF7137B8B4C28B806817D60",
    default: "The Lightshaper",
  },
  description: {
    key: "AB91BB1046A62BDC237B3DBA5245786B",
    default:
      "As a dwarf who divines the true meaning of runes, Vigour wields powerful healing spells to bolster and protect his allies and smite his enemies.\r\n\r\nVigour is a Healer that uses Builder/Spender Mechanics. He excels in the middle of his allies where he can sustain them with powerful AoE heals.\r\n\r\nAs a wielder of Radiant Runes, he must choose how and when to cast his most powerful spells.\r\n\r\nHis strong Direct Healing grant him an advantage in reacting to an ever-changing battlefield.",
  },
  biography: {
    key: "F8A9721A4E43A8BBDD4C5DB29C492114",
    default:
      "A dwarf of legend and the first Lightshaper to leave the mountain kingdoms.\r\n\r\nVigour has spent centuries traveling the world, mending wounds, banishing shadow, and gathering champions to his cause. He is the guiding light that unites the disparate heroes of the Fellowship.",
  },
  difficulty: 2,
  talents: [
    {
      id: "Talent7",
      name: {
        default: "Master of Triage",
        key: "F1DEE85747300FFA91319C98EDD673B4",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Each time you generate a <rt.mana>Radiant Rune</>, a free <rt.absorb>Greater Heal</> of 30% efficiency is cast on a nearby ally, preferring the player with lowest health.\r\n\r\n<rt.bold>Master of Triage</> does not trigger <rt.absorb>Rune of Renewal</> healing.",
        key: "D1D3FFCA4E4C6175E5149A8EF5852732",
      },
      thumbnail: "tex_spellbookpage06_Tex_SpellBook06_87",
    },
    {
      id: "Talent2",
      name: {
        default: "Enduring Light",
        key: "EB29AE1B45845871B4A305AC4B6B77D3",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "When your <rt.absorb>Circle of Light</> heals a player, they are healed for an additional <rt.heal>50% of the initial heal</> over 12 seconds, accumulatively.",
        key: "3A113EA942FE21DBBBB75EB5F401CDCF",
      },
      thumbnail: "tex_spellbookpage06_Tex_SpellBook06_23",
    },
    {
      id: "Talent1",
      name: { default: "Epiphany", key: "2864B22A4B04F8F51ADEE6BDB7B3F4AC" },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Each time you cast <rt.absorb>Dawnflare</>, <rt.absorb>Soulbrand</> or <rt.absorb>Radiant Blast</> you have a 10% chance to grant you <rt.effect>Epiphany</> for 15 seconds.\r\n\r\n<rt.effect>EPIPHANY</>\r\nYour next <rt.absorb>Dawnbreaker Orb</> has no cost and does not trigger its cooldown.",
        key: "E2FC7153472FAEE92E76A3827963EF7A",
      },
      thumbnail: "vigor_T_Vigor_DawnSphere",
    },
    {
      id: "Talent18",
      name: {
        default: "Alacritous Healing",
        key: "61809E61460328450B3F98B6676AFCD3",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Greater Heal</> has 0.5 seconds reduced cast time and 20% increased Critical Strike chance.",
        key: "B4A4B5F8477640B8FFBEE391B3FCC08F",
      },
      thumbnail: "vigor_T_Vigor_Heal",
    },
    {
      id: "Talent3",
      name: {
        default: "Ruptured Soul",
        key: "B91B9DC94CC978669325D2B0E0F6E473",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "When an enemy dies while <rt.absorb>Soulbrand</> is active on them you instantly gain <rt.mana>50% of the Radiant Rune power it would have generated</> in the time that was remaining and trigger an explosion <rt.warning>dealing 25% of the damage that was remaining to all nearby enemies</>.",
        key: "61DCA9DE42CF70EEACE797BF8AE882AD",
      },
      thumbnail: "vigor_T_Vigor_Soulbrand",
    },
    {
      id: "Talent6",
      name: {
        default: "Expansive Mind",
        key: "42480F0242EF812362B9A59ECB3C071F",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Dawnflare</> casts have a chance to grant you <bold>Expansive Mind</>, increasing your Spirit by 20% for 12 seconds and replenishing <rt.mana>2% max mana</> every 3 seconds for the duration.\r\n\r\n(1.2 PPM)",
        key: "2A84389F401810580C280CA4BBE16298",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_ManaTome",
    },
    {
      id: "Talent5",
      name: {
        default: "Sacred Barrier",
        key: "DF86ED0A4C482BEE3AF13EBEF9EA82F6",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Allies under the effects of any <rt.absorb>absorbs created from your hero abilities</> take 10% reduced damage.",
        key: "AAD631664FB3396951BBB8A154D94A57",
      },
      thumbnail: "textures_T_SunOrb",
    },
    {
      id: "Talent17",
      name: {
        default: "Shimmering Brand",
        key: "FEB4C77946BBE4A97AF6C7A2405735D1",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Your <rt.effect>Soulbrand: Remnant</> damage also heals a nearby ally for <rt.heal>100% of the damage it dealt</>.\r\n\r\n<rt.effect>Shimmering Brand</> prefers the ally with lowest health.",
        key: "48BE586240B9090B1933998125469252",
      },
      thumbnail: "textures_T_Icon_Tech_35",
    },
    {
      id: "Talent8",
      name: {
        default: "Meticulous Runesmith",
        key: "865EFED643054CCAB7F3769A2EB6D53F",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "When your <rt.absorb>Dawnbreaker Orb</> heals a player, 100% of that healing is also applied as an absorb shield on that player for 12 seconds.",
        key: "546A2F5446EA30FAC117D7B71316845B",
      },
      thumbnail: "textures_T_LightPortal",
    },
    {
      id: "Talent10",
      name: {
        default: "Bracing Light",
        key: "A933E2854DCF1C0925A0C3B1BBCD47BB",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "When you cast <rt.absorb>Lightshaper's Ward</> on an ally, it is also applied to you.",
        key: "F31381D34EEA012B391A46AA84BB60B9",
      },
      thumbnail: "vigor_T_Vigor_Ward",
    },
    {
      id: "Talent15",
      name: { default: "Magic Ward", key: "734140BB465DE69A7CF47E99AC6977D8" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default: "You take 10% less <bold>Magic damage</>.",
        key: "95A43BCF4614D98AEAC7FDB2B2FAC6B8",
      },
      thumbnail: "textures_T_Arcane_Scroll",
    },
    {
      id: "Talent14",
      name: {
        default: "Spirited Fortitude",
        key: "4B82608E4262F681240983B970DC8FCF",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default: "You take 10% less <bold>Area of effect damage</>.",
        key: "695C15CC49F84423237E7E86D38BD6D7",
      },
      thumbnail: "barbarian_Barbarian3",
    },
    {
      id: "Talent16",
      name: {
        default: "Radiant Soul",
        key: "1CF4A4FA4392BFEE62C8B8839A4699A8",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Your <rt.absorb>Radiant Blast</> adds 3 seconds to the duration of all your active <rt.absorb>Rune of Renewal</>, <rt.absorb>Soulbrand</>, and <rt.absorb>Luminous Barrier</> effects.\r\n\r\n<rt.absorb>Rune of Renewal's</> healing, <rt.absorb>Luminous Barrier's</> absorb, and <rt.absorb>Soulbrand's</> damage is increased by 25%.",
        key: "5F33FDC44977E1090AB802A5BB46CF03",
      },
      thumbnail: "textures_T_RuneOfGold",
    },
    {
      id: "Talent11",
      name: {
        default: "Ascending Avatar",
        key: "D79EE88D4555C56E6888B0B092AFEC26",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Your <rt.absorb>Levitate</> ability grants you <rt.absorb>Avatar of Light</> for 6 seconds.",
        key: "2E4AB5964E127DA30EF14EAFA19CBD84",
      },
      thumbnail: "vigor_T_Vigor_Spirit",
    },
    {
      id: "Talent9",
      name: {
        default: "Grand Design",
        key: "523D563E44148B77D1EB47AFF3D3D74F",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Your <rt.absorb>Soulbrand</>, <rt.absorb>Rune of Renewal</> & <rt.absorb>Luminous Barrier</> abilities can now be <rt.effect>Overcharged</>, causing the ability to be cast on up to 4 applicable targets at once at <rt.heal>60% power</>.\r\n\r\n<rt.mana>Requires and costs 2 Radiant Runes</>\r\n\r\n<rt.effect>Overcharged Abilities</>\r\nHold down the relevant ability button until a cast bar is displayed. Once the cast has completed, the <rt.effect>overcharged</> version of the ability will trigger.",
        key: "3373D5954369C32D8E678481C7A9717F",
      },
      thumbnail: "tex_spellbookpage07_Tex_SpellBook07_11",
    },
    {
      id: "Talent12",
      name: {
        default: "Dawnbreaker's Legacy",
        key: "66B43D7A469BA0E1094AA6B92B393E16",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Dawnbreaker Orb's</> Critical Strike chance is increased by 25%.",
        key: "990553B24F25048D4BFECFAB33D10FDE",
      },
      thumbnail: "textures_Tex_orb_02_b",
    },
    {
      id: "Talent13",
      name: {
        default: "Runic Revelations",
        key: "2F311A344A117C98212A65BDC09ED98D",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Soulbrand</>, <rt.absorb>Rune of Renewal</> & <rt.absorb>Luminous Barrier</> have 25% increased duration.",
        key: "458387E8436505FDAF32079D3F498C01",
      },
      thumbnail: "textures_T_Nhance_RPG_Icons_CorruptionKnowledge",
    },
    {
      id: "Talent4",
      name: {
        default: "Beacon in the Dark",
        key: "1D366CAE41868D43BA2C2AAEBC0293F0",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Dawnflare</> and <rt.absorb>Radiant Blast</> abilities have a 15% chance to grant you <bold>Beacon in the Dark</>, causing your next <rt.absorb>Radiant Blast</> to have an additional 50% Critical Strike chance.\r\n\r\nUpon gaining <bold>Beacon in the Dark</> the cooldown of <rt.absorb>Radiant Blast</> is instantly reset.",
        key: "FD44611F43037653842047814D03A968",
      },
      thumbnail: "priest_Priest5",
    },
  ],
  stats: {
    resources_tertiary: 0,
    max_resources_tertiary: 0,
    parry_chance: 0,
    weapon_damage_min: 0,
    weapon_damage_max: 0,
    strength: 0,
    stamina_to_max_health_multiplier: 41.301,
    stamina: 1000,
    spirit_refund_chance_scale: 1,
    spirit_points: 0,
    spirit_generation_heal: 0.08,
    spirit_generation_damage: 0.08,
    spirit: 0,
    resources_second: 0,
    resources: 3,
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
    max_resources: 6,
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
    base_health: 16917,
    armor: 0,
    agility: 0,
  },
};
