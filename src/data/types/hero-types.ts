import type { Translateable } from "./fellowship";
export type HeroName =
  | "Elarion"
  | "Ardeos"
  | "Mara"
  | "Meiko"
  | "Tariq"
  | "Sylvie"
  | "Rime"
  | "Vigour"
  | "Helena";

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
