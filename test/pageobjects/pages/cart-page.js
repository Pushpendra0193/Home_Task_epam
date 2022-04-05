const installGetters = require('../lib/install-getters');
const SELECTOR = {
    itemPrice: '.inventory_item_price',
    checkoutButton: '#checkout'
}

class CartPage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }

    async getTheProductPrice() {
      return await this.itemPrice.getText();

    }

}

module.exports = new CartPage();