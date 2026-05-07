import type { DNDStatblock } from "../../../dnd-rules";

export interface FightNodeType {
  type: "fight";
  enemies: DNDStatblock[];
  allies: DNDStatblock[];

  battlefield: string[][];

  winNode: string;
  loseNode: string;
}
