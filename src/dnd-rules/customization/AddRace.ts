import type { DNDStatblock, Race } from "..";

export function addRace(
  statblock: DNDStatblock,
  race: keyof typeof Race,
): DNDStatblock {
  const newStatblock: DNDStatblock = structuredClone(statblock);
  newStatblock.descriptionTag = " (" + race + ")";

  return newStatblock;
}
