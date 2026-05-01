import { diceConstructor } from "../../dice/Dice";
import { Coin } from "../Cost";
import { WeaponMastery, WeaponProperties, type Weapon } from "./Weapon";
import { weaponConstructor } from "./WeaponConstructor";
import { Damage } from "../../statblock/info/Damage";
import { costConstructor } from "../CostConstructor";
import { attackDamageConstructor } from "./AttackDamageConstructor";

const gp = Coin.GP;

const pierce = Damage.Piercing;

const range = WeaponProperties.Range;
const load = WeaponProperties.Loading;
const amm = WeaponProperties.Ammunition;
const ammType = " (Bullet)";

export const Musket: Weapon = weaponConstructor(
  "Musket",
  costConstructor(500, gp),
  10,
  [attackDamageConstructor(diceConstructor("1d12"), pierce)],
  {
    [amm]: ammType,
    [range]: " (Range 40/120)",
    [load]: "",
    [WeaponProperties.TwoHanded]: "",
  },
  0,
  0,
  WeaponMastery.Slow,
);

export const Pistol: Weapon = weaponConstructor(
  "Pistol",
  costConstructor(250, gp),
  3,
  [attackDamageConstructor(diceConstructor("1d10"), pierce)],
  {
    [amm]: ammType,
    [range]: " (Range 30/90)",
    [load]: "",
  },
  0,
  0,
  WeaponMastery.Vex,
);

export const allGuns: Weapon[] = [Musket, Pistol];
