import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('github-user-search App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('TestCase 1|should display movie finder screen|5', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movies Finder');
  });

  it('TestCase 2|should except search keywords|5',()=>{
  		
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

   		expect(page.getMovie1Title()).toEqual('Title: Dil Chahta Hai').then()
   		
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
