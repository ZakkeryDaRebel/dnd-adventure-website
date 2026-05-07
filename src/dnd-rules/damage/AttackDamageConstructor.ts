import type { Dice } from "../../dice";
import type { Damage } from "./Damage";
import type { AttackDamage } from "./AttackDamage";

export function attackDamageConstructor(
  die: Dice,
  type: keyof typeof Damage,
): AttackDamage {
  return {
    die: die,
    damageType: type,
  };
}
