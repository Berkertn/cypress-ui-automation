/// <reference types="cypress" />
/// <reference path="./index.d.ts" />

Cypress.Commands.add('highlight', (selector: string) => {
    cy.get(selector).then(($el) => {
        $el.css('outline', '3px solid magenta'); // Elementi highlight yapar
    });
});


beforeEach(() => {
    cy.log('Test is starting...');
});

afterEach(() => {
    cy.log('Test is finished!');
});
