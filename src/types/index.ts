export * from "./generated";

export interface Translateable {
  key: string;
  default: string;
}

// HEROES

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

// ENEMIES

export interface Enemy {
  name: Translateable;
  id: string;
  thumbnail: string;
  tags: string[];
}
