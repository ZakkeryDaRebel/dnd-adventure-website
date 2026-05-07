export function calculateModifier(baseStat: number): number {
  return Math.floor((baseStat - 10) / 2);
}
