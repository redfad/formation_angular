import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async() => {
    page = new AppPage();
    await browser.waitForAngularEnabled(true);

    await browser.get('/home');

    await browser.driver.manage().window().maximize();
  });



// Cas 1
it('should display welcome message', async () => {
  await page.navigateTo();
  expect(await page.getTitleText()).toEqual('Formation Angular');
});

// Cas 2
it('should add values to the ngForm', async () => {

  await browser.get('/template-form');

  await page
  .sendKeysToInputFirstNameByName('Wick');

  await page
  .sendKeysToInputLastNameByName('John');

  await page.clickOnSaveBtn();

  expect(await page.getTextContentByIndex(0))
  .toContain('Wick John');

  expect(await page.checkAllInserts())
  .toBeGreaterThan(0);

  expect(await page.checkAllInserts())
  .toBe(1);

  await browser.sleep(6000);

});

// Cas 3
it('should add and delete values to the ngForm', async () => {

  await browser.get('/template-form');

  await page
  .sendKeysToInputFirstNameByName('Wick');

  await page
  .sendKeysToInputLastNameByName('John');

  await page.clickOnSaveBtn();

  await page
  .sendKeysToInputFirstNameByName('Baton');

  await page
  .sendKeysToInputLastNameByName('Jean');

  await page.clickOnSaveBtn();

  expect(await page.getTextContentByIndex(0))
  .toContain('Wick John');

  expect(await page.getTextContentByIndex(1))
  .toContain('Baton Jean');

  expect(await page.checkAllInserts())
  .toBe(2);

  await page.clickOnDeleteBtn(1);

  await page.clickOnDeleteBtn(0);

});

});
