import { test, expect } from "@playwright/test";

const homePage: string =
  "http://localhost:5173/solo-adventures/dnd-adventure-website/#/";

test("can load", async ({ page }) => {
  await page.goto(homePage);

  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole("heading", { name: "Choose Your Adventure" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "The Dark Forest Test - A" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Goblins beseiging Westwood! A" }),
  ).toBeVisible();
});

test("adventure buttons are clickable", async ({ page }) => {
  await page.goto(homePage);

  await page.getByRole("button", { name: "The Dark Forest Test - A" }).click();
  await expect(page).toHaveURL(homePage + "adventure/test-forest");

  await page.goto(homePage);

  await page
    .getByRole("button", { name: "Goblins beseiging Westwood! A" })
    .click();
  await expect(page).toHaveURL(homePage + "adventure/goblin-westwood");
});

test("test adventure is fully explorable", async ({ page }) => {
  await page.goto(homePage);

  await page.getByRole("button", { name: "The Dark Forest Test - A" }).click();

  // Start node
  await expect(
    page.getByRole("heading", { name: "The Beginning" }),
  ).toBeVisible();
  await expect(page.getByText("You wake up in the morning,")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Enter the forest!" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Enter the forest!" }).click();

  // Enter node
  await expect(page).toHaveURL(homePage + "adventure/test-forest/enter");
  await expect(
    page.getByRole("heading", { name: "The Dark Forest" }),
  ).toBeVisible();
  await expect(page.getByText("You step into the forest.")).toBeVisible();
  await expect(page.getByText("cold")).toBeVisible();
  await expect(page.getByRole("img")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Look closer at the ground" }),
  ).toBeVisible();
  await expect(page.getByText("You find strange claw marks")).not.toBeVisible();
  await page.getByRole("button", { name: "Look closer at the ground" }).click();
  await expect(
    page.getByRole("button", { name: "Look closer at the ground" }),
  ).not.toBeVisible();
  await expect(page.getByText("You find strange claw marks")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Follow the tracks" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Run away" })).toBeVisible();
  await page.getByRole("button", { name: "Run away" }).click();

  // Start Node
  await expect(page).toHaveURL(homePage + "adventure/test-forest/start");
  await expect(
    page.getByRole("heading", { name: "The Beginning" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Enter the forest!" }).click();

  // Enter Node
  await page.getByRole("button", { name: "Follow the tracks" }).click();

  // Tracks Node
  await expect(page).toHaveURL(homePage + "adventure/test-forest/tracks");
  await expect(page.getByText("While you walk forward, you")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "I got higher than a -" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "I got higher than a -" }).click();

  // Fight Wolf Node
  await expect(page).toHaveURL(homePage + "adventure/test-forest/fight_wolf");
  await expect(
    page.getByRole("heading", { name: "Fight vs Wolf" }),
  ).toBeVisible();
  await expect(page.getByText("Enemy HP: 12+-")).toBeVisible();
  await expect(page.getByRole("button", { name: "+" })).toBeVisible();
  await expect(page.getByRole("button", { name: "-" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Enemy Defeated → Continue" }),
  ).not.toBeVisible();
  for (let i = 0; i < 12; i++) {
    await page.getByRole("button", { name: "-" }).click({ delay: 100 });
  }
  await expect(page.getByText("Enemy HP: 0+-")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Enemy Defeated → Continue" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Enemy Defeated → Continue" }).click();

  // After Wolf Node
  await expect(page).toHaveURL(homePage + "adventure/test-forest/afterWolf");
  await expect(page.getByRole("heading", { name: "Victory!" })).toBeVisible();
  await expect(page.getByText("You defeated the wolf!")).toBeVisible();
  await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();

  // Cave Node
  await expect(page).toHaveURL(homePage + "adventure/test-forest/cave");
  await expect(page.getByText("Treasure! You win.")).toBeVisible();
  await expect(page.getByRole("button", { name: "Home Page" })).toBeVisible();
  await page.getByRole("button", { name: "Home Page" }).click();

  await expect(page).toHaveURL(homePage);
});
