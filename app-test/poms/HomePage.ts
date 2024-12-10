/// <reference types="cypress" />

import BasePage from "./commonPages/BasePage";

class HomePage extends BasePage {
    public searchFieldInputSelector = '#ctl00_IsbankDVPlaceHolderBody_IsbankDVPlaceHolderTop_IsbankMainHeader_desktopSearch';
    public searchButtonSelector = '.ek_mblSrch img';
    public musOlButtonSelector = 'div[class="ek_musolBtn"]:first-of-type';
    public intSubeButtonSelector = 'div[class="ek_intsubeBtn"]:nth-of-type(1)';

    constructor() {
        super();
        this.path = '/';
        this.title = '\n' +
            '\tBireysel Bankacılık İşlemleri | Türkiye İş Bankası';
    }
}

export default HomePage;