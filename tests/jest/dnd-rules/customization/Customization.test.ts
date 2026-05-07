import { GUARD_SPEAR } from "../../../../src/content/dnd-data";
import {
  addLanguages,
  addRace,
  changeName,
  Languages,
  Race,
} from "../../../../src/dnd-rules";

describe("Change Base Statblock for variety", () => {
  test("Can add Race", () => {
    const humanGuard = addRace(GUARD_SPEAR, Race.Human);

    expect(humanGuard.descriptionTag).toBe(" (Human)");
  });

  test("Can add 1 Language", () => {
    const bilingualGuard = addLanguages(GUARD_SPEAR, [Languages.Halfling]);

    expect(bilingualGuard.languages).toHaveLength(2);
    expect(bilingualGuard.languages).toContain(Languages.Common);
    expect(bilingualGuard.languages).toContain(Languages.Halfling);
  });

  test("Can add multiple Languages", () => {
    const multiLingualGuard = addLanguages(GUARD_SPEAR, [
      Languages.Draconic,
      Languages.Dwarvish,
      Languages.Elvish,
    ]);

    expect(multiLingualGuard.languages).toHaveLength(4);
    expect(multiLingualGuard.languages).toContain(Languages.Common);
    expect(multiLingualGuard.languages).toContain(Languages.Draconic);
    expect(multiLingualGuard.languages).toContain(Languages.Dwarvish);
    expect(multiLingualGuard.languages).toContain(Languages.Elvish);
  });

  test("Can add to name", () => {
    const guardOne = changeName(GUARD_SPEAR, GUARD_SPEAR.name + " #1");

    expect(guardOne.name).toBe("Spear Guard #1");
  });

  test("Can change name", () => {
    const newName: string = "Steve";
    const steve = changeName(GUARD_SPEAR, newName);

    expect(steve.name).toBe(newName);
  });
});
