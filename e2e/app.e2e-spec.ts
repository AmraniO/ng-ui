import { NgUiPage } from './app.po';

describe('ng-ui App', () => {
  let page: NgUiPage;

  beforeEach(() => {
    page = new NgUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
