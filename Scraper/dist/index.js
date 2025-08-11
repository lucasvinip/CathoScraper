"use strict";
const puppeteer = require('puppeteer');
const url = 'http://localhost:5173';
async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });
    //args: ['--start-maximized']
    const page = await browser.newPage();
    await page.goto(url);
    const boxJobs = await page.$$('.box-jobs');
    const desireJobTitle = ['DESENVOLVEDOR JUNIOR', 'ESTAGIÁRIO DE TI'];
    const desireCities = ['Barueri - SP', 'Jandira - SP', 'Carapicuíba - SP', 'Osasco - SP', 'Itapevi - SP'];
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    for (const job of boxJobs) {
        const title = await job.$eval('.title h1', (el) => { var _a; return ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''; });
        const city = await job.$eval('.moreAbout div span span', (el) => { var _a; return ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''; });
        const matchTitle = desireJobTitle.includes(title);
        const matchCity = desireCities.includes(city);
        if (matchTitle && matchCity) {
            const botao = await job.$('.sendApplication button');
            if (botao) {
                await botao.click();
                await delay(500);
            }
        }
    }
    await delay(10000);
    await browser.close();
}
main();
//# sourceMappingURL=index.js.map