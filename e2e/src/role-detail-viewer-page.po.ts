import { browser, by, element } from 'protractor';

export class RoleDetailViewerPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/detail-viewer/role/1') as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath("//*[@id='role-name']")).getText() as Promise<string>;
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

  getTrainingExpandable(){
    return element(by.xpath("//*[@id='training-panel']"));
  }

  getTrainingCategory(){
    return element(by.xpath("//*[@id='training-category']"));
  }

  getTrainingContent(){
    return element(by.xpath("//*[@id='role-training-detail']")).getText() as Promise<string>;
  }



}
