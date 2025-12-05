import { snakeCaseString } from "../../../shared";
import { CharacterAttributeRow } from "./types";

const getStats = <T extends Record<string, number>>(
  keys: string[],
  rows: CharacterAttributeRow,
  id: string,
) => {
  const row_keys = Object.keys(rows).filter((attribute_id) => {
    return attribute_id.startsWith(id);
  });

  return keys.reduce((prev, curr) => {
    const row_key = row_keys.find((row_key) => {
      return row_key.endsWith(curr);
    });

    if (row_key) {
      const row = rows[row_key];

      return {
        [snakeCaseString(curr)]: row.Keys[0].Value,
        ...prev,
      };
    }

    return {
      [snakeCaseString(curr)]: 0,
      ...prev,
    };
  }, {} as T);
};

const hero_stat_keys: string[] = [
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

export const getHeroAttributes = <T extends Record<string, number>>(
  rows: CharacterAttributeRow,
  id: string,
) => {
  return getStats<T>(hero_stat_keys, rows, id);
};

const npc_attribute_keys: string[] = [
  "Agility",
  "Armor",
  "BaseHealth",
  "BlockChance",
  "BlockDamageReduction",
  "BlockDamageReductionMultiplier",
  "CritChance",
  "CritMultiplier",
  "DefaultBaseHealthMultiplier",
  "DodgeChance",
  "Haste",
  "HealthRegenRate",
  "IncomingDamageMultiplier",
  "Intellect",
  "KillScore",
  "LifeSteal",
  "Mana",
  "ManaRegenRate",
  "MaxMana",
  "MinHealth",
  "MoveSpeed",
  "PassiveMoveSpeed",
  "Resist",
  "SpiritPointValue",
  "Strength",
];

export const getNpcAttributes = async <T extends Record<string, number>>(
  rows: CharacterAttributeRow,
  id: string,
) => {
  return getStats<T>(npc_attribute_keys, rows, id);
};
