import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create the app', () => {
    page.navigateTo();
    expect(page).toBeTruthy();
  });

  it('form should be valid', () => {
    page.getTitleText
    page.getFirstSquareTextbox().sendKeys('1');
    page.getSecondSquareTextbox().sendKeys('4');
    page.getThirdSquareTextbox().sendKeys('2');
    page.getFourthSquareTextbox().sendKeys('3');
    page.getFifthSquareTextbox().sendKeys('8');    
    page.getSixthSquareTextbox().sendKeys('8');
    let form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
   });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
