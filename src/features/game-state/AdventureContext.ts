import type { NPCState } from "./NPCState";
import type { ShopState } from "./ShopState";

export interface AdventureContext {
  day: number;
  timeOfDay: "Morning" | "Afternoon" | "Evening" | "Night";
  locationId: string;

  npcs: Record<string, NPCState>;

  shops: Record<string, ShopState>;
}
