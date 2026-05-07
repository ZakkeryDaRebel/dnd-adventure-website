import type { DNDStatblock } from "..";

export function changeName(
  statblock: DNDStatblock,
  name: string,
): DNDStatblock {
  const newStatblock: DNDStatblock = structuredClone(statblock);
  newStatblock.name = name;

  return newStatblock;
}
