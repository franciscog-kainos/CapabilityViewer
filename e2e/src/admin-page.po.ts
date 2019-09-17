import { browser, by, element } from 'protractor';

export class AdminPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/admin-page') as Promise<any>;
  }

  /* Start delete job family content */

  getDialogTitleText() {
    return element(by.xpath("//*[@id='job-family-title']")).getText() as Promise<string>;
  }

  getDeleteJobFamilyTitleText(){
    return element(by.xpath("//*[@id='delete-job-family-title']")).getText() as Promise<string>;
  }

  getDeleteJobFamilyDescriptionText(){
    return element(by.xpath("//*[@id='delete-job-family-description']")).getText() as Promise<string>;
  }

  getDeleteJobFamilySelectionText(){
    return element(by.xpath("//*[@class='mat-select-placeholder']")).getText() as Promise<string>;
   }

   getJobFamilyToDeleteText(){
    return this.getJobFamilyToDelete().getText() as Promise<string>;
   }

   getConfirmDialogTitleText(){
    return this.getConfirmDialogTitle().getText() as Promise<string>;
   }

   getConfirmDialogMessageText(){
      return this.getConfirmDialogMessage().getText() as Promise<string>;
   }

  getDeleteJobFamilyPanel(){
    return element(by.xpath("//*[@id='delete-job-family-panel']"));
  }

  getDeleteJobFamilySelection(){
    return element(by.xpath("//*[@id='delete-job-family-selection']"));
  }

  getJobFamilyToDelete(){
    return element(by.xpath("//*[@id='mat-option-0']"));
  }

  getDeleteJobFamilyButton(){
    return element(by.xpath("//*[@id='delete-job-family-button']"));
  }

  getDeleteJobFamilyButtonEnabled(){
    return this.getDeleteJobFamilyButton().isEnabled();
  }

  getConfirmDeleteButton(){
    return element(by.xpath("//*[@id='confirm-delete-button']"));
  }

  getCloseFeedbackButton(){
    return element(by.xpath("//*[@id='close-feedback-button']"));
  }

  getConfirmDialogTitle(){
    return element(by.xpath("//*[@id='confirm-delete-dialog-title']"));
  }

  getConfirmDialogMessage(){
    return element(by.xpath("//*[@id='confirm-delete-dialog-message']"));
  }

  getCancelDeleteButton(){
    return element(by.xpath("//*[@id='cancel-delete-button']"));
  }

  clickDeleteJobFamilyPanel(){
    this.getDeleteJobFamilyPanel().click();
  }

  clickDeleteJobFamilySelection(){
    this.getDeleteJobFamilySelection().click();
  }

  clickJobFamilyToDelete(){
    this.getJobFamilyToDelete().click();
  }

  clickDeleteJobFamilyButton(){
    this.getDeleteJobFamilyButton().click();
  }

  clickConfirmDeleteButton(){
    this.getConfirmDeleteButton().click();
  }

  clickCancelDeleteButton(){
    this.getCancelDeleteButton().click();
  }

  clickCloseFeedbackButton(){
    this.getCloseFeedbackButton().click();
  }

  /* End delete job family content */

      /* Add Job Family Tests */
      getColumnHeaderText() {
          return element(by.xpath('//div[@col-id="1_0"]')).getText() as Promise<string>;
      }

      clickAddJobFamilyAccordion(){
          this.getAddJobFamilyAccordion().click() as Promise<any>;
      }

      getAddJobFamilyAccordion(){
          return element(by.xpath('//*[@id="mat-expansion-panel-header-0"]'));
      }

      clickJobFamilyNameInput(){
          this.getAddJobFamilyNameInput().click() as Promise<any>;
      }
      getAddJobFamilyNameInput(){
          return element(by.xpath('//div/input[@id="jobFamilyName"]'));
      }

      clickAddJobFamilyButton(){
          let input = element(by.css('input'));
          input.clear();
          input.sendKeys('testfamily');
          expect(input.getAttribute('value')).toBe('testfamily');

      }

      clickEditHeader(){
      this.getEditHeader().click() as Promise<any>;
    }

    getEditHeader(){
      return element(by.xpath('//*[@id="mat-expansion-panel-header-1"]')) ;
    }
    clickEditJobFamilyNameInput(){
      this.getAddJobFamilyNameInput().click() as Promise<any>;
    }
     getAddJobFamilyNameInput(){
      return element(by.xpath('//div/input[@id="jobFamilyName"]'));
    }

    clickEditJobFamilyButton(){
      let input = element(by.css('input'));
      input.clear();
      input.sendKeys('testfamily');
      expect(input.getAttribute('value')).toBe('testfamily');

    }

}
