const installGetters = require('../lib/install-getters');
const SELECTOR = {
    herokuUserName: '#username',
    herokuPassWord: '#password',
    herokuSubmitButton: '//button[@type="submit"]',
    sauceUserName: '#user-name',
    saucePassWord: '#password',
    sauceSubmitButton: '#login-button'
}

class BasePage {
    constructor() {
        this.selector=SELECTOR;
        installGetters.call(this, SELECTOR);
    }

   async loginToHerokuApplication (UserName, PassWord) {
      await  this.herokuUserName.setValue(UserName);
      await  this.herokuPassWord.setValue(PassWord);
      await  this.herokuSubmitButton.click();
    }

    async loginToSauceApplication (UserName, PassWord) {
        await  this.sauceUserName.setValue(UserName);
        await  this.saucePassWord.setValue(PassWord);
        await  this.sauceSubmitButton.click();
      }
}

module.exports = new BasePage();