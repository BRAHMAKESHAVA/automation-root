export class SecurePage {
  constructor(page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
    this.logoutBtn = 'a[href="/logout"]';
  }

  async logout() {
    await this.page.click(this.logoutBtn);
  }

  getMessage() {
    return this.flashMessage;
  }
}
