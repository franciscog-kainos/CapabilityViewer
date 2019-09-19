import { AdminPage } from './admin-page.po';
import { browser, logging } from 'protractor';

describe('Table Page', () => {
  let page: AdminPage;

  beforeEach(() => {
    page = new AdminPage();
  });


  it('should expand the accordion when it is clicked', () => {
    page.navigateTo();
    let elem = page.getAddJobFamilyAccordion();
    page.clickAddJobFamilyAccordion();
    expect(elem.getAttribute('class')).toContain("mat-expanded");
  });
    

  it('should add text to the input box', () => {
    page.clickJobFamilyNameInput();
    page.clickAddJobFamilyButton();
  });
});

afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});
