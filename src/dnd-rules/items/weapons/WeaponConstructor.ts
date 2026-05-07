import type { Cost } from "../Cost";
import type { AttackDamage } from "../../";
import type { Weapon } from "./Weapon";
import type { WeaponMastery } from "./WeaponMastery";
import type { WeaponProperties } from "./WeaponProperties";

export function weaponConstructor(
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
  mastery: keyof typeof WeaponMastery,
): Weapon {
  return {
    name: name,
    cost: cost,
    weight: weight,
    damage: damage,
    properties: properties,
    addToHit: addToHit,
    addToDamage: addToDamage,
    mastery,
  };
}

export function plusNumWeaponConstructor(
  numIncrease: number,
  name: string,
  cost: Cost,
  weight: number,
  damage: AttackDamage[],
  properties: Partial<Record<keyof typeof WeaponProperties, string>>,
  addToHit: number,
  addToDamage: number,
  mastery: keyof typeof WeaponMastery,
): Weapon {
  return weaponConstructor(
    name + ", +" + numIncrease,
    cost,
    weight,
    damage,
    properties,
    addToHit + numIncrease,
    addToDamage + numIncrease,
    mastery,
  );
}

export function simplePlusNumWeaponConstructor(
  weapon: Weapon,
  numIncrease: number,
): Weapon {
  weapon.addToDamage += numIncrease;
  weapon.addToHit += numIncrease;
  weapon.name += ", +" + numIncrease;
  return weapon;
}
