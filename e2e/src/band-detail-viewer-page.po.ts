import { browser, by, element } from 'protractor';

export class BandDetailViewerPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/detail-viewer/band/1') as Promise<any>;
  }

  getTitleText() {
    return element(by.id('band-name')).getText() as Promise<string>;
  }

  clickResponsibilities(){
    this.getResponsibilitiesExpandable().click();
  }

  clickCompetencies(){
    this.getCompetenciesExpandable().click();
  }

  clickTraining(){
    this.getTrainingExpandable().click();
  }

  clickTrainingCategory(){
    this.getTrainingCategory().click();
  }

  getTrainingCategoryText(){
    return this.getTrainingCategory().getText() as Promise<string>;
  }

  getResponsibilitiesExpandable(){
    return element(by.id('responsibilities-panel'));
  }

  getResponsibilitiesContent(){
    return element(by.id('responsibilities-detail')).getText() as Promise<string>;
  }

  getCompetenciesExpandable(){
    return element(by.id('competencies-panel'));
  }

  getCompetenciesContent(){
    return element(by.id('competencies-detail')).getText() as Promise<string>;
  }

  getTrainingExpandable(){
    return element(by.id('training-panel'));
  }

  getTrainingCategory(){
    return element(by.xpath("//*[@id='training-category']"));
  }

  getTrainingContent(){
    return element(by.id('training-detail')).getText() as Promise<string>;
  }



}
