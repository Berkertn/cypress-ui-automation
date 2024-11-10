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

}

export default BasePage;