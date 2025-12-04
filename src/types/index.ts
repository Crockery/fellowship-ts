export * from "./generated";

export interface Translateable {
  key: string;
  default: string;
}

export interface Hero {
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
  id: string;
  talents: {
    id: string;
    name: Translateable;
    unlocked_at: number;
    row: number;
    cost: number;
    description: Translateable;
    thumbnail: string;
  }[];
}

export interface Npc {
  name: Translateable;
  id: string;
  thumbnail?: string;
  tags: string[];
}
