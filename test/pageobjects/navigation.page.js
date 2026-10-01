class NavigationPage {
    get homeButton() {
        return $('~Home');
    }

    get loginButton() {
        return $('~Login');
    }

    get formsButton() {
        return $('~Forms');
    }

    async openHome() {
        await this.homeButton.click();
    }

    async openLogin() {
        await this.loginButton.click();
    }

    async openForms() {
        await this.formsButton.click();
    }
}

module.exports = new NavigationPage();