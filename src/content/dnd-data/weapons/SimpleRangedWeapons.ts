import { diceConstructor, type Dice } from "../../../dice";
import {
  attackDamageConstructor,
  Coin,
  costConstructor,
  Damage,
  weaponConstructor,
  WeaponMastery,
  WeaponProperties,
  type Cost,
  type Weapon,
} from "../../../dnd-rules";

//
// Helper variables
//
const d4: Dice = diceConstructor("1d4");

const pierce: keyof typeof Damage = Damage.Piercing;

const vex: keyof typeof WeaponMastery = WeaponMastery.Vex;
const slow: keyof typeof WeaponMastery = WeaponMastery.Slow;

const ammunition: keyof typeof WeaponProperties = WeaponProperties.Ammunition;
const range: keyof typeof WeaponProperties = WeaponProperties.Range;
const twoHanded: keyof typeof WeaponProperties = WeaponProperties.TwoHanded;

const gp: keyof typeof Coin = Coin.GP;

const twentyFiveGP: Cost = costConstructor(25, gp);

const baseRange: string = " (Range 80/320)";

//
// Const Weapon Objects
//

export const DART: Weapon = weaponConstructor(
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

export const LIGHT_CROSSBOW: Weapon = weaponConstructor(
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

export const SHORTBOW: Weapon = weaponConstructor(
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

export const SLING: Weapon = weaponConstructor(
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

export const ALL_SIMPLE_RANGED_WEAPONS: Weapon[] = [
  DART,
  LIGHT_CROSSBOW,
  SHORTBOW,
  SLING,
];
