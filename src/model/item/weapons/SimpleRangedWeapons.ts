import { diceConstructor, type Dice } from "../../dice/Dice";
import { Coin } from "../Cost";
import { WeaponMastery, WeaponProperties, type Weapon } from "./Weapon";
import { weaponConstructor } from "./WeaponConstructor";
import { Damage } from "../../statblock/info/Damage";
import { costConstructor } from "../CostConstructor";
import { attackDamageConstructor } from "./AttackDamageConstructor";

const d4: Dice = diceConstructor("1d4");

const pierce = Damage.Piercing;

const vex = WeaponMastery.Vex;
const slow = WeaponMastery.Slow;

const ammunition = WeaponProperties.Ammunition;
const range = WeaponProperties.Range;
const twoHanded = WeaponProperties.TwoHanded;

const gp = Coin.GP;

const twentyFiveGP = costConstructor(25, gp);

const baseRange: string = " (Range 80/320)";

export const Dart: Weapon = weaponConstructor(
  "Dart",
  costConstructor(5, Coin.CP),
  0.25,
  [attackDamageConstructor(d4, pierce)],
  {
    [WeaponProperties.Finnese]: "",
    [WeaponProperties.Thrown]: " (Range 20/60)",
  },
  0,
  0,
  vex,
);

export const LightCrossbow: Weapon = weaponConstructor(
  "Light Crossbow",
  twentyFiveGP,
  5,
  [attackDamageConstructor(diceConstructor("1d8"), pierce)],
  {
    [ammunition]: " (Bolt)",
    [range]: baseRange,
    [WeaponProperties.Loading]: "",
    [twoHanded]: "",
  },
  0,
  0,
  slow,
);

export const Shortbow: Weapon = weaponConstructor(
  "Shortbow",
  twentyFiveGP,
  2,
  [attackDamageConstructor(diceConstructor("1d6"), pierce)],
  {
    [ammunition]: " (Arrow)",
    [range]: baseRange,
    [twoHanded]: "",
  },
  0,
  0,
  vex,
);

export const Sling: Weapon = weaponConstructor(
  "Sling",
  costConstructor(1, Coin.SP),
  0,
  [attackDamageConstructor(d4, Damage.Bludgeoning)],
  {
    [ammunition]: " (Bullet)",
    [range]: " (Range 30/120)",
  },
  0,
  0,
  slow,
);

export const allSimpleRangedWeapons: Weapon[] = [
  Dart,
  LightCrossbow,
  Shortbow,
  Sling,
];
