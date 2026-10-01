const NavigationPage = require('../pageobjects/navigation.page');
const LoginPage = require('../pageobjects/login.page');
const loginData = require('../data/login.data');

describe('Login', () => {

    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
        await driver.activateApp('com.wdiodemoapp');
    });

    it('Deve realizar login com sucesso', async () => {
        await NavigationPage.openLogin();

        await LoginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        await expect(LoginPage.alertTitle).toHaveText('Success');
        await expect(LoginPage.alertMessage).toHaveText('You are logged in!');

        await LoginPage.closeAlert();
    });

    it('Deve exibir erro para e-mail inválido', async () => {
        await NavigationPage.openLogin();

        await LoginPage.login(
            loginData.invalidEmail.email,
            loginData.invalidEmail.password
        );

        await expect(LoginPage.invalidEmailMessage)
            .toHaveText('Please enter a valid email address');
    });

    it('Deve exibir erro para senha com menos de 8 caracteres', async () => {
        await NavigationPage.openLogin();

        await LoginPage.login(
            loginData.shortPassword.email,
            loginData.shortPassword.password
        );

        await expect(LoginPage.invalidPasswordMessage)
            .toHaveText('Please enter at least 8 characters');
    });

});