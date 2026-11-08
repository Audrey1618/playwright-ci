import { test, expect } from '@playwright/test';

test('first-test', async ({ page }) => {
    let url = 'https://playwright.dev'; // let url: string = 'https://playwright.dev/docs'; -- typescript
    await page.goto(url);

    // Expect a title "to contain" a substring
    let pageTitle = await page.title();
    await expect(pageTitle).toContain('Playwright');
    await expect(page).toHaveTitle(/Playwright/);

    // Click the get started link
    let getStartedBtn = await page.getByRole("link", { name: 'Get started' });
    await getStartedBtn.click();

    // Expects page to have a heading with the name of Installation
    let pageHeading = await page.getByRole("heading", {name: 'Installation'});
    await expect(pageHeading).toContainText(/Installation/);

    
});
