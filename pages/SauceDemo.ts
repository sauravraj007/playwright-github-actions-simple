import { Locator, Page } from "@playwright/test";

class SauceDemoPage {
    readonly page: Page;
    readonly password: Locator;
    readonly login: Locator;

    constructor(page: Page) {
        this.page = page;
        this.password = this.page.locator('[placeholder="Password"]');
        this.login = this.page.locator('[name="login-button"]');
    }

    get username () {
        return this.page.locator('[placeholder="Username"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async getTitle () {
        return this.page.title();
    }

    async enterUsername(username: string) {
        await this.username.fill(username);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async pressLogin() {
        await this.login.click();
    }

    async validLogin(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.pressLogin();
    }
}

export default SauceDemoPage;