class LoginPage {

    get emailInput() {
        return $('~input-email');
    }

    get passwordInput() {
        return $('~input-password');
    }

    get loginButton() {
        return $('~button-LOGIN');
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

    get invalidEmailMessage() {
    return $('android=new UiSelector().text("Please enter a valid email address")');
    }

    get invalidPasswordMessage() {
    return $('android=new UiSelector().text("Please enter at least 8 characters")');
    }

    get signUpTab() {
    return $('~button-sign-up-container');
    }

    get confirmPasswordInput() {
    return $('~input-repeat-password');
    }

    get signUpButton() {
    return $('~button-SIGN UP');
    }

    get passwordMismatchMessage() {
    return $('android=new UiSelector().text("Please enter the same password")');
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async closeAlert() {
        await this.alertOkButton.click();
    }

    async openSignUp() {
    await this.signUpTab.click();
    }

    async signUp(email, password, confirmPassword) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.confirmPasswordInput.setValue(confirmPassword);
    await this.signUpButton.click();    
    }
}

module.exports = new LoginPage();