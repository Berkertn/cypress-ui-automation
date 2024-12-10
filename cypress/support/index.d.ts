/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Highlights the given selector with a border.
         * @param selector - The CSS selector of the element to highlight
         */
        highlight(selector: string): Chainable<Element>;
    }
}