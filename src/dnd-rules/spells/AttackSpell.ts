import type { AttackDamage, Damage } from "..";
import type { Spell } from "./Spell";

export interface AttackSpell extends Spell {
  damage: AttackDamage[];
  addToDamage: [number, keyof typeof Damage][];
}
