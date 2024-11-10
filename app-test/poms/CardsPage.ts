/// <reference types="cypress" />

import BasePage from "./commonPages/BasePage";

class HomePage extends BasePage {
    private usernameField = '#username';
    private passwordField = '#password';
    private loginButton = '#login-button';

    constructor() {
        super();
        this.path = '/genel-bilgi';
        this.title = 'Home Page - My Application';
    }

    enterUsername(username: string) {
        cy.get(this.usernameField).type(username);
    }

    enterPassword(password: string) {
        cy.get(this.passwordField).type(password);
    }

    submit() {
        cy.get(this.loginButton).click();
    }
}

export default HomePage;