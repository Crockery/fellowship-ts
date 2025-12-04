import type { Npc } from "../../types";
export const EM_BossGiantTroll: Npc = {
  id: "EM_BossGiantTroll",
  tags: [
    "ActorTypeTags.Boss",
    "ActorTypeTags.Enemy",
    "CharacterStatus.IgnoreOutOfWorldBounds",
    "CharacterStatus.Immobilized",
    "CharacterStatus.IgnoreRotationInput",
    "CharacterStatus.AlwaysBehind",
  ],
  thumbnail: "elfmines_T_NPC_EM_BossGiantTroll",
  name: { default: "Godfall Titan", key: "FF1129C043B3FFAE3DD605A823B21D35" },
};
