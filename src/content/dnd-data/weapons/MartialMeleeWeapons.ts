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

const gp: keyof typeof Coin = Coin.GP;

const tenGP: Cost = costConstructor(10, gp);
const fifteenGP: Cost = costConstructor(15, gp);
const twentyGP: Cost = costConstructor(20, gp);
const twentyFiveGP: Cost = costConstructor(25, gp);
const fiveGP: Cost = costConstructor(5, gp);

const slash: keyof typeof Damage = Damage.Slashing;
const bludge: keyof typeof Damage = Damage.Bludgeoning;
const pierce: keyof typeof Damage = Damage.Piercing;

const oneD6: Dice = diceConstructor("1d6");
const twoD6: Dice = diceConstructor("2d6");
const d8: Dice = diceConstructor("1d8");
const d10: Dice = diceConstructor("1d10");

const d8Slash: AttackDamage = attackDamageConstructor(d8, slash);
const d8Bludge: AttackDamage = attackDamageConstructor(d8, bludge);
const d8Pierce: AttackDamage = attackDamageConstructor(d8, pierce);
const d10Slash: AttackDamage = attackDamageConstructor(d10, slash);
const d10Pierce: AttackDamage = attackDamageConstructor(d10, pierce);

const verse: keyof typeof WeaponProperties = WeaponProperties.Versatile;
const heavy: keyof typeof WeaponProperties = WeaponProperties.Heavy;
const reach: keyof typeof WeaponProperties = WeaponProperties.Reach;
const twoHanded: keyof typeof WeaponProperties = WeaponProperties.TwoHanded;
const finesse: keyof typeof WeaponProperties = WeaponProperties.Finnese;
const light: keyof typeof WeaponProperties = WeaponProperties.Light;

const heavyTwo = {
  [heavy]: "",
  [twoHanded]: "",
};

function getHeavyReachTwo(description: string) {
  return {
    [heavy]: "",
    [reach]: "",
    [twoHanded]: description,
  };
}

const verseString: string = " (1d10)";

const versatile = {
  [verse]: verseString,
};

const finLight = {
  [finesse]: "",
  [light]: "",
};

const topple: keyof typeof WeaponMastery = WeaponMastery.Topple;
const sap: keyof typeof WeaponMastery = WeaponMastery.Sap;
const graze: keyof typeof WeaponMastery = WeaponMastery.Graze;
const cleave: keyof typeof WeaponMastery = WeaponMastery.Cleave;
const push: keyof typeof WeaponMastery = WeaponMastery.Push;
const vex: keyof typeof WeaponMastery = WeaponMastery.Vex;

//
// Const weapon objects
//

export const BATTLEAXE: Weapon = weaponConstructor(
  "Battleaxe",
  tenGP,
  4,
  [d8Slash],
  versatile,
  0,
  0,
  topple,
);

export const FLAIL: Weapon = weaponConstructor(
  "Flail",
  tenGP,
  2,
  [d8Bludge],
  {},
  0,
  0,
  sap,
);

export const GLAIVE: Weapon = weaponConstructor(
  "Glaive",
  twentyGP,
  6,
  [d10Slash],
  getHeavyReachTwo(""),
  0,
  0,
  graze,
);

export const GREATAXE: Weapon = weaponConstructor(
  "Greataxe",
  costConstructor(30, gp),
  7,
  [attackDamageConstructor(diceConstructor("1d12"), slash)],
  heavyTwo,
  0,
  0,
  cleave,
);

export const GREATSWORD: Weapon = weaponConstructor(
  "Greatsword",
  costConstructor(50, gp),
  6,
  [attackDamageConstructor(twoD6, slash)],
  heavyTwo,
  0,
  0,
  graze,
);

export const HALBERD: Weapon = weaponConstructor(
  "Halberd",
  twentyGP,
  6,
  [d10Slash],
  getHeavyReachTwo(""),
  0,
  0,
  cleave,
);

// 2014 Lance is 1d12 Piercing damage, and no Heavy property
export const LANCE: Weapon = weaponConstructor(
  "Lance",
  tenGP,
  6,
  [d10Pierce],
  getHeavyReachTwo(" (unless mounted)"),
  0,
  0,
  topple,
);

export const LONGSWORD: Weapon = weaponConstructor(
  "Longsword",
  fifteenGP,
  3,
  [d8Slash],
  versatile,
  0,
  0,
  sap,
);

export const MAUL: Weapon = weaponConstructor(
  "Maul",
  tenGP,
  10,
  [attackDamageConstructor(twoD6, bludge)],
  heavyTwo,
  0,
  0,
  topple,
);

export const MORNINGSTAR: Weapon = weaponConstructor(
  "Morningstar",
  fifteenGP,
  4,
  [d8Pierce],
  {},
  0,
  0,
  sap,
);

export const PIKE: Weapon = weaponConstructor(
  "Pike",
  fiveGP,
  18,
  [d10Pierce],
  getHeavyReachTwo(""),
  0,
  0,
  push,
);

export const RAPIER: Weapon = weaponConstructor(
  "Rapier",
  twentyFiveGP,
  2,
  [d8Pierce],
  {
    [finesse]: "",
  },
  0,
  0,
  vex,
);

export const SCIMITAR: Weapon = weaponConstructor(
  "Scimitar",
  twentyFiveGP,
  3,
  [attackDamageConstructor(oneD6, slash)],
  finLight,
  0,
  0,
  WeaponMastery.Nick,
);

export const SHORTSWORD: Weapon = weaponConstructor(
  "Shortsword",
  tenGP,
  2,
  [attackDamageConstructor(oneD6, pierce)],
  finLight,
  0,
  0,
  vex,
);

// 2014 Trident is 1d6 Piercing with versitle (1d8)
export const TRIDENT: Weapon = weaponConstructor(
  "Trident",
  fiveGP,
  4,
  [d8Pierce],
  {
    [WeaponProperties.Thrown]: " (Range 20/60)",
    [verse]: verseString,
  },
  0,
  0,
  topple,
);

// 2014 Warhammer was 2 lb
export const WARHAMMER: Weapon = weaponConstructor(
  "Warhammer",
  fifteenGP,
  5,
  [d8Bludge],
  versatile,
  0,
  0,
  push,
);

// 2014 War Pick didn't have the versatile property
export const WAR_PICK: Weapon = weaponConstructor(
  "War Pick",
  fiveGP,
  2,
  [d8Pierce],
  versatile,
  0,
  0,
  sap,
);

export const WHIP: Weapon = weaponConstructor(
  "Whip",
  costConstructor(2, gp),
  3,
  [attackDamageConstructor(diceConstructor("1d4"), slash)],
  {
    [finesse]: "",
    [reach]: "",
  },
  0,
  0,
  WeaponMastery.Slow,
);

export const ALL_MARTIAL_MELEE_WEAPONS: Weapon[] = [
  BATTLEAXE,
  FLAIL,
  GLAIVE,
  GREATAXE,
  GREATSWORD,
  HALBERD,
  LANCE,
  LONGSWORD,
  MAUL,
  MORNINGSTAR,
  PIKE,
  RAPIER,
  SCIMITAR,
  SHORTSWORD,
  TRIDENT,
  WARHAMMER,
  WAR_PICK,
  WHIP,
];
