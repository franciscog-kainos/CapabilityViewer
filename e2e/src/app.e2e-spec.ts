import { LandingPage } from './landing-page.po';
import { TablePage } from './table-page-search.po'
import { browser, logging, Ptor } from 'protractor';

describe('Landing Page', () => {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Career Lattice V2.0!');
  });

  it('should redirect to table page when navigation button is clicked', () => {
    page.clickTableNavigation();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "table-page");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Test search function', ()=>{
  let table_page: TablePage; 

  beforeEach(() => {
    table_page = new TablePage
  });

  it('Load table page', () => {
    table_page.navigateTo();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });

    it('Fill text box', () => {
      table_page.fillSearchBox();
      
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
      });

      it('The first search result should be Head of Business', () => {
      table_page.clickColumnExpandIcon()
      table_page.checkFirstSearchResult()
    })

})
