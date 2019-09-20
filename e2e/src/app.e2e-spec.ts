import { LandingPage } from './landing-page.po';
import { browser, logging } from 'protractor';
import { AdminPage } from './admin-page.po';

describe('Table Page', () => {
  let page: AdminPage;

  beforeEach(() => {
    page = new AdminPage();
  });

//Testing the edit page
  it('should expand the accordion when it is clicked', () => {
    page.navigateTo();
    let elem = page.getEditHeader();
    page.clickEditHeader();
    expect(elem.getAttribute('class')).toContain("mat-expanded");
  });
    

  it('should add text to the input box', () => {
    page.clickEditJobFamilyNameInput();
    page.clickEditJobFamilyButton();
  });


});
