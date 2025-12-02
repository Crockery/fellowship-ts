import type { Enemy } from "../../types";
export const EM_BossVaerith: Enemy = {
  id: "EM_BossVaerith",
  tags: [
    "ActorTypeTags.Boss",
    "ActorTypeTags.Enemy",
    "CharacterStatus.IgnoreOutOfWorldBounds",
  ],
  thumbnail: "T_Portrait_NPC_FK_Elf_Illusionist",
  name: { default: "Vaerith Vorn", key: "B88FE6B946884BFF65ECFABEEEBDDD32" },
};
