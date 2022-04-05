const PageElement = require('./page-element');

 async function installGetters(selectorObject) {
    for (const key of  Object.keys(selectorObject)) {
        await  Object.defineProperty(this, key, {
            get () {
                return new PageElement(selectorObject[key])
            }
        });
    }
}
 
module.exports = installGetters; 