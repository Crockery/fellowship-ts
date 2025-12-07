import {
  FSAssetDesc,
  FSBlueprint,
  FSObjectDesc,
  FSTransObj,
} from "../../../shared";

export interface RawItem {
  DisplayName: FSTransObj;
  HeroItemType: string;
  DefaultItemForHeroes:
    | [
        {
          Key: {
            TagName: string;
          };
        },
      ]
    | [];
  ItemExclusiveForHeroes: string[];
  EnabledInGame: boolean;
  GrantedAbilities: FSAssetDesc;
  ItemIconTexture: FSAssetDesc;
  PrimaryStatsWeightsTemplate: FSObjectDesc | null;
  SecondaryStatsWeightsTemplate: FSObjectDesc | null;
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
  FSBlueprint & {
    Rows: Record<string, RawItem>;
  },
];
