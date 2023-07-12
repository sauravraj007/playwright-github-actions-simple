import { Locator, Page } from "@playwright/test";
interface BrowserStackSignInPage {
    page: Page;
    locators: Locator
}
class BrowserStackSignInPage {

    constructor(page) {
        this.page = page;
    }

    async enterBusinessEmail(email: string) {
        await this.page.locator('[id="user_email_login"]').fill(email);
    }

}

export default BrowserStackSignInPage;