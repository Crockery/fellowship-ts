import { FSBlueprint } from "../../../shared";

export type CharacterAttributeRow = Record<
  string,
  {
    Keys: [
      {
        Value: number;
      },
    ];
  }
>;

export type CharacterAttributeBp = [
  FSBlueprint & {
    Rows: CharacterAttributeRow;
  },
];
