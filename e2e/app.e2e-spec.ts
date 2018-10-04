import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('github-user-search App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display movie finder screen', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movies Finder');
  });

  it('should except search keywords',()=>{
  		
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
   		page.selectMoviefromList();
   		
   		page.clickonMovieviewDetails();
   		browser.sleep(2000);

   		browser.switchTo().activeElement();

   		expect(page.getMovie1Title()).toEqual('Title: Dilwale Dulhania Le Jayenge');

   		
   		page.getMovie1Releasedat();
   		page.clickOnclose();
   		browser.sleep(2000);

   		//-----------------------------
   		page.clearSearchkeyword1();
   		page.getMovieinfo2_enterKeyword();
   		browser.sleep(3000);
   		page.selectMoviefromList();
   		page.clickonMovieviewDetails();
   		browser.sleep(2000);



   		browser.switchTo().activeElement();

   		page.getMovie1Title();

   		page.getMovie1Releasedat();
   		page.clickOnclose();
   		browser.sleep(2000);
//----------------------------------------------------

		page.clearSearchkeyword1();
   		page.getMovieinfo3_enterKeyword();
   		browser.sleep(3000);
   		page.selectMoviefromList();
   		page.clickonMovieviewDetails();
   		browser.sleep(2000);



   		browser.switchTo().activeElement();

   		page.getMovie1Title();

   		page.getMovie1Releasedat();
   		page.clickOnclose();
   		browser.sleep(2000);

  });

});
