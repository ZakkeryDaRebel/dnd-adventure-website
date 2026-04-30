import type { Dice } from "../../dice/Dice";
import type { Damage } from "../../statblock/info/Damage";
import type { AttackDamage } from "./Weapon";

export function attackDamageConstructor(
  die: Dice,
  type: keyof typeof Damage,
): AttackDamage {
  return {
    die: die,
    damageType: type,
  };
}
