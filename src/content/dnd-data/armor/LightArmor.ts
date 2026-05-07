import {
  armorConstructor,
  ArmorType,
  Coin,
  costConstructor,
  type Armor,
} from "../../../dnd-rules";

//
// Helper variables
//

const gp: keyof typeof Coin = Coin.GP;

const light: keyof typeof ArmorType = ArmorType.Light;

const lightOther: string = " (Add Dexterity modifier to AC)";

//
// Const armor objects
//

export const PADDED: Armor = armorConstructor(
  "Padded",
  costConstructor(5, gp),
  8,
  11,
  light,
  " (Add Dexterity modifier to AC, Disadvantage on Stealth)",
);

export const LEATHER: Armor = armorConstructor(
  "Leather",
  costConstructor(10, gp),
  10,
  11,
  light,
  lightOther,
);

export const STUDDED_LEATHER: Armor = armorConstructor(
  "Studded Leather",
  costConstructor(45, gp),
  13,
  12,
  light,
  lightOther,
);

export const ALL_LIGHT_ARMOR: Armor[] = [PADDED, LEATHER, STUDDED_LEATHER];
