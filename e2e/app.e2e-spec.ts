import { BottleShopPage } from './app.po';

describe('bottle-shop App', function() {
  let page: BottleShopPage;

  beforeEach(() => {
    page = new BottleShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
