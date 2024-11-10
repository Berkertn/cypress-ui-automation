/// <reference types="cypress" />
import HomePage from "../poms/HomePage";

describe('Navigation Tests', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.navigate();
        homePage.denyCookies();
    });

    it('should navigate to Individual Branch page', () => {

    });

    it('should navigate to Cards page', () => {

    });
});
