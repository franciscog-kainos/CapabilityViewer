import { browser, by, element } from 'protractor';
import {delay} from 'rxjs/operators';

export class DetailViewerRole {
    navigateTo() {
        return browser.get(browser.baseUrl += 'detail-viewer/role/1') as Promise<any>;
    }
    getTitle() {
        return element(by.xpath('//detail-viewer/div/div/mat-card')).getText() as Promise<string>;
    }
    getJobSummaryText() {
        element(by.xpath('//*[@id="mat-expansion-panel-header-0"]/span[1]/mat-panel-title')).click();
        delay(2000);
        return  element(by.xpath('//div/div[@class="mat-expansion-panel-body"]/p[contains(text(), \'Owns\')]')).getText() as Promise<string>;
    }
    navigateBack() {
        element(by.xpath('//*[@id=\'back-button\']')).click();
    }
}
