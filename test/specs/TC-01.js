const { assert } = require('chai');
import testData from  '../pageobjects/lib/test-data';
import basePage from '../pageobjects/pages/base-page'
import url from '../pageobjects/lib/url'
import homePage from '../pageobjects/pages/home-page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       await browser.url(url.herokuUrl);
       await basePage.loginToHerokuApplication(testData.herokuData.userName, testData.herokuData.passWord);
       assert.isTrue( await homePage.logoutButton.isDisplayed(),'Home page is displayed');
    });
});


