const installGetters = require('../lib/install-getters');
const SELECTOR = {
    logoutButton: '[href="/logout"]'
}

class HomePage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }

}

module.exports = new HomePage();