import { LandingPage } from './landing-page.po';
import { browser, logging } from 'protractor';

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
