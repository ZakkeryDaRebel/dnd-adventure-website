import type { Dice } from "../../dice/Dice";
import type { Item } from "../Item";
import type { Damage } from "../../statblock/info/Damage";

export interface Weapon extends Item {
  damage: AttackDamage[];
  properties: Partial<Record<keyof typeof WeaponProperties, string>>;
  addToHit: number;
  addToDamage: number;
}

export interface AttackDamage {
  die: Dice;
  damageType: keyof typeof Damage;
}

export const WeaponProperties = {
  Ammunition: "Ammunition",
  Finnese: "Finnese",
  Heavy: "Heavy",
  Light: "Light",
  Loading: "Loading",
  Range: "Range", // (short / long)
  Reach: "Reach",
  Special: "Special", // description
  Thrown: "Thrown", // (short / long)
  TwoHanded: "Two-Handed",
  ["Two Handed"]: "TwoHanded",
  Versatile: "Versatile", // (bigger die)
} as const;
