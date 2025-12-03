import {
  FSAssetDesc,
  FSBlueprint,
  FSObjectDesc,
  FSTagNameObj,
  FSTransObj,
} from "../../../shared/types/shared";

export interface HeroMap {
  HeroID: {
    TagName: string;
  };
  CharacterClass: {
    AssetPathName: string;
  };
  CharacterMetaData: {
    ObjectPath: string;
  };
  MainStat: string;
  AbilitySet: {
    AssetPathName: string;
  };
  TalentData: {
    AssetPathName: string;
  };
  IsLive: boolean;
}

export type HeroMapTable = [
  {
    Rows: Record<string, HeroMap>;
  },
];

export interface RawHeroMetaData extends FSBlueprint {
  Properties: {
    ClassColor: {
      B: number;
      G: number;
      R: number;
      A: number;
      Hex: string;
    };
    HeroPortraitImage?: FSObjectDesc;
    PortraitTexture: FSAssetDesc;
    HeroTitle: FSTransObj;
    OverallDifficulty: number;
    CharacterRole: string;
    PrimaryAttribute: string;
    HeroName: FSTransObj;
    HeroDescription: FSTransObj;
    Biography: FSTransObj;
  };
}

export interface RawHeroTalentData extends FSBlueprint {
  Type: "CRTalentData";
  Properties: {
    Talents: {
      TalentID: FSTagNameObj;
      Name: FSTransObj;
      UnlockLevel: number;
      TalentRow: number;
      TalentPointCost: number;
      DisabledInGame: boolean;
      DetailedDescription: FSTransObj;
      UIIconTexture: {
        ResourceObject: FSObjectDesc;
      };
    }[];
  };
}
