import { DataGenerator, Registry } from "../data-generator";
import { AbilityBlueprint } from "../types";
import { chunk } from "./generic";
import { resolveAssetPath } from "./mining";

interface GetAbilityCollectionArgs {
  generator: DataGenerator;
  filter?: (row: Registry[number]) => boolean;
  silent_fail?: boolean;
}

export const getAbilityCollection = async ({
  generator,
  filter,
  silent_fail,
}: GetAbilityCollectionArgs) => {
  const all_ability_paths = generator.registry.filter((row) => {
    const passes_filter = filter ? filter(row) : true;

    return (
      row.asset_class === "DataTable" &&
      row.row === "/Script/fellowship.CRAbilityDataRow" &&
      passes_filter
    );
  });

  if (!all_ability_paths.length && !silent_fail) {
    throw new Error(`Unable to find ability data.`);
  }

  const ability_data: AbilityBlueprint[] = [];

  for await (const abilities_chunk of chunk(all_ability_paths, 100)) {
    await Promise.all(
      abilities_chunk.map(async (ability_row) => {
        const json = await resolveAssetPath<AbilityBlueprint>({
          asset_path: ability_row.obj_path,
        });

        if (json) {
          ability_data.push(json);
        }
      }),
    );
  }

  return ability_data;
};

export const getCharacterAbilityData = async (
  generator: DataGenerator,
  id: string,
  silent_fail?: boolean,
) => {
  return await getAbilityCollection({
    generator,
    filter: (row) => {
      return row.asset_name.includes(id);
    },
    silent_fail,
  });
};

export const getCharacterAbilityIds = async (
  generator: DataGenerator,
  id: string,
  silent_fail?: boolean,
) => {
  const response = await getCharacterAbilityData(generator, id, silent_fail);

  const ability_json = response[0];

  if (!ability_json) {
    if (silent_fail) return [];
    throw new Error(`No ability data found for ${id}`);
  }

  return Object.keys(ability_json.Rows).filter((key) => {
    const data = ability_json.Rows[key];
    return !!data.EnabledInGame;
  });
};
