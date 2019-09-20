import { browser, by, element } from 'protractor';

export class AdminPage {

    navigateTo() {
        return browser.get(browser.baseUrl+='admin-page') as Promise<any>;      
    }

    /* Add Job Family Tests */
    getColumnHeaderText() {
        return element(by.xpath('//div[@col-id="1_0"]')).getText() as Promise<string>;
    }

    clickAddJobFamilyAccordion(){
        this.getAddJobFamilyAccordion().click() as Promise<any>;
    }

    getAddJobFamilyAccordion(){
        return element(by.xpath('//*[@id="mat-expansion-panel-header-0"]'));
    }

    clickJobFamilyNameInput(){
        this.getAddJobFamilyNameInput().click() as Promise<any>;
    }
    getAddJobFamilyNameInput(){
        return element(by.xpath('//div/input[@id="jobFamilyName"]'));
    }

    clickAddJobFamilyButton(){
        let input = element(by.css('input'));
        input.clear();
        input.sendKeys('testfamily');
        expect(input.getAttribute('value')).toBe('testfamily');

    }
    /* Add Job Family Tests */

}
