import { IWeapon } from "./interfaces/weapon.js";
import { DamageType } from "../../combat/interface/damage.js";
import { ItemType } from "./interfaces/base.equipment.js";

export const woodenSword: IWeapon = {
  name: "Basic Sword",
  description: "A dull & boring sword",
  sprite: "/sprites/weapons/sword.png",
  damage: 2,
  attackspeed: 3,
  damageType: DamageType.Magic,
  itemType: ItemType.Mainhand,
  unique: false,
  value: 5,
};
