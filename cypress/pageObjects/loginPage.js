class LoginPage {
    get emailInput() {
        return cy.get("input[type='email']")
    }

    get passwordInput() {
        return cy.get("input[type='password']")
    }

    get loginBtn() {
        return cy.get("button[type='submit']")
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginBtn.click()
    }
}

export const loginPage = new LoginPage()