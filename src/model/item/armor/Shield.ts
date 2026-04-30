import { Coin } from "../Cost";
import type { Armor } from "./Armor";
import { armorConstructor, ArmorType } from "./Armor";

export const Shield: Armor = armorConstructor(
  "Shield",
  { amount: 10, type: Coin.GP },
  6,
  2,
  ArmorType.Shield,
  "",
);
