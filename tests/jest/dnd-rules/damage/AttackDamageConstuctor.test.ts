import { diceConstructor, type Dice } from "../../../../src/dice";
import {
  attackDamageConstructor,
  Damage,
  type AttackDamage,
} from "../../../../src/dnd-rules";

function compare(
  attackDamageToCompare: AttackDamage,
  die: Dice,
  type: keyof typeof Damage,
) {
  expect(attackDamageToCompare.die).toEqual(die);
  expect(attackDamageToCompare.damageType).toEqual(type);
}

describe("Attack Damage Constructor", () => {
  test("create Spear damage (1d6 Piercing)", () => {
    const die: Dice = diceConstructor("1d6");
    const type: keyof typeof Damage = Damage.Piercing;

    const spearDamage: AttackDamage = attackDamageConstructor(die, type);

    compare(spearDamage, die, type);
  });

  test("create Fireball damage (8d6 Fire)", () => {
    const die: Dice = diceConstructor("8d6");
    const type: keyof typeof Damage = Damage.Fire;

    const fireballDamage: AttackDamage = attackDamageConstructor(die, type);

    compare(fireballDamage, die, type);
  });
});
