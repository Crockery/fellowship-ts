import type { Hero } from "@shared/types";
export const Rime: Hero = {
  class_color: { R: 30, G: 163, B: 238, A: 255, hex: "#1EA3EE" },
  thumbnail: "hero_portrait_rime_default",
  name: { key: "3825535A4AE809A565D55684CD35A14B", default: "Rime" },
  title: {
    key: "738D46D649E714DCBCA2439781F52FA9",
    default: "The Harbinger of Winter",
  },
  description: {
    key: "4746B3AE4F74321F890DA28560AAE86C",
    default:
      "Channelling the forces of spirit and ice, Rime conjures powerful spells to decimate her foes.\r\n\r\nRime is a Spellcasting Damage Dealer with Builder/Spender Mechanics. She excels at focusing down the biggest threat from a distance.\r\n\r\nMany of Rime’s abilities fill an Anima Bar to deal spikes of damage and generate Winter Orbs.\r\n\r\nShe uses Winter Orbs to cast dangerous spells.",
  },
  biography: {
    key: "AEB262EE417EF0F418BE6B8ADB8892C0",
    default:
      "The last of her tribe, Rime lived in solitude until the rise of new evils forced her from her hermitage.\r\n\r\nThe Harbinger enacts the will of the patron spirit of winter. Rime's power is a cursed gift she uses to cleanse corruption and bring quiet peace to those already fated to die.",
  },
  difficulty: 2,
  id: "CharacterID.Hero.Rime",
  talents: [
    {
      id: "Talent.ID.Talent4",
      name: {
        default: "Chilling Finesse",
        key: "949BE0244F066E3C248BA786ED4B3AD2",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Each tick of <rt.absorb>Freezing Torrent</> reduces the cooldown of <rt.absorb>Bursting Ice</> by 0.3 seconds.\r\n\r\nEach time you cast <rt.absorb>Cold Snap</> the cooldown of <rt.absorb>Freezing Torrent</> is reduced by 1.5 seconds.",
        key: "E12ED2E248BBF85D112668B9F00453C9",
      },
      thumbnail:
        "/Game/ui/icons/Blink_icons/Classes/Elementalist/Cryomancer/Cryomancer19.0",
    },
    {
      id: "Talent.ID.Talent11",
      name: {
        default: "Winter's Embrace",
        key: "5D29775642B2E7B2690C05B4361B2F95",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "While <rt.absorb>Bursting Ice</> is active on an enemy you gain <rt.effect>Winter's Embrace</>, causing you to deal <rt.warning>20% more damage</>.\r\n\r\n<rt.effect>Winter's Embrace</> does not affect <rt.absorb>Bursting Ice</>.",
        key: "FB2C049B41F5205ABB86B382BAB43140",
      },
      thumbnail:
        "/Game/ui/icons/Blink_icons/Classes/Elementalist/Cryomancer/Cryomancer8.0",
    },
    {
      id: "Talent.ID.Talent1",
      name: {
        default: "Glacial Assault",
        key: "079D978D45668452728221B9C753A3B5",
      },
      unlocked_at: 0,
      row: 1,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Cold Snap</> ability grants you 1 stack of <rt.effect>Glacial Assault</>. Once you have 4 stacks of <rt.effect>Glacial Assault</>, your next <rt.absorb>Glacial Blast</> is <bold>instant cast</>, deals <rt.warning>40% more damage</> and has <rt.mana>no cost</>.",
        key: "F50E5E8844302F7BFC5B23B828930184",
      },
      thumbnail: "/Game/ui/icons/hero_abilities/Rime/T_Rime_AnimaBolt.0",
    },
    {
      id: "Talent.ID.Talent2",
      name: { default: "Burstbolter", key: "2A2E26BE4920D4DFDAA81C81447FBD20" },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "When your <rt.absorb>Frost Bolt</> deals damage to an enemy, it triggers a single pulse of <rt.absorb>Bursting Ice</> and <rt.mana>generates 2 additional Anima</>.",
        key: "DF3AF36040E93666AAA3D38FE12F81D2",
      },
      thumbnail:
        "/Game/ui/icons/Blink_icons/Classes/Elementalist/Cryomancer/Cryomancer7.0",
    },
    {
      id: "Talent.ID.Talent12",
      name: {
        default: "Supreme Torrent",
        key: "20BB66E04F660AB89ACDF29E6714F386",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Freezing Torrent</> duration is increased by 0.8 seconds.",
        key: "07D7D6804954017AEDE6D8B92B9B2906",
      },
      thumbnail: "/Game/ui/icons/NhanceIconsBundle/Textures/T_IceSpikes.0",
    },
    {
      id: "Talent.ID.Talent10",
      name: {
        default: "Navir's Keeper",
        key: "8A7EE747488499807965678D5F8672AC",
      },
      unlocked_at: 0,
      row: 2,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Flight of the Navir</> ability grants 2 charges of <rt.absorb>Cold Snap</>.",
        key: "4917FA2747712E9DB5335180B1006F82",
      },
      thumbnail: "/Game/ui/icons/hero_abilities/Rime/T_Rime_BirdCD.0",
    },
    {
      id: "Talent.ID.Talent5",
      name: { default: "Icy Flow", key: "7C9F74344E50B4652B60F0B47800A464" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Cold Snap</> grants you <rt.effect>Icy Flow</> for 8 seconds, reducing the cast time of your next <rt.absorb>Glacial Blast</> by 0.5 seconds or reducing the impact delay of your next <rt.absorb>Ice Comet</> by 0.5 seconds.\r\n\r\nBoth abilities gain <rt.warning>+25% increased critical strike chance</> when consuming a stack of <rt.effect>Icy Flow</>.\r\n\r\nYou can have up to 2 stacks of <rt.effect>Icy Flow</>.",
        key: "52CB5310419D5D8216A8A3860E42B633",
      },
      thumbnail:
        "/Game/ui/icons/SpellBookMegapack/Textures/Tex_SciFiSkillsIcon/Tex_b_16.0",
    },
    {
      id: "Talent.ID.Talent6",
      name: { default: "Avalanche", key: "881F21414098BA84D63CBCB6D5159B9F" },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Your <rt.absorb>Ice Comet</> has a 15% chance to strike twice, and a 7% chance to strike three times.",
        key: "D2C203D4474FD819643165A3DB7DDFA9",
      },
      thumbnail:
        "/Game/ui/icons/hero_abilities/Rime/T_Rime_OnTargetPulsatingAOE.0",
    },
    {
      id: "Talent.ID.Talent3",
      name: {
        default: "Coalescing Frost",
        key: "238E4F4B46108FAAA43ADAB9BD7AE6E9",
      },
      unlocked_at: 0,
      row: 3,
      cost: 2,
      description: {
        default:
          "Each hit of <rt.absorb>Freezing Torrent</> infuses the target with <rt.effect>Coalescing Frost</> for 3 seconds. Once it expires, the afflicted enemy releases a pulse of frost damage in an area around them, dealing <rt.warning>43% Intellect</> damage for each stack of <rt.effect>Coalescing Frost</> that was infused.\r\n\r\n<rt.absorb>Freezing Torrent</> critical strikes have a 50% chance to apply 2 stacks of <rt.effect>Coalescing Frost</>.",
        key: "8FF29EE0441B84ECB3EB1FB050CA26C3",
      },
      thumbnail:
        "/Game/ui/icons/Blink_icons/Classes/Elementalist/Cryomancer/Cryomancer9.0",
    },
    {
      id: "Talent.ID.Talent7",
      name: {
        default: "Tundra Guard",
        key: "13092F6E48254866A4FBF69480186892",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Frost Ward</> duration is <rt.bold>increased to 8 seconds</>, and while it is active you <rt.heal>heal for 35% of all damage you deal</>.",
        key: "441E68914191C173DCA734B6565DCA36",
      },
      thumbnail:
        "/Game/ui/icons/NhanceIconsBundle/Textures/T_Nhance_RPG_Icons_MagicRune_2.0",
    },
    {
      id: "Talent.ID.Talent14",
      name: {
        default: "Greater Glacial Blast",
        key: "9C81D50D4CB37487B8951B9B2BFE26C0",
      },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default:
          "Your <rt.absorb>Glacial Blast</> deals <rt.warning>40% more damage</> but its cast time is increased by 0.5 seconds.",
        key: "02792BD9458C0842DF5E7D8865F42626",
      },
      thumbnail:
        "/Game/ui/icons/NhanceIconsBundle/Textures/T_Nhance_RPG_Icons_ArcaneBolt.0",
    },
    {
      id: "Talent.ID.Talent15",
      name: { default: "Magic Ward", key: "77186ABC4CC59117B791569AE0C2E569" },
      unlocked_at: 0,
      row: 4,
      cost: 1,
      description: {
        default: "You take <rt.bold>10% reduced magic damage</>.",
        key: "11F131414A4F485989C9EDACD4B42DAA",
      },
      thumbnail: "/Game/ui/icons/NhanceIconsBundle/Textures/T_Arcane_Scroll.0",
    },
    {
      id: "Talent.ID.Talent17",
      name: {
        default: "Cascading Blitz",
        key: "E49AE97A4D1E9B18EE95E396023CA0FD",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "For each <rt.mana>Anima</> you generate while your <rt.absorb>Ice Blitz</> is active, you conjure <bold>1 Frost Swallow</> to attack your target.\r\n\r\nThe duration of <rt.absorb>Ice Blitz</> is extended by 0.2 seconds each time a <rt.absorb>Frost Swallow</> hits an enemy.",
        key: "5773500B41B5CACE2445FCA33B9A5441",
      },
      thumbnail:
        "/Game/ui/icons/NhanceIconsBundle/Textures/T_Nhance_RPG_Icons_IcySpikes.0",
    },
    {
      id: "Talent.ID.Talent18",
      name: {
        default: "Frostweaver's Wrath",
        key: "5C0161C748ADE179F451198902F0FA65",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Each time you generate <rt.mana>Winter Orbs</>, you have a 17% chance to gain  <rt.effect>Frostweaver's Wrath</> for 12 seconds, causing the next <rt.absorb>Glacial Blast</> or <rt.absorb>Ice Comet</> that deals damage to have <rt.warning>100% additional critical strike chance</>.\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
        key: "78D3F573453AD355096D669BD3563BB6",
      },
      thumbnail:
        "/Game/ui/icons/NhanceRPGSpells_01/Textures/T_Icon_Frost_115.0",
    },
    {
      id: "Talent.ID.Talent9",
      name: {
        default: "Soulfrost Torrent",
        key: "125BF59E4288D067B38CDB8F913939EE",
      },
      unlocked_at: 0,
      row: 5,
      cost: 3,
      description: {
        default:
          "Each time you cast an ability you have a chance to gain <rt.effect>Soulfrost Torrent</> for 18 seconds, causing your next <rt.absorb>Freezing Torrent</> to have 40% increased tick rate and <rt.warning>+100% increased critical strike chance</>. (1.5 PPM)\r\n\r\n<rt.warning>GRIEVOUS CRITICAL STRIKE</>\r\nAny critical strike chance you have beyond 100% causes a <rt.warning>grievous critical strike</>. <rt.warning>Grievous critical strikes</> increase the base damage of the hit by an amount equal to the overflowing critical strike chance.",
        key: "65FFC12C4B6A2FF8471202B166CB4028",
      },
      thumbnail:
        "/Game/ui/icons/NhanceRPGIcons/Textures/T_Nhance_RPG_Frost_31.0",
    },
    {
      id: "Talent.ID.Talent16",
      name: { default: "Biting Cold", key: "89C4C09649046F68760C88805A92AB32" },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "The power of your <rt.warning>critical strikes is increased by 10%</>.",
        key: "593123824B19BCA092D1CE8C69885182",
      },
      thumbnail:
        "/Game/ui/icons/NhanceRPGIcons/Textures/T_Nhance_RPG_Frost_01.0",
    },
    {
      id: "Talent.ID.Talent13",
      name: {
        default: "Spirited Fortitude",
        key: "543D2C804D7AB9E1970DD78976357A90",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default: "You take <rt.bold>10% reduced area of effect damage</>.",
        key: "11CD1A8543A02274679BC489A544777E",
      },
      thumbnail:
        "/Game/ui/icons/Blink_icons/Classes/Warrior/Barbarian/Barbarian3.0",
    },
    {
      id: "Talent.ID.Talent8",
      name: {
        default: "Wisdom of the North",
        key: "54311D9C4CE4DDAA6461D09085A16C93",
      },
      unlocked_at: 0,
      row: 6,
      cost: 1,
      description: {
        default:
          "The cooldown of <rt.absorb>Ice Blitz</>, <rt.absorb>Flight of the Navir</> & <rt.absorb>Winter's Blessing</> is reduced by 0.3 seconds for each <rt.mana>Winter's Orb</> you spend.",
        key: "205E93184F953B269BA6C58B602E9631",
      },
      thumbnail:
        "/Game/ui/icons/NhanceRPGIcons/Textures/T_Nhance_RPG_Frost_04.0",
    },
  ],
};
