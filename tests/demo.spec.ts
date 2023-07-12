import { test as base, expect } from '@playwright/test';
import BrowserStackSignInPage from '../pages/SignInPage';

const test = base.extend<{signInPage: BrowserStackSignInPage}>({
    signInPage: async ({page}, use) => {
        const signInPage = new BrowserStackSignInPage(page);
        await use(signInPage);
    }
});

test.describe('# BrowserStack Sign In', () => {
    test('test sign in', async ({signInPage}) => {
        //const signInPage = new BrowserStackSignInPage(page);
        await signInPage.page.goto('https://www.browserstack.com/users/sign_in');

        await signInPage.enterBusinessEmail('srajsriv@cisco.com');
    })
})


