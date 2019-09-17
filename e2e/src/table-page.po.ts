import { browser, by, element } from 'protractor';

export class TablePage {
    navigateTo() {
        return browser.get(browser.baseUrl+='table-page') as Promise<any>;
      }


      getColumnHeaderText() {
        return element(by.xpath('//div[@col-id="1_0"]')).getText() as Promise<string>;
      }


      clickColumnExpandIcon(){
        this.getColumnExpandIcon().click() as Promise<any>;
      }

      getColumnExpandIcon(){
        return element(by.xpath('//div[@col-id="1_0"]/div/span[@ref="agOpened"]')) ;
      }
}



// /span[@class="ag-header-icon ag-header-expand-icon ag-header-expand-icon-collapsed ag-hidden"]