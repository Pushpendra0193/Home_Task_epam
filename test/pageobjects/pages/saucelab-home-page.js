const installGetters = require('../lib/install-getters');
const SELECTOR = {
    // addToCartButton: itemName => `#add-to-cart-sauce-labs-${itemName}`,
    addToCartButton: '#add-to-cart-sauce-labs-backpack',
    cartbutton: '.shopping_cart_link',
    // itemPrice: (item) => `//button[@id="add-to-cart-sauce-labs-${item}"]/preceding-sibling::div`,
    itemPrice: '//button[@id="add-to-cart-sauce-labs-backpack"]/preceding-sibling::div',
    checkoutButton: '#checkout'
}

class SauceHomePage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }

    async clickOnAddTOCartButton(item) {
       await this.addToCartButton(item).click();
       await this.addToCartButton.click();
    }

    async navigateToCartPage() {
      await  this.cartbutton.click()
    } 
    
    async getTheProductPrice(item) {
        // return await this.itemPrice(item).getText();
        return await this.itemPrice.getText();

    }
}

module.exports = new SauceHomePage();