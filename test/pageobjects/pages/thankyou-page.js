const installGetters = require('../lib/install-getters');
const SELECTOR = {
    backHomeButton: '#back-to-products'
}

class ThankyouPage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }
}

module.exports = new ThankyouPage();