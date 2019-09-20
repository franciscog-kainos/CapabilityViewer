import { browser, by, element } from 'protractor';

export class AdminPage {

    navigateTo() {
        return browser.get(browser.baseUrl+='admin-page') as Promise<any>;      
    }

    clickEditHeader(){
    this.getEditHeader().click() as Promise<any>;
  }

  getEditHeader(){
    return element(by.xpath('//*[@id="mat-expansion-panel-header-1"]')) ;
  }
  clickEditJobFamilyNameInput(){
    this.getAddJobFamilyNameInput().click() as Promise<any>;
  }
   getAddJobFamilyNameInput(){
    return element(by.xpath('//div/input[@id="jobFamilyName"]'));
  }

  clickEditJobFamilyButton(){
    let input = element(by.css('input'));
    input.clear();
    input.sendKeys('testfamily');
    expect(input.getAttribute('value')).toBe('testfamily');

}
  
}