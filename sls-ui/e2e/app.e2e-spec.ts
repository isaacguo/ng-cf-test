import { SlsUiPage } from './app.po';

describe('sls-ui App', () => {
  let page: SlsUiPage;

  beforeEach(() => {
    page = new SlsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
