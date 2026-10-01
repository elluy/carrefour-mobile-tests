const NavigationPage = require('../pageobjects/navigation.page');
const LoginPage = require('../pageobjects/login.page');
const signupData = require('../data/signup.data');

describe('Sign up', () => {

    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
        await driver.activateApp('com.wdiodemoapp');
    });

    it('Deve realizar cadastro com sucesso', async () => {
        await NavigationPage.openLogin();
        await LoginPage.openSignUp();

        await LoginPage.signUp(
            signupData.validUser.email,
            signupData.validUser.password,
            signupData.validUser.confirmPassword
        );

        await expect(LoginPage.alertTitle)
            .toHaveText('Signed Up!');

        await expect(LoginPage.alertMessage)
            .toHaveText('You successfully signed up!');

        await LoginPage.closeAlert();
    });

    it('Deve exibir erro quando as senhas forem diferentes', async () => {
    await NavigationPage.openLogin();
    await LoginPage.openSignUp();

    await LoginPage.signUp(
        signupData.passwordMismatch.email,
        signupData.passwordMismatch.password,
        signupData.passwordMismatch.confirmPassword
    );

    await expect(LoginPage.passwordMismatchMessage)
        .toHaveText('Please enter the same password');
});

});