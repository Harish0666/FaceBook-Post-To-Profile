const puppeteer = require('puppeteer');

(async()=>{
    try{
        const browser = await puppeteer.launch({
            headless:false,
            slowMo:20,
            args: ["--start-maximized"],
        })
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(1000000);
        await page.setViewport({width:2000,height:600})
        await page.goto("https://www.facebook.com");
        await page.waitForSelector("#email");
        await page.type("#email","muknomespa@biyac.com");
        await page.waitForSelector("#pass");
        await page.type("#pass","test1234");
        await page.click('[name="login"]');
        await page.waitForNavigation();
        await page.goto("https://www.facebook.com/profile.php?id=100069897517872");
        await page.waitFor(3000);
        await page.waitForSelector(".m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b");
        await page.click(".m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b");

        let sentenceList = ['wake up to the reality Nothing ever goes As planned in this accursed world',
        
        'The Longer you live the more you will realize that the only thing that truly exist is in this reality are merely pain,suffering and futility'
    ]

    for (let j = 0; j < sentenceList.length; j++) {
        let sentence = sentenceList[j];
        for (let i = 0; i < sentence.length; i++) {
          await page.keyboard.press(sentence[i]);
          if (i === sentence.length - 1) {
            await page.waitFor(2000);
            await page.keyboard.down('Control');
            await page.keyboard.press(String.fromCharCode(13)); 
            await page.keyboard.up('Control');
            await page.waitFor(4000);
  
            console.log('done');
            await page.click(".m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b");
          }
        }
      }
  
      


    }catch(error){
        console.log(error);
    }

})();