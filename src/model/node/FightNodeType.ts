export interface FightNodeType {
  type: "fight";
  enemy: string;
  enemyHP: number;
  enemyHitDC: number;
  enemyAttack: number;
  battlefield: string[][];
  winNode: string;
  loseNode: string;
}
