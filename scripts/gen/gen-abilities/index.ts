import { Translateable } from "../../../src/types";
import { AbilityRaw } from "../../shared";
import { DataGenerator } from "../../shared/data-generator";
import {
  getAbilityCollection,
  resolveImageId,
  isTranslateable,
  resolveTranslateable,
} from "../../shared/utils";

const mapDToAbility = (raw_ability: AbilityRaw & { id: string }) => {
  let description: Translateable = {
    key: "",
    default: "",
  };

  if (isTranslateable(raw_ability.DynamicDescription.Text)) {
    description = resolveTranslateable(raw_ability.DynamicDescription.Text);
  } else if (isTranslateable(raw_ability.DetailedDescription)) {
    description = resolveTranslateable(raw_ability.DetailedDescription);
  }

  const thumb_path = raw_ability.UIIconTexture.ResourceObject?.ObjectPath;

  const to_return: Record<string, unknown> = {
    name: resolveTranslateable(raw_ability.Name),
    id: raw_ability.id,
  };

  if (description.default) {
    to_return.description = description;
  }
  if (thumb_path) {
    to_return.thumbnail = resolveImageId(thumb_path);
  }

  return to_return;
};

export const genAbilities = async (generator: DataGenerator) => {
  const ability_collection = await getAbilityCollection({ generator });

  const ability_data = ability_collection
    .flatMap((bp) => {
      const ids = Object.keys(bp.Rows);

      return ids.map((id) => ({ ...bp.Rows[id], id }));
    })
    .filter((ability) => !!ability.EnabledInGame)
    .filter((ability, index, self) => {
      return index === self.findIndex((_ability) => _ability.id === ability.id);
    })
    .map(mapDToAbility);

  console.log(`Generated ${ability_data.length} abilities.`);

  return ability_data;
};
