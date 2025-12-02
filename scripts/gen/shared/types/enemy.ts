import { FSBlueprint, FSObjectDesc, FSTransObj } from "./shared";

export interface NpcDataRaw extends FSBlueprint {
  Properties: {
    PortraitIcon?: FSObjectDesc;
    CharacterID: string;
    DisplayName?: FSTransObj;
    CharacterTags: string[];
  };
}
