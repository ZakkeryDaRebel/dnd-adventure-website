import { useState } from "react";
import { GameContext } from "../../features/game-state/";

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerInitiative, setPlayerInitiative] = useState<number | null>(null);

  return (
    <GameContext.Provider value={{ playerInitiative, setPlayerInitiative }}>
      {children}
    </GameContext.Provider>
  );
}
