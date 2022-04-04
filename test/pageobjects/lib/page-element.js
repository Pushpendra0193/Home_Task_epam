class PageElement {
constructor(selector) {
    this.selector=selector;
}

element() {
    return $(this.selector);
}

getText() {
    return $(this.selector).getText();
}

click() {
    return $(this.selector).click();
}

setValue(value) {
    return $(this.selector).setValue(value);
}

waitForDisplayed() {
    return $(this.selector).waitForDisplayed();
}

scrollIntoView() {
    return $(this.selector).scrollIntoView();
}

isDisplayed() {
    return $(this.selector).isDisplayed();
}

}

module.exports = PageElement;