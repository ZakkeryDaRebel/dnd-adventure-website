import {
  armorConstructor,
  ArmorType,
  Coin,
  costConstructor,
  type Armor,
  type Cost,
} from "../../../dnd-rules";

//
// Helper variables
//

const gp: keyof typeof Coin = Coin.GP;

const fiftyGP: Cost = costConstructor(50, gp);

const medium: keyof typeof ArmorType = ArmorType.Medium;

const mediumString: string = " (Add Dexterity modifier to AC with a max of +2)";
const mediumDisStealth: string =
  " (Add Dexterity modifier to AC with a max of +2, Disadvantage on Stealth)";

//
// Const Armor objects
//

export const HIDE: Armor = armorConstructor(
  "Hide",
  costConstructor(10, gp),
  12,
  12,
  medium,
  mediumString,
);

export const CHAIN_SHIRT: Armor = armorConstructor(
  "Chain Shirt",
  fiftyGP,
  20,
  13,
  medium,
  mediumString,
);

export const SCALE_MAIL: Armor = armorConstructor(
  "Scale Mail",
  fiftyGP,
  45,
  14,
  medium,
  mediumDisStealth,
);

export const BREASTPLATE: Armor = armorConstructor(
  "Breastplate",
  costConstructor(400, gp),
  20,
  14,
  medium,
  mediumString,
);

export const HALF_PLATE: Armor = armorConstructor(
  "Half Plate",
  costConstructor(750, gp),
  40,
  15,
  medium,
  mediumDisStealth,
);

export const ALL_MEDIUM_ARMOR: Armor[] = [
  HIDE,
  CHAIN_SHIRT,
  SCALE_MAIL,
  BREASTPLATE,
  HALF_PLATE,
];
