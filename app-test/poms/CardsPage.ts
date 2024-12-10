/// <reference types="cypress" />

import BasePage from "./commonPages/BasePage";

class CardsPage extends BasePage {
    public breadCrumbSelector = '#ctl00_IsbankDVPlaceHolderBody_IsbankDVPlaceHolderCenter_IsbankBreadCrumb_ik_bradCrump';
    public headerSelector = '.topDefBaslik';
    public subTitlesSelector = '.owl-item active';
    public basvurButtonSelector = 'a[href="/kredi-karti-basvuru"]';


    constructor() {
        super();
        this.path = '/genel-bilgi';
        this.title = '\n' +
            '\tBankamız Hizmetleri, Faiz ve Ücretleri | Türkiye İş Bankası';
    }
}

export default CardsPage;