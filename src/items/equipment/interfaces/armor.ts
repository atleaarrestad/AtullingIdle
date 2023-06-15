import { IEquipment } from "./base.equipment.js";

export interface IArmor extends IEquipment {
  armor: number;
  health: number;
}
