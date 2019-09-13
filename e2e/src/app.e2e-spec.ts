import { LandingPage } from './landing-page.po';
import { browser, logging } from 'protractor';
import { AdminPage } from './admin-page.po';
import {BandDetailViewerPage} from "./band-detail-viewer-page.po";

describe('Landing Page', () => {
  let landingPage: LandingPage;
  let bandDetailPage: BandDetailViewerPage;

  beforeEach(() => {
       landingPage = new LandingPage();
  });

  it('should display welcome message', () => {
      landingPage.navigateTo();
    expect(landingPage.getTitleText()).toEqual('Welcome to Career Lattice V2.0!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});



describe('Band detail page', () => {
  let page: BandDetailViewerPage;

  beforeEach(() => {
    page = new BandDetailViewerPage();
  });

  it('should display band name', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Executive');
  });

  it('should display band responsibilities when responsibilities panel is clicked', () => {
    page.clickResponsibilities();
    expect(page.getResponsibilitiesContent()).toContain('Executive responsibility');
  });

  it('should display band competencies when competencies panel is clicked', () => {
    page.clickCompetencies();
    expect(page.getCompetenciesContent()).toEqual('Executive Competency');
  });

  it('should display band training categories when training panel is clicked', () => {
    page.clickTraining();
    browser.driver.sleep(500);
    expect(page.getTrainingCategoryText()).toContain('Professional Skills');
  });

  it('should display band training content when a category is clicked', () => {
    page.clickTrainingCategory();
    expect(page.getTrainingContent()).toContain('Coaching - 3. Advanced');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

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
