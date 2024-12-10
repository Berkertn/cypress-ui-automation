/// <reference types="cypress" />

class BasePage {
    protected path: string = '';
    protected title: string = '';
    private cookieDenyLocator: string = 'div[data-name="reddet"]'

    navigate() {
        cy.visit(this.path);
    }

    getTitle() {
        return this.title;
    }

    denyCookies() {
        cy.get(this.cookieDenyLocator).then(($el) => {
            if ($el.is(':visible')) {
                cy.get(this.cookieDenyLocator).click();
            }
        });
    }

    writeText(selector: string, text: string) {
        cy.get(selector).type(text);
    }

    clearText(selector: string) {
        cy.get(selector).clear();
    }

    deleteText(selector: string) {
        cy.get(selector).type('{selectall}{backspace}');
    }

    click(selector: string) {
        cy.get(selector).click();
    }

    tapEnter() {
        cy.get('body').type('{enter}');
    }

    tapEnterOn(selector: string) {
        cy.get(selector).type('{enter}');
    }

    verifyElementVisible(selector: string) {
        cy.get(selector).should('be.visible');
    }

    verifyElementNotVisible(selector: string) {
        cy.get(selector).should('not.be.visible');
    }

}

export default BasePage;