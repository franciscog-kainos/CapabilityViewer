import { browser, by, element } from 'protractor';

export class TablePage {
    navigateTo() {
        return browser.get(browser.baseUrl+='table-page') as Promise<any>;
      }
      refreshTable(){
        return browser.get(browser.baseUrl) as Promise<any>;
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

      clickSearchBandButton(){
        this.getSearchBandButton().click() as Promise<any>;
      }

      getSearchBandButton(){
        return element(by.xpath('//div[@col-id="bandLevels"]/div/span/span')) ;
      }

      checkFirstSearchResult(){
        element.all(by.css('.ag-cell-value'))
            .map(function (cell) {
                return cell.getText();
            })
            .then(function (cellValues) {
              //First search result should be head of bussiness unit (its two because we are ignoring the first cell which is just the band)
                expect(cellValues[1]).toEqual("Head of Business Unit");
            });
      }

      checkFirstBandSearchResult(){
        element.all(by.css('.ag-cell-value'))
            .map(function (cell) {
                return cell.getText();
            })
            .then(function (cellValues) {
              //First search result should be head of bussiness unit (its two because we are ignoring the first cell which is just the band)
                expect(cellValues[0]).toEqual("Consultant");
            });
      }

      fillBandSearchBox(){
        var searchBox = element(by.xpath("//input[@class='ag-filter-filter']"));
        searchBox.sendKeys('Consultant');
      }

      fillSearchBox(){
        var searchBox = element(by.id("quickFilter"));
        searchBox.sendKeys('business');
      }

}
