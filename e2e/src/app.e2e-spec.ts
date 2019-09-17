import { LandingPage } from './landing-page.po';
import { browser, logging } from 'protractor';
import { AdminPage } from './admin-page.po';
import {BandDetailViewerPage} from "./band-detail-viewer-page.po";
import { browser, logging, protractor } from 'protractor';

describe('Table Page', () => {
    let page: AdminPage;

    beforeEach(() => {
        page = new AdminPage();
    });


  it('should expand the accordion when it is clicked', () => {
    page.navigateTo();
    let elem = page.getAddJobFamilyAccordion();
    page.clickAddJobFamilyAccordion();

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



describe('Admin page', () => {
    let adminPage: AdminPage;
    beforeEach(() => {
    browser.driver.manage().window().maximize();

      adminPage = new AdminPage();
    });

    describe('Job family', () => {

        it('should display job family title', () => {
            adminPage.navigateTo();

            expect(adminPage.getDialogTitleText()).toEqual('Job Family');
        });

        it('should display panel to delete a job family', () => {
            expect(adminPage.getDeleteJobFamilyTitleText()).toEqual('Delete Job Family');
        });

        it('should display delete a job family description', () => {
            expect(adminPage.getDeleteJobFamilyDescriptionText()).toEqual('Permanently delete a job family from the system');
        });

        it('should contain a deletable family option', () => {
            adminPage.clickDeleteJobFamilyPanel();
            browser.driver.sleep(500);
            adminPage.clickDeleteJobFamilySelection();
            expect(adminPage.getJobFamilyToDeleteText()).toEqual('Central Services Teams');
        });

        it('should display confirmation title before deleting a job family', () => {
            adminPage.clickJobFamilyToDelete();
            adminPage.clickDeleteJobFamilyButton();
            expect(adminPage.getConfirmDialogTitleText()).toEqual('Confirm deletion');
        });

        it('should display confirmation message before deleting a job family', () => {
            expect(adminPage.getConfirmDialogMessageText()).toContain("Are you sure you want to delete job family 'Central Services Teams'");
        });

        it('should remove selection when confirm button is clicked', () => {
            adminPage.clickConfirmDeleteButton();
            expect(adminPage.getDeleteJobFamilyButtonEnabled()).toBe(false);
        });


    });

});
