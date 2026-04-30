import { Dice, diceConstructor } from "../../../../../src/model/dice/Dice";
import { AttackDamage } from "../../../../../src/model/item/weapons/Weapon";
import { Damage } from "../../../../../src/model/statblock/info/Damage";
import { attackDamageConstructor } from "../../../../../src/model/item/weapons/AttackDamageConstructor";

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
    const type = Damage.Piercing;

    const spearDamage = attackDamageConstructor(die, type);

    compare(spearDamage, die, type);
  });

  test("create Fireball damage (8d6 Fire)", () => {
    const die: Dice = diceConstructor("8d6");
    const type = Damage.Fire;

    const fireballDamage = attackDamageConstructor(die, type);

    compare(fireballDamage, die, type);
  });
});
