import type { AttackDamage, Damage } from "..";

export interface Action {
  title: string;
  addToHit: number;
  reach: number;
  damage: AttackDamage[];
  addToDamage: [number, keyof typeof Damage][];
  description: string;
}
