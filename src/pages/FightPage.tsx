import { useState } from "react";
import type { FightNodeType } from "../model/node/FightNodeType";

interface Props {
  node: FightNodeType;
  goTo: (nodeId: string) => void;
}

function rollD20(): number {
  return Math.floor(Math.random() * 20) + 1;
}

function BattlefieldGrid({ grid }: { grid: string[][] }) {
  return (
    <div
      className="grid gap-2 justify-center"
      style={{ gridTemplateColumns: `repeat(${grid[0].length}, 60px)` }}
    >
      {grid.flat().map((cell, i) => (
        <div
          key={i}
          className="w-14 h-14 bg-slate-700 flex items-center justify-center rounded"
        >
          {cell}
        </div>
      ))}
    </div>
  );
}

export default function FightPage({ node, goTo }: Props) {
  const [enemyHP, setEnemyHP] = useState<number>(node.enemyHP);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [log, setLog] = useState<string[]>([]);
  //TODO: DELETE ME
  console.log(log);

  function enemyAttack() {
    const roll = rollD20();
    setLastRoll(roll);

    if (roll >= node.enemyHitDC)
      setLog((prev) => [`Enemy hits! (rolled ${roll})`, ...prev]);
    else setLog((prev) => [`Enemy misses! (rolled ${roll})`, ...prev]);
  }

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl">Fight vs {node.enemy}</h2>
      <BattlefieldGrid grid={node.battlefield} />

      <div className="text-xl">
        Enemy HP: {enemyHP}
        <div className="space-x-3 mt-2">
          <button
            onClick={() => setEnemyHP(enemyHP + 1)}
            className="bg-green-600 px-4 py-2 rounded"
          >
            +
          </button>
          <button
            onClick={() => setEnemyHP(enemyHP - 1)}
            className="bg-red-600 px-4 py-2 rounded"
          >
            -
          </button>
        </div>
      </div>

      <button onClick={enemyAttack} className="bg-purple-600 px-6 py-3 rounded">
        Enemy Attack (d20)
      </button>

      {lastRoll && <p>Last roll: {lastRoll}</p>}

      {enemyHP <= 0 && (
        <button
          onClick={() => goTo(node.winNode)}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Enemy Defeated → Continue
        </button>
      )}
    </div>
  );
}
