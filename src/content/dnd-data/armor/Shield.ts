import {
  armorConstructor,
  ArmorType,
  Coin,
  costConstructor,
  type Armor,
} from "../../../dnd-rules";

export const SHIELD: Armor = armorConstructor(
  "Shield",
  costConstructor(10, Coin.GP),
  6,
  2,
  ArmorType.Shield,
  "",
);
