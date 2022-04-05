const { assert } = require('chai');
import testData from  '../pageobjects/lib/test-data';
import basePage from '../pageobjects/pages/base-page'
import url from '../pageobjects/lib/url'
import sauceHomePage from '../pageobjects/pages/saucelab-home-page'
import sauceTestData from '../pageobjects/lib/checkout-teat-data'
import cartPage from '../pageobjects/pages/cart-page'
import CheckoutPage from '../pageobjects/pages/checkout-page'
import checkoutOverviewPage from '../pageobjects/pages/checkout-overview-page'
import thankyouPage from '../pageobjects/pages/thankyou-page'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       await browser.url(url.sauceUrl);
       await basePage.loginToSauceApplication(testData.sauceData.userName, testData.sauceData.passWord);
       const expectedProice = await sauceHomePage.getTheProductPrice();
       await sauceHomePage.clickOnAddTOCartButton();
       await sauceHomePage.navigateToCartPage();
       assert.equal( await cartPage.getTheProductPrice(), expectedProice, 'Cart price is same as expected price');
       await cartPage.checkoutButton.click();
       await CheckoutPage.enterTheDetails(sauceTestData.testDataTC02.firstName, sauceTestData.testDataTC02.lastName, sauceTestData.testDataTC02.postalCode);
       await CheckoutPage.continueButton.click();
       assert.equal( await checkoutOverviewPage.getTheProductPrice(), expectedProice, 'Overview product price is same as expected price');
       await checkoutOverviewPage.finishButon.click();
       assert.isTrue( await thankyouPage.backHomeButton.isDisplayed(), 'Thank you page is displayed');
    });
});


