const puppeteer = require('puppeteer');

async function run() {

const auth =Buffer.from(`user:pass`).toString('base64');

let browser = await puppeteer.launch({ headless: true });
let page = await browser.newPage();

await page.setExtraHTTPHeaders({
    'Authorization': `Basic ${auth}`
});

await page.setViewport({ width: 1920, height: 1080 });
await page.goto('www.example.com');
await page.waitFor(5000);

let element =  await page.$('#panel-6');

await element.screenshot({path: 'screenshot.png'});

await page.close();
await browser.close();

}

run();