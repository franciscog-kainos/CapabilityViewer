import { LandingPage } from './landing-page.po';
import { DetailViewerRole } from './detail-viewer-role';
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

describe('Detail Viewer', () => {
  let page: DetailViewerRole;

  beforeEach(() => {
    page = new DetailViewerRole();
 //   page.navigateTo();
  });

  it('should display Role Title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Head of Business Unit');
  });

  it('should display Job Summary content after clicking on Job Summary', () => {
    expect(page.getJobSummaryText()).toEqual('Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.');
  });

  it('should redirect to table page when back button is clicked', () => {
    page.navigateBack();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8001/table-page');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
