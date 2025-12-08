import { DataGenerator } from "../../../shared/data-generator";
import { getAbilityCollection } from "../../../shared/utils";

export const genAbilities = async (generator: DataGenerator) => {
  console.group("Generating abilities.");

  const ability_data = await getAbilityCollection({ generator });

  console.log(`1. Found ${ability_data.length} abilities.`);

  console.groupEnd();
};
