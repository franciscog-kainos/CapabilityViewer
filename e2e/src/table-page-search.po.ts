import { browser, by, element ,protractor} from 'protractor';

export class TablePage {
  navigateTo() {
    return browser.get(browser.baseUrl+="table-page") as Promise<any>;
  }

  fillSearchBox(){
    var searchBox = element(by.id("quickFilter"));
    searchBox.sendKeys('business');
  }
  
  clickColumnExpandIcon(){
    this.getColumnExpandIcon().click() as Promise<any>;
  }

  getColumnExpandIcon(){
    return element(by.xpath('//div[@col-id="1_0"]/div/span[@ref="agOpened"]')) ;
  }

   checkFirstSearchResult(){
    element.all(by.css('.ag-cell-value'))
        .map(function (cell) {
            return cell.getText();
        })
        .then(function (cellValues) {
          //First search result should be head of bussiness unit (its two because we are ignoring the first cell which is just the band)
            expect(cellValues[2]).toEqual("Head of Business Unit");
        });
  }
}
