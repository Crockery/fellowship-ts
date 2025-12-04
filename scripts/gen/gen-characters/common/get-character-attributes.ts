import { Hero } from "../../../../src/types";
import { CharacterAttributeRow } from "./types";

const hero_stat_keys: (keyof Hero["stats"])[] = [
  "Agility",
  "Armor",
  "BaseHealth",
  "BlockChance",
  "CooldownRecovery",
  "CritChance",
  "CritMultiplier",
  "DamageThreatMultiplier",
  "DodgeChance",
  "Expertise",
  "Haste",
  "HealThreatMultiplier",
  "HealthRegenRate",
  "HealthRegenTickTime",
  "IncomingDamageMultiplier",
  "Intellect",
  "LifeSteal",
  "Mana",
  "ManaRegenRate",
  "ManaRegenTickTime",
  "MaxMana",
  "MaxResources",
  "MaxResourcesSecond",
  "MaxSpiritPoints",
  "MoveSpeed",
  "OutOfCombatHealthRegenRate",
  "OutOfCombatHealthRegenTickTime",
  "OutOfCombatManaRegenRate",
  "OutOfCombatManaRegenTickTime",
  "PassiveMoveSpeed",
  "Power",
  "ReflectHeal",
  "Resist",
  "Resources",
  "ResourcesSecond",
  "Spirit",
  "SpiritGenerationDamage",
  "SpiritGenerationHeal",
  "SpiritPoints",
  "SpiritRefundChanceScale",
  "Stamina",
  "StaminaToMaxHealthMultiplier",
  "Strength",
  "WeaponDamageMax",
  "WeaponDamageMin",
  "ParryChance",
  "MaxResourcesTertiary",
  "ResourcesTertiary",
];

export const getHeroAttributes = (
  rows: CharacterAttributeRow,
  id: string,
): Hero["stats"] => {
  const row_keys = Object.keys(rows).filter((attribute_id) => {
    return attribute_id.startsWith(id);
  });

  return hero_stat_keys.reduce(
    (prev, curr) => {
      const row_key = row_keys.find((row_key) => {
        return row_key.endsWith(curr);
      });

      if (row_key) {
        const row = rows[row_key];

        return {
          [curr]: row.Keys[0].Value,
          ...prev,
        };
      }

      return {
        [curr]: 0,
        ...prev,
      };
    },
    {} as Hero["stats"],
  );
};
