import { expect, type Page, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("New Search", () => {
  test("should allow me to search", async ({ page }) => {
    // create a new todo locator
    const search = page.getByPlaceholder("Search for places");

    // Type for autocomplete results.
    await search.fill("London");

    // Make sure the list only has one todo item.
    const londonResult = page.getByText(
      "London, City of London, Greater London, United Kingdom"
    );

    await page.click('button:text("London, City of London")');

    await expect(page).toHaveURL(
      "http://localhost:3000/weather/london-city-of-london-greater-london-united-kingdom"
    );
  });
});
