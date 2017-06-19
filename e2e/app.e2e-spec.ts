import { Ang2MyAppPage } from './app.po';

describe('ang2-my-app App', () => {
  let page: Ang2MyAppPage;

  beforeEach(() => {
    page = new Ang2MyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
