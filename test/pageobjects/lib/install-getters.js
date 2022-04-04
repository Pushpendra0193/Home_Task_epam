const PageElement = require('./page-element');

 async function installGetters(selectorObjects) {
    for (const key of  Object.keys(selectorObjects)) {
        await  Object.defineProperty(this, key, {
            get () {
                return new PageElement(selectorObjects[key])
            }
        });
    }
}
module.exports = installGetters; 