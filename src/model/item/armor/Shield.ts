import { Coin } from "../Cost";
import { costConstructor } from "../CostConstructor";
import type { Armor } from "./Armor";
import { ArmorType } from "./Armor";
import { armorConstructor } from "./ArmorConstructor";

export const Shield: Armor = armorConstructor(
  "Shield",
  costConstructor(10, Coin.GP),
  6,
  2,
  ArmorType.Shield,
  "",
);
