import type { Cost } from "../Cost";
import type { AttackDamage, WeaponProperties, Weapon } from "./Weapon";

export function weaponConstructor(
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
): Weapon {
  return {
    name: name,
    cost: cost,
    weight: weight,
    damage: damage,
    properties: properties,
    addToHit: addToHit,
    addToDamage: addToDamage,
  };
}

export function PlusNumWeaponConstructor(
  numIncrease: number,
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
): Weapon {
  return weaponConstructor(
    name + ", +" + numIncrease,
    cost,
    weight,
    damage,
    properties,
    addToHit + numIncrease,
    addToDamage + numIncrease,
  );
}
