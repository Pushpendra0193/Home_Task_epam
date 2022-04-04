const installGetters = require('../lib/install-getters');
const SELECTOR = {
   itemPrice: '.inventory_item_price',
   finishButon: '#finish'
}

class CheckoutOverviewPage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }

   async getTheProductPrice() {
       await this.itemPrice.getText();
    }

}

module.exports = new CheckoutOverviewPage();