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

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    for (const job of boxJobs) {
        const title = await job.$eval('.title h1', (el: HTMLElement) => el.textContent?.trim() || '');
        const city = await job.$eval('.moreAbout div span span', (el: HTMLElement) => el.textContent?.trim() || '');

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

// teste com outros looping, aprenzidado

////////////////////////FOR////////////////////////////////
// for (let i = 0; i < boxJobs.length; i++) {
    //     const job: ElementHandle = boxJobs[i];
    //     console.log(i);

    //     const title: string = await job.$eval('.title h1', (el: HTMLElement) => el.textContent?.trim() || '');
    //     const city: string = await job.$eval('.moreAbout div span span', (el: HTMLElement) => el.textContent?.trim() || '');

    //     const matchTitle = desireJobTitle.includes(title);
    //     const matchCity = desireCities.includes(city);

    //     if (matchTitle && matchCity) {
    //         const botao = await job.$('.sendApplication button');
    //         if (botao) {
    //             await botao.click();
    //             await delay(700);
    //         }
    //     }
    // }
////////////////////////FOR////////////////////////////////

////////////////////////WHILE////////////////////////////////
    // let i = 0;
    // while (i < boxJobs.length) {
    //     const job: ElementHandle = boxJobs[i];

    //     const title: string = await job.$eval('.title h1', (el: HTMLElement) => el.textContent?.trim() || '');
    //     const city: string = await job.$eval('.moreAbout div span span', (el: HTMLElement) => el.textContent?.trim() || '');

    //     const matchTitle = desireJobTitle.includes(title);
    //     const matchCity = desireCities.includes(city);

    //     if (matchTitle && matchCity) {
    //         const botao = await job.$('.sendApplication button');
    //         if (botao) {
    //             await botao.click();
    //             await delay(700);
    //         }
    //     }
    //     i++;
    // }
////////////////////////WHILE////////////////////////////////
