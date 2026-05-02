import type { AttackDamage } from "../../item/weapons/Weapon";
import { Damage } from "./Damage";

export interface Action {
  title: string;
  addToHit: number;
  reach: number;
  damage: AttackDamage[];
  addToDamage: [number, keyof typeof Damage][];
  description: string;
}
