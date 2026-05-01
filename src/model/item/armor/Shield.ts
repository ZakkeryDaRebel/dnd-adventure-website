import { Coin } from "../Cost";
import type { Armor } from "./Armor";
import { ArmorType } from "./Armor";
import { armorConstructor } from "./ArmorConstructor";

export const Shield: Armor = armorConstructor(
  "Shield",
  { amount: 10, type: Coin.GP },
  6,
  2,
  ArmorType.Shield,
  "",
);
