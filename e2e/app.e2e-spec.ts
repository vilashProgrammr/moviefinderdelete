import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('github-user-search App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('TestCase 1|It should display movie finder screen|0', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movies Finder');
  });

  it('TestCase 2|It should launch autocomplete|10',()=>{
        
        page.getSearchkeyword1();
        browser.sleep(2000);
        page.clearSearchkeyword1();
        
        page.getSearchKeyword2();
        browser.sleep(1000);
        page.clearSearchkeyword1();
        page.getSearchkeyword3();
        browser.sleep(1000);
        page.clearSearchkeyword1();

        page.getMovieinfo_enterKeyword();
        browser.sleep(2000);
    
           expect(page.getMatElement().isPresent()).toBeTruthy();
    


  });

});
