/// <reference types="cypress" />
import HomePage from "../poms/HomePage";
import CardsPage from "../poms/CardsPage";
import SearchResultPage from "../poms/SearchResultPage";

describe('Navigation Tests', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.navigate();
    });

    it('Should search feature works', () => {
        // assertion for page
        homePage.verifyElementVisible(homePage.intSubeButtonSelector);
        homePage.verifyElementVisible(homePage.searchButtonSelector);
        homePage.verifyElementVisible(homePage.musOlButtonSelector);
        homePage.verifyElementNotVisible(homePage.searchFieldInputSelector);

        homePage.click(homePage.searchButtonSelector);
        cy.wait(5000);
        cy.debug()
        homePage.verifyElementVisible(homePage.searchFieldInputSelector);
        homePage.writeText(homePage.searchFieldInputSelector, 'Kartlar');
        cy.get(homePage.searchFieldInputSelector).should('have.value', 'Kartlar');
        homePage.tapEnter();
        cy.wait(2000);
        homePage.tapEnterOn(homePage.searchFieldInputSelector);

        const searchResultPage = new SearchResultPage();
        searchResultPage.verifyElementVisible(searchResultPage.breadCrumbSelector);
        searchResultPage.verifyElementVisible(searchResultPage.searchInputSelector);
        searchResultPage.verifyElementVisible(searchResultPage.searchFindsListSelector);
        searchResultPage.verifyElementVisible(searchResultPage.searchFindItemSelector);
        searchResultPage.verifyElementVisible(searchResultPage.intSubeButtonSelector);

        cy.get(searchResultPage.breadCrumbSelector).should('contain.text', 'Arama');
        cy.get(searchResultPage.searchInputSelector).should('contain.text', ('Kartlar').toLowerCase());

        cy.get(searchResultPage.searchFindItemSelector).should('have.length.greaterThan', 1);
        cy.get(searchResultPage.searchFindItemSelector).each(($el) => {
            const text = $el.text().trim();
            expect(text).to.not.be.empty;

        });
    });

    it('Should navigate to Cards page', () => {

    });
});
