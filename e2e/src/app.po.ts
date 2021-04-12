import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('.navbar-brand')).getText();
  }

  // La fonction element() est utilisée pour localiser un seul élément.

  // si vous recherchez plusieurs éléments vous devez utiliser
  // la fonction element.all().

  // l'élément prend un paramètre, un localisateur, qui décrit
  // comment trouver l'élément.

  // By est une collection de stratégies de localisation d'éléments

  async sendKeysToInputFirstNameByName(text: string) {
    return await element(by.name('nom')).sendKeys(text);
  }

  async sendKeysToInputLastNameByName(text: string) {
    return await element(by.name('prenom')).sendKeys(text);
  }

  async clickOnSaveBtn() {
   return await element(by.buttonText('Ajouter')).click();
  }

  async checkAllInserts() {
    let a = await element.all(by.css('.list-group li span'))
    .count();
    return a;
  }

  async getTextContentByIndex(spanIndex: number) {
    let list = element.all(by.css('.list-group li span'));
    return list.get(spanIndex).getText();
  }

  async clickOnDeleteBtn(btnIndex: number) {
    let list = element.all(by.css('.list-group li button'));
    return list.get(btnIndex).click();
  }

}
