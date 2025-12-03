import fs from "fs-extra";
import { FSBlueprint } from "../../gen/shared/types/shared";

export const resolveAssetPath = async <T>(
  asset_path: string,
  ext: string = "json",
): Promise<T | undefined> => {
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
        (potential) => potential.Name === id_or_idx,
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
