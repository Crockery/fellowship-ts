import fs from "fs-extra";

export const saveHeroSupplementals = async (hero_names: string[]) => {
  await Promise.all([
    fs.writeFile(
      "./src/data/constants/hero-constants.ts",
      `
          import type { HeroName } from "../types/";
          export const HeroNames: HeroName[] = [${hero_names}];
        `
    ),
    fs.writeFile(
      `./src/data/types/hero-types.ts`,
      `import type { Translateable } from "./fellowship";
      export type HeroName = ${hero_names.join(" | ")}

        export interface HeroMetaData {
          class_color: {
            R: number;
            G: number;
            B: number;
            A: number;
            hex: string;
          };
          thumbnail: string;
          name: Translateable;
          title: Translateable;
          description: Translateable;
          biography: Translateable;
          difficulty: number;
        }
        
        export interface HeroData {
          id: string;
        }
        
        export interface HeroTalentData {
          id: string;
          name: Translateable;
          unlocked_at: number;
          row: number;
          cost: number;
          description: Translateable;
          thumbnail: string;
        }
        
        export interface Hero extends HeroData, HeroMetaData {
          talents: HeroTalentData[];
        }
        `
    ),
  ]);
};
