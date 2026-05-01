import { Coin } from "../Cost";
import { costConstructor } from "../CostConstructor";
import { ArmorType, type Armor } from "./Armor";
import { armorConstructor } from "./ArmorConstructor";

const gp = Coin.GP;

const fiftyGP = costConstructor(50, gp);

const medium = ArmorType.Medium;

const mediumString = " (Add Dexterity modifier to AC with a max of +2)";
const mediumDisStealth =
  " (Add Dexterity modifier to AC with a max of +2, Disadvantage on Stealth)";

export const Hide: Armor = armorConstructor(
  "Hide",
  costConstructor(10, gp),
  12,
  12,
  medium,
  mediumString,
);

export const ChainShirt: Armor = armorConstructor(
  "Chain Shirt",
  fiftyGP,
  20,
  13,
  medium,
  mediumString,
);

export const ScaleMail: Armor = armorConstructor(
  "Scale Mail",
  fiftyGP,
  45,
  14,
  medium,
  mediumDisStealth,
);

export const Breastplate: Armor = armorConstructor(
  "Breastplate",
  costConstructor(400, gp),
  20,
  14,
  medium,
  mediumString,
);

export const HalfPlate: Armor = armorConstructor(
  "Half Plate",
  costConstructor(750, gp),
  40,
  15,
  medium,
  mediumDisStealth,
);

export const allMediumArmor: Armor[] = [
  Hide,
  ChainShirt,
  ScaleMail,
  Breastplate,
  HalfPlate,
];
