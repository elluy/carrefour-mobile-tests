const NavigationPage = require('../pageobjects/navigation.page');
const FormsPage = require('../pageobjects/forms.page');

describe('Forms', () => {

    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp');
        await driver.activateApp('com.wdiodemoapp');
    });

    it('Deve exibir o texto digitado no campo', async () => {
        await NavigationPage.openForms();

        await FormsPage.fillTextInput('Teste Banco Carrefour'); //Para nao ficar mto complexo vou informar o texto na propria spec.

        await expect(FormsPage.inputTextResult)
            .toHaveText('Teste Banco Carrefour');
    });

    it('Deve ativar o switch', async () => {
    await NavigationPage.openForms();


    await FormsPage.toggleSwitch();

    await expect(FormsPage.switchButton)
        .toHaveAttribute('checked', 'true');

    await expect(FormsPage.switchText)
        .toHaveText('Click to turn the switch OFF'); //dupla validação, tanto o switch quanto o texto que muda de acordo com o estado do switch
    });

    it('Deve selecionar uma opção no dropdown', async () => {
    await NavigationPage.openForms();

    await FormsPage.selectAppiumOption();

    await expect(FormsPage.selectedDropdownOption)
    .toHaveText('Appium is awesome');
    });

    it('Deve exibir alerta ao clicar no botão Active', async () => {
    await NavigationPage.openForms();

    await FormsPage.clickActiveButton();

    await expect(FormsPage.alertTitle)
        .toHaveText('This button is');

    await expect(FormsPage.alertMessage)
        .toHaveText('This button is active');

    await FormsPage.closeAlert();
    });

});