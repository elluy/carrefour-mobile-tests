
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

    async openLogin() {
        await this.loginButton.click();
    }

    async openForms() {
        await this.formsButton.click();
    }

    async openHome() {
        await this.homeButton.click();
    }
}

module.exports = new NavigationPage();
