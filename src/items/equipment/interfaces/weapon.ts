import { IEquipment } from "./base.equipment.js";
import { DamageType } from "../../../combat/interface/damage.js";

export interface IWeapon extends IEquipment {
  damageType: DamageType;
  attackspeed: number;
  damage: number;
}
