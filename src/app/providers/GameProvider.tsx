import { useState } from "react";
import { GameContext } from "../../features/game-state/";
import type { AdventureContext } from "../../features/game-state/AdventureContext";

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerInitiative, setPlayerInitiative] = useState<number | null>(null);
  const [adventure, setAdventure] = useState<AdventureContext | null>(null);
  const [playerName, setPlayerName] = useState<string>("adventurer");

  function loadAdventure(adv: AdventureContext, playerName: string) {
    setAdventure(adv);
    setPlayerInitiative(null);
    setPlayerName(playerName);
  }

  function updateAdventure(fn: (prev: AdventureContext) => AdventureContext) {
    setAdventure((prev) => {
      if (!prev) return prev;
      return fn(prev);
    });
  }

  return (
    <GameContext.Provider
      value={{
        playerInitiative,
        setPlayerInitiative,
        adventure,
        loadAdventure,
        updateAdventure,
        playerName,
        setPlayerName,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
