import { diceConstructor, type Dice } from "../../../dice";
import {
  attackDamageConstructor,
  Coin,
  costConstructor,
  Damage,
  weaponConstructor,
  WeaponMastery,
  WeaponProperties,
  type AttackDamage,
  type Cost,
  type Weapon,
} from "../../../dnd-rules";

//
// Helper variables
//

const d4: Dice = diceConstructor("1d4");
const d6: Dice = diceConstructor("1d6");

const bludge: keyof typeof Damage = Damage.Bludgeoning;
const pierce: keyof typeof Damage = Damage.Piercing;
const slash: keyof typeof Damage = Damage.Slashing;

const d4Bludge: AttackDamage = attackDamageConstructor(d4, bludge);
const d6Bludge: AttackDamage = attackDamageConstructor(d6, bludge);
const d6Pierce: AttackDamage = attackDamageConstructor(d6, pierce);

const sp: keyof typeof Coin = Coin.SP;
const gp: keyof typeof Coin = Coin.GP;

const oneGP: Cost = costConstructor(1, gp);
const twoGP: Cost = costConstructor(2, gp);
const twoSP: Cost = costConstructor(2, sp);
const fiveGP: Cost = costConstructor(5, gp);

const light: keyof typeof WeaponProperties = WeaponProperties.Light;
const thrown: keyof typeof WeaponProperties = WeaponProperties.Thrown;
const verse: keyof typeof WeaponProperties = WeaponProperties.Versatile;

const baseRange: string = " (Range 20/60)";
const baseVerse: string = " (1d8)";

const slow: keyof typeof WeaponMastery = WeaponMastery.Slow;
const nick: keyof typeof WeaponMastery = WeaponMastery.Nick;
const sap: keyof typeof WeaponMastery = WeaponMastery.Sap;

//
// Const Weapon Objects
//

export const CLUB: Weapon = weaponConstructor(
  "Club",
  costConstructor(1, sp),
  2,
  [d4Bludge],
  {
    [light]: "",
  },
  0,
  0,
  slow,
);

export const DAGGER: Weapon = weaponConstructor(
  "Dagger",
  twoGP,
  1,
  [attackDamageConstructor(d4, pierce)],
  {
    [WeaponProperties.Finnese]: "",
    [light]: "",
    [thrown]: baseRange,
  },
  0,
  0,
  nick,
);

export const GREATCLUB: Weapon = weaponConstructor(
  "Greatclub",
  twoSP,
  10,
  [attackDamageConstructor(diceConstructor("1d8"), bludge)],
  {
    [WeaponProperties.TwoHanded]: "",
  },
  0,
  0,
  WeaponMastery.Push,
);

export const HANDAXE: Weapon = weaponConstructor(
  "Handaxe",
  fiveGP,
  2,
  [attackDamageConstructor(d6, slash)],
  {
    [light]: "",
    [thrown]: baseRange,
  },
  0,
  0,
  WeaponMastery.Vex,
);

export const JAVELIN: Weapon = weaponConstructor(
  "Javelin",
  costConstructor(5, sp),
  2,
  [d6Pierce],
  {
    [thrown]: " (Range 30/120)",
  },
  0,
  0,
  slow,
);

export const LIGHT_HAMMER: Weapon = weaponConstructor(
  "Light Hammer",
  twoGP,
  2,
  [d4Bludge],
  {
    [light]: "",
    [thrown]: baseRange,
  },
  0,
  0,
  nick,
);

export const MACE: Weapon = weaponConstructor(
  "Mace",
  fiveGP,
  4,
  [d6Bludge],
  {},
  0,
  0,
  sap,
);

export const QUARTERSTAFF: Weapon = weaponConstructor(
  "Quarterstaff",
  twoSP,
  4,
  [d6Bludge],
  {
    [verse]: baseVerse,
  },
  0,
  0,
  WeaponMastery.Topple,
);

export const SICKLE: Weapon = weaponConstructor(
  "Sickle",
  oneGP,
  2,
  [attackDamageConstructor(d4, slash)],
  {
    [light]: "",
  },
  0,
  0,
  nick,
);

export const SPEAR: Weapon = weaponConstructor(
  "Spear",
  oneGP,
  3,
  [d6Pierce],
  {
    [thrown]: baseRange,
    [verse]: baseVerse,
  },
  0,
  0,
  sap,
);

export const ALL_SIMPLE_MELEE_WEAPONS: Weapon[] = [
  CLUB,
  DAGGER,
  GREATCLUB,
  HANDAXE,
  JAVELIN,
  LIGHT_HAMMER,
  MACE,
  QUARTERSTAFF,
  SICKLE,
  SPEAR,
];
