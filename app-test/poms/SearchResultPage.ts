/// <reference types="cypress" />

import BasePage from "./commonPages/BasePage";

class SearchResultPage extends BasePage {
    public breadCrumbSelector = '#ctl00_IsbankDVPlaceHolderBody_IsbankDVPlaceHolderCenter_IsbankBreadCrumb_ik_bradCrump';
    public searchInputSelector = '#SearchBox input';
    public searchFindsListSelector = '#Groups';
    public searchFindItemSelector = '#undefined_itemSummary';
    public intSubeButtonSelector = 'div[class="ek_intsubeBtn"]:nth-of-type(1)';

    constructor() {
        super();
        this.path = '/arama';
        this.title = '\n' +
            '\tArama | Türkiye İş Bankası A.Ş.';
    }
}

export default SearchResultPage;