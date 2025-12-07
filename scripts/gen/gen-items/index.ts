import { DataGenerator } from "../../shared";
import fs from "fs-extra";
import { ItemTable } from "./types";

export const genItems = async (generator: DataGenerator) => {
  const dest = "./src/data/items";

  generator.addClean(dest);

  const info_table = (await fs.readJSON(
    `${process.env.FMODEL_OUTPUT}/Content/Items/DT_HeroItems.json`,
  )) as ItemTable | undefined;

  if (!info_table) {
    throw new Error("Unable to find info table.");
  }

  const item_keys = Object.keys(info_table[0].Rows);

  console.log(item_keys);
};
