import { LandingPage } from './landing-page.po';
import { browser, logging } from 'protractor';
import { TablePage } from './table-page.po';
/*describe('Landing Page', () => {
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
});*/


describe('Table Page', () => {
  let page: TablePage;

  beforeEach(() => {
    page = new TablePage();
  });

  it('should display column header', () => {
    page.navigateTo();
    expect(page.getColumnHeaderText()).toEqual('Sales and Marketing');
  });

  it('should expand the column when the arrow icon is clicked', () => {
    let elem = page.getColumnExpandIcon();
    page.clickColumnExpandIcon();
    //expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "table-page");
    expect(elem.getAttribute('class')).toContain("ag-hidden");

  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});




