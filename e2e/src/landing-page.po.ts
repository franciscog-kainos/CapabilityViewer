import { browser, by, element } from 'protractor';

export class LandingPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('mat-card-title')).getText() as Promise<string>;
  }

  clickTableNavigation(){
    this.getNavigationButton().click();
  }

  getNavigationButton(){
    return element(by.id("landing-page-nav-button"));
  }
}
