const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
const UserAgent = require ('user-agents');



puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin());



    (async () => {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--proxy-server=socks4://']
        });
        const page = await browser.newPage();
        const userAgent = new UserAgent();
        await page.setUserAgent(userAgent.toString())
        // await page.authenticate({ username: '' , password:'' });
        await page.goto('https://bot.sannysoft.com/');

        await page.waitForTimeout(3000)

        await page.screenshot({ path: 'example2.png' });

        // await browser.close();
    })();