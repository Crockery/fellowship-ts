import fs from "fs-extra";
import { FSBlueprint, FSTranslateable, FSTransObj } from "../types";
import { Translateable } from "../../../src/types";

// Takes the raw paths found in the data, and converts it
// to an output consistent accross data types.
export const resolveImageId = (raw_path: string) => {
  const corrected = raw_path.split(".")[0];

  const path_parts = corrected.split("/");

  if (path_parts.length < 2) {
    throw new Error(
      `Unable to get image path id for ${raw_path}: ${path_parts.join(",")}`,
    );
  }

  return `${path_parts[path_parts.length - 2].toLowerCase()}_${path_parts[path_parts.length - 1]}`;
};

// Takes a raw path to an object or asset in the data
// e.g "/Game/fellowship/Abilities/BoyGuyAbilities.0"
// and resolves it to the correct object
// e.g index "0" in "/Game/fellowship/Abilities/BoyGuyAbilities.json"
export const resolveAssetPath = async <T>({
  asset_path,
  id_key,
  ext = "json",
}: {
  asset_path: string;
  id_key?: keyof FSBlueprint;
  ext?: string;
}): Promise<T | undefined> => {
  const path_parts = asset_path.split(".");

  let id_or_idx: string | undefined = undefined;

  if (path_parts.length > 1) {
    id_or_idx = path_parts[1];
  }

  let corrected_path = path_parts[0];

  if (corrected_path.startsWith("/Game/")) {
    corrected_path = corrected_path.replace(
      "/Game/",
      `${process.env.FMODEL_OUTPUT}/Content/`,
    );
  }

  corrected_path = `${corrected_path}.${ext}`;

  const json = await fs.readJSON(corrected_path);

  if (!json) {
    throw new Error(`Unable to find asset at path ${corrected_path}`);
  }

  if (id_or_idx) {
    if (isNaN(Number(id_or_idx))) {
      const asset = (json as FSBlueprint[]).find(
        (potential) => potential[id_key ?? "Name"] === id_or_idx,
      );

      if (!asset) {
        throw new Error(
          `Unable to find asset at path ${corrected_path} under name ${id_or_idx}`,
        );
      }

      return asset as T;
    } else {
      const idx = Number(id_or_idx);

      const asset = (json as FSBlueprint[])[idx];

      if (!asset) {
        throw new Error(
          `Unable to find asset at path ${corrected_path} under index ${idx}`,
        );
      }

      return asset as T;
    }
  }
  return undefined;
};

export const isTranslateable = (
  to_translate: FSTransObj,
): to_translate is FSTranslateable => {
  return (to_translate as FSTranslateable)["SourceString"] !== undefined;
};

export const resolveTranslateable = (
  to_translate: FSTransObj | undefined,
): Translateable => {
  if (!!to_translate && isTranslateable(to_translate)) {
    return {
      key: to_translate.Key,
      default: to_translate.SourceString,
    };
  }

  return {
    key: "",
    default: "",
  };
};
