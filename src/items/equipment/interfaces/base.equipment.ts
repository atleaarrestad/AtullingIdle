import { IInventorySlotItem } from "../../../inventory/interface/inventory.js";

export interface IEquipment extends IInventorySlotItem {
  value: number;
  unique: boolean;
  itemType: ItemType;
}
export const ItemType = {
  Ring: "Ring",
  Helmet: "Helmet",
  Chest: "Chest",
  Gloves: "Gloves",
  Legs: "Legs",
  Necklace: "Necklace",
  Mainhand: "Mainhand",
  Offhand: "Offhand",
  Boots: "Boots",
  Shoulders: "Shoulders",
  Glasses: "Glasses",
  Cape: "Cape",
  Wrist: "Wrist",
  Ammunition: "Ammunition",
  Earring: "Earring",
  Emblem: "Emblem",
  Charm: "Charm",
} as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType];
