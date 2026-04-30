export interface Dice {
  printable: string;
  numOfDice: number;
  diceNumber: number;
}

const DICE_REGEX = /^([1-9]\d{0,2})d([1-9]\d{0,3})$/i;
const badDice: Dice = {
  printable: "Bad dice (1d1)",
  numOfDice: 1,
  diceNumber: 1,
};

export function diceConstructor(input: string): Dice {
  const printable = input.trim().toLowerCase();

  const match = DICE_REGEX.exec(printable);
  if (!match) {
    return badDice;
  }

  const numOfDice = Number(match[1]);
  const diceNumber = Number(match[2]);

  if (numOfDice > 100 || diceNumber > 1000) {
    return badDice;
  }

  return {
    printable: printable,
    numOfDice: numOfDice,
    diceNumber: diceNumber,
  };
}
