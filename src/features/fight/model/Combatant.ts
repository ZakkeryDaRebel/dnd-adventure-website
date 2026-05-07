import type { DNDStatblock } from "../../../dnd-rules";
import type { Side } from "./Side";

export interface Combatant {
  id: string;
  stat: DNDStatblock;
  side: keyof typeof Side;

  initiative: number;
  removed: boolean;

  logs: string[];
}
