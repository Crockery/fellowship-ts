import { snakeCaseString } from "../../shared";
import { CharacterAttributeRow } from "./types";

export const getCharacterAttributes = (
  rows: CharacterAttributeRow,
  id: string,
) => {
  const row_keys = Object.keys(rows).filter((attribute_id) => {
    return attribute_id.startsWith(id);
  });

  return row_keys.reduce((prev, curr) => {
    const key_parts = curr.split(".");
    const key = key_parts[key_parts.length - 1];

    const row = rows[curr];

    return {
      ...prev,
      [snakeCaseString(key)]: row.Keys[0].Value,
    };
  }, {});
};
