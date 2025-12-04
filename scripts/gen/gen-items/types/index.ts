import { FSAssetDesc, FSObjectDesc, FSTransObj } from "../../../shared";

export interface RawItem {
  DisplayName: FSTransObj;
  HeroItemType: string;
  ItemExclusiveForHeroes: string[];
  EnabledInGame: boolean;
  GrantedAbilities: FSAssetDesc;
  ItemIconTexture: FSAssetDesc;
  PrimaryStatsWeightsTemplate: FSObjectDesc;
  SecondaryStatsWeightsTemplate: FSObjectDesc;
  OverrideRarity: boolean;
  ItemRarityOverride: string;
  IsUniqueEquippable: boolean;
  SetBonusA: string;
  SetBonusB: string;
  SetBonusC: string;
  CanHaveGemSocket: boolean;
  Tags: string[];
}

export type ItemTable = [
  {
    Rows: Record<string, RawItem>;
  },
];
