const { chromium } = require('@playwright/test');
const { baseUrl } = require('../constants');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.locator('button:has-text("Consent")').click();
    await context.storageState({ path: 'consent-state.json' });
    await browser.close();
})();
