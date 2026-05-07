import type { Dice } from "../../dice";
import type { Damage } from "./Damage";

export interface AttackDamage {
  die: Dice;
  damageType: keyof typeof Damage;
}
