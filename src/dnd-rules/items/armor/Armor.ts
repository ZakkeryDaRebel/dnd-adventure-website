import type { Item } from "../Item";
import type { ArmorType } from "./ArmorType";

export interface Armor extends Item {
  baseAC: number;
  type: keyof typeof ArmorType;
  other: string; // Disadvantage on Stealth, STR requirement, etc
}
