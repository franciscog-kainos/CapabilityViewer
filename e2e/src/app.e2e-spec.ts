import { LandingPage } from './landing-page.po';
import { BandDetailViewerPage } from './band-detail-viewer-page.po';
import { RoleDetailViewerPage } from './role-detail-viewer-page.po';
import { browser, logging, protractor } from 'protractor';

describe('Landing Page', () => {
  let page: LandingPage;
  let roleDetailPage: RoleDetailViewerPage;

  beforeEach(() => {
    page = new LandingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Career Lattice V2.0!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});


describe('Role detail page', () => {
let page: RoleDetailViewerPage;
    beforeEach(() => {
        page = new  RoleDetailViewerPage();
    });

      it('should display role name', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Head of Business Unit');
      });

    it('should display role training categories when training panel is clicked', () => {
        page.clickTraining();
        browser.driver.sleep(500);
        expect(page.getTrainingCategoryText()).toContain('Professional Skills');
      });

      it('should display role training content when a category is clicked', () => {
        page.clickTrainingCategory();
        browser.driver.sleep(500);
        expect(page.getTrainingContent()).toContain('Coaching - 3. Advanced');
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
    browser.driver.sleep(500);
    expect(page.getResponsibilitiesContent()).toContain('Executive Responsibilities');
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
  browser.driver.sleep(500);
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

