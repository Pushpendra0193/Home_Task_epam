const installGetters = require('../lib/install-getters');
const SELECTOR = {
    inputFirstName: '#first-name',
    inputLastName: '#last-name',
    postalCode: '#postal-code',
    checkoutButton: '#checkout',
    continueButton: '#continue'
}

class CheckoutPage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }

   async enterTheDetails(firstName, lastName, code) {
       await this.inputFirstName.setValue(firstName);
       await this.inputLastName.setValue(lastName);
       await this.postalCode.setValue(code);
    }

}

module.exports = new CheckoutPage();