import type { HeroId, Translateable } from "..";

export enum ItemType {
  shoulders = "shoulders",
  back = "back",
  chest = "chest",
  waist = "waist",
  feet = "feet",
  head = "head",
  hands = "hands",
  ring = "ring",
  necklace = "necklace",
  wrists = "wrists",
  weapon = "weapon",
  trinket = "trinket",
}

interface ItemBase {
  name: Translateable;
  is_upgradeable: boolean;
  is_unique_equippable: boolean;
  default_for?: HeroId;
  exclusive_for?: HeroId[];
  ability_id?: string;
  thumbnail: string;
}

interface ShoulderItem extends ItemBase {
  type: ItemType.shoulders;
}

interface BackItem extends ItemBase {
  type: ItemType.back;
}

interface ChestItem extends ItemBase {
  type: ItemType.chest;
}

interface WaistItem extends ItemBase {
  type: ItemType.waist;
}

interface FeetItem extends ItemBase {
  type: ItemType.feet;
}

interface HeadItem extends ItemBase {
  type: ItemType.head;
}

interface HandItem extends ItemBase {
  type: ItemType.hands;
}

interface RingItem extends ItemBase {
  type: ItemType.ring;
}

interface WristItem extends ItemBase {
  type: ItemType.wrists;
}

interface NecklaceItem extends ItemBase {
  type: ItemType.necklace;
}

interface WeaponItem extends ItemBase {
  type: ItemType.weapon;
}

interface TrinketItem extends ItemBase {
  type: ItemType.trinket;
}

export type Item =
  | ShoulderItem
  | TrinketItem
  | WeaponItem
  | NecklaceItem
  | WristItem
  | RingItem
  | HandItem
  | HeadItem
  | FeetItem
  | BackItem
  | ChestItem
  | WaistItem;
