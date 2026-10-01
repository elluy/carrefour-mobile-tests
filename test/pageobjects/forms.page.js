class FormsPage {

    get textInput() {
        return $('~text-input');
    }

    get inputTextResult() {
        return $('~input-text-result');
    }

    get switchButton() {
    return $('~switch');
    }

    get switchText() {
    return $('~switch-text');
    }

    get dropdown() {
    return $('~Dropdown');
    }

    get appiumOptionAppiumIsAwesome() {
    return $('android=new UiSelector().text("Appium is awesome")');
    }

    get selectedDropdownOption() {
    return $('android=new UiSelector().resourceId("text_input")');
    }

    get activeButton() {
    return $('~button-Active');
    }

    get alertTitle() {
    return $('id=com.wdiodemoapp:id/alert_title');
    }

    get alertMessage() {
    return $('id=android:id/message');
    }

    get alertOkButton() {
    return $('id=android:id/button1');
    }

    async fillTextInput(text) {
        await this.textInput.setValue(text);
    }

    async toggleSwitch() {
        await this.switchButton.click();
    }

    async selectAppiumOption() {
    await this.dropdown.click();
    await this.appiumOptionAppiumIsAwesome.click();
    }

    async clickActiveButton() {
    await this.activeButton.click();
    }

    async closeAlert() {
    await this.alertOkButton.click();
    }
}

module.exports = new FormsPage();