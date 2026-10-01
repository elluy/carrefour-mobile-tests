const NavigationPage = require('../pageobjects/navigation.page');

describe('Navegação do aplicativo', () => {

    it('Deve navegar da Home até Login', async () => {
        await NavigationPage.openHome();
        await NavigationPage.openLogin();

        await expect(NavigationPage.loginButton).toBeDisplayed();

        await expect(
            NavigationPage.loginButton
        ).toHaveAttribute('selected', 'true');
    });

});