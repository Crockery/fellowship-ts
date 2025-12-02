import type { Enemy } from "../../types";
export const FK_ElfCleric: Enemy = {
  id: "FK_ElfCleric",
  tags: [
    "ActorTypeTags.Enemy",
    "ActorTypeTags.Elite",
    "GameplayCue.Shared.StunImmune",
  ],
  thumbnail: "T_Portrait_NPC_FK_Elf_Cleric",
  name: { default: "Corrupter", key: "65F4DAE749F1F68FCDE2D0BE6B06766A" },
};
