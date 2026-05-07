import type { Item } from "../Item";
import type { WeaponMastery } from "./WeaponMastery";
import type { WeaponProperties } from "./WeaponProperties";
import type { AttackDamage } from "../../";

export interface Weapon extends Item {
  damage: AttackDamage[];
  properties: Partial<Record<keyof typeof WeaponProperties, string>>;
  mastery: keyof typeof WeaponMastery;
  addToHit: number;
  addToDamage: number;
}
