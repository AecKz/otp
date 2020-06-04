import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getForm() {
    return element(by.id('otpForm'));
   }

   getFirstSquareTextbox(){
    return element(by.id('square1'));
   }
   getSecondSquareTextbox(){
    return element(by.id('square2'));
   }
   getThirdSquareTextbox(){
    return element(by.id('square3'));
   }
   getFourthSquareTextbox(){
    return element(by.id('square4'));
   }
   getFifthSquareTextbox(){
    return element(by.id('square5'));
   }
   getSixthSquareTextbox(){
    return element(by.id('square6'));
   }
}
