import { DataGenerator } from "../../shared";
import fs from "fs-extra";

export const genItems = async (generator: DataGenerator) => {
  const dest = "./src/data/items";

  generator.addClean(dest);

  const info_table = await fs.readJSON(
    `${process.env.FMODEL_OUTPUT}/Content/Items/DT_HeroItems.json`,
  );

  console.log(info_table);
};
