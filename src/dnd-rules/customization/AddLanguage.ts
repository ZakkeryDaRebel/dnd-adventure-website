import type { DNDStatblock, Languages } from "..";

export function addLanguages(
  statblock: DNDStatblock,
  languages: (keyof typeof Languages)[],
): DNDStatblock {
  const newStatblock: DNDStatblock = structuredClone(statblock);
  newStatblock.languages = [...statblock.languages, ...languages];

  return newStatblock;
}
