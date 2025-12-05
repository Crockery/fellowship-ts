import { DataGenerator } from "../data-generator";
import { AbilityBlueprint } from "../types";
import { resolveAssetPath } from "./mining";

export const getCharacterAbilityData = async (
  generator: DataGenerator,
  id: string,
  silent_fail?: boolean,
) => {
  const abilities_path = generator.registry.filter((row) => {
    return (
      row.asset_class === "DataTable" &&
      row.row === "/Script/fellowship.CRAbilityDataRow" &&
      row.asset_name.includes(id)
    );
  });

  if (!abilities_path.length) {
    if (silent_fail) return undefined;
    throw new Error(`No ability path for hero ${id}`);
  }

  return await resolveAssetPath<AbilityBlueprint>({
    asset_path: abilities_path[0].obj_path,
  });
};

export const getCharacterAbilityIds = async (
  generator: DataGenerator,
  id: string,
  silent_fail?: boolean,
) => {
  const ability_json = await getCharacterAbilityData(
    generator,
    id,
    silent_fail,
  );

  if (!ability_json) {
    if (silent_fail) return [];
    throw new Error(`No ability data found for ${id}`);
  }

  return Object.keys(ability_json.Rows).filter((key) => {
    const data = ability_json.Rows[key];
    return !!data.EnabledInGame;
  });
};
