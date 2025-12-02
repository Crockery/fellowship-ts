import type { Enemy } from "../../types";
export const MF_BossTotem: Enemy = {
  id: "MF_BossTotem",
  tags: [
    "ActorTypeTags.Enemy",
    "CharacterStatus.Immobilized",
    "GameplayEffect.CCImmune",
  ],
  thumbnail: "T_NPC_MF_Totem",
  name: {
    default: "Bloodstone Totem",
    key: "8C183CD14D18EAED9E05959E627F9ED6",
  },
};
