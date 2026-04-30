import type { Item } from "../Item";

export const ArmorType = {
  Light: "Light",
  Medium: "Medium",
  Heavy: "Heavy",
  Shield: "Shield",
} as const;

export interface Armor extends Item {
  baseAC: number;
  type: keyof typeof ArmorType;
  other: string; // Disadvantage on Stealth, STR requirement, etc
}
