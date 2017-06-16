import { TabsetDemoPage } from './app.po';

describe('tabset-demo App', () => {
  let page: TabsetDemoPage;

  beforeEach(() => {
    page = new TabsetDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
