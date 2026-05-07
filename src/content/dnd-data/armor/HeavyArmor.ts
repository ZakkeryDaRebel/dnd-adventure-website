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

const heavy: keyof typeof ArmorType = ArmorType.Heavy;

function getHeavyString(strength: number): string {
  return " (Strength requirement of " + strength + ", Disadvantage on Stealth)";
}

const heavyArmorString: string = getHeavyString(15);

export const RING_MAIL: Armor = armorConstructor(
  "Ring Mail",
  costConstructor(30, gp),
  40,
  14,
  heavy,
  " (Disadvantage on Stealth)",
);

export const CHAIN_MAIL: Armor = armorConstructor(
  "Chain Mail",
  costConstructor(75, gp),
  55,
  16,
  heavy,
  getHeavyString(13),
);

export const SPLINT: Armor = armorConstructor(
  "Splint",
  costConstructor(200, gp),
  60,
  17,
  heavy,
  heavyArmorString,
);

export const PLATE: Armor = armorConstructor(
  "Plate",
  costConstructor(1500, gp),
  65,
  18,
  heavy,
  heavyArmorString,
);

export const ALL_HEAVY_ARMOR: Armor[] = [RING_MAIL, CHAIN_MAIL, SPLINT, PLATE];
