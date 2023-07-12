import SauceDemoPage from "../pages/SauceDemo";

import { expect, test } from "@playwright/test";


test('Test Login Sauce demo', async ({page}) => {
    const username = 'standard_user';
    const password = 'secret_sauce';

    const demoPage = new SauceDemoPage(page);
    await demoPage.goto();
    await expect(await demoPage.getTitle()).toBe('Swag Labs');
    await demoPage.validLogin(username, password);
    await expect(await demoPage.page).toHaveURL(/.*inventory/);
})