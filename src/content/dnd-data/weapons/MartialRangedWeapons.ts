import { diceConstructor } from "../../../dice";
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

const gp: keyof typeof Coin = Coin.GP;

const fiftyGP: Cost = costConstructor(50, gp);

const pierce: keyof typeof Damage = Damage.Piercing;

const amm: keyof typeof WeaponProperties = WeaponProperties.Ammunition;
const range: keyof typeof WeaponProperties = WeaponProperties.Range;
const load: keyof typeof WeaponProperties = WeaponProperties.Loading;
const heavy: keyof typeof WeaponProperties = WeaponProperties.Heavy;
const twoHand: keyof typeof WeaponProperties = WeaponProperties.TwoHanded;

const vex: keyof typeof WeaponMastery = WeaponMastery.Vex;

//
// Const weapon objects
//

export const BLOWGUN: Weapon = weaponConstructor(
  "Blowgun",
  costConstructor(10, gp),
  1,
  [attackDamageConstructor(diceConstructor("1d1"), pierce)],
  {
    [amm]: " (Needle)",
    [range]: " (Range 25/100)",
    [load]: "",
  },
  0,
  0,
  vex,
);

export const HAND_CROSSBOW: Weapon = weaponConstructor(
  "Hand Crossbow",
  costConstructor(75, gp),
  3,
  [attackDamageConstructor(diceConstructor("1d6"), pierce)],
  {
    [amm]: " (Bolt)",
    [range]: " (Range 30/120)",
    [WeaponProperties.Light]: "",
    [load]: "",
  },
  0,
  0,
  vex,
);

export const HEAVY_CROSSBOW: Weapon = weaponConstructor(
  "Heavy Crossbow",
  fiftyGP,
  18,
  [attackDamageConstructor(diceConstructor("1d10"), pierce)],
  {
    [amm]: " (Bolt)",
    [range]: " (Range 100/400)",
    [heavy]: "",
    [load]: "",
    [twoHand]: "",
  },
  0,
  0,
  WeaponMastery.Push,
);

export const LONGBOW: Weapon = weaponConstructor(
  "Longbow",
  fiftyGP,
  2,
  [attackDamageConstructor(diceConstructor("1d8"), pierce)],
  {
    [amm]: " (Arrow)",
    [range]: " (Range 150/600)",
    [heavy]: "",
    [twoHand]: "",
  },
  0,
  0,
  WeaponMastery.Slow,
);

export const ALL_MARTIAL_RANGED_WEAPONS: Weapon[] = [
  BLOWGUN,
  HAND_CROSSBOW,
  HEAVY_CROSSBOW,
  LONGBOW,
];
