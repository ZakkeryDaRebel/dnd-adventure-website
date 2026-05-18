import type { Item } from "../../dnd-rules";
import type { NPCState } from "./NPCState";

export interface ShopState {
  id: string;
  name: string;
  shopkeeper: NPCState;
  gold: number;
  inventory: [Item, number][]; // item -> quantity left
  priceModifiers: [Item, number][]; // 1.0 = normal, 0.8 = discount, 1.2 = expensive
}
