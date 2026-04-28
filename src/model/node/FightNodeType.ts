import type { NodeType } from "./NodeType";

export interface FightNodeType extends NodeType {
  type: "fight";
  enemy: string;
  enemyHP: number;
  enemyHitDC: number;
  battlefield: string[][];
  winNode: string;
}
