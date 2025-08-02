const puppeteer = require('puppeteer');

const url = 'http://localhost:5173';

// const main = async () =>{

// }

async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
     //args: ['--start-maximized']

    const page = await browser.newPage();
    await page.goto(url);

    console.log('antes do evaluate');

    await page.evaluate(async () => {
        const distance = 100;
        let scrolledAmount = 0;

        return new Promise<void>(resolve => {
            const timer = setInterval(() => {
                window.scrollBy(0, distance);
                scrolledAmount += distance;

                if (scrolledAmount >= document.body.scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        })
    });
    console.log('depois do evaluate');
    
    // const element = await page.waitForSelector('div > .sendApplication > button');
    // if (element) {
    //     const text = await element.evaluate((el: HTMLButtonElement) => el.textContent, element);
    //     console.log('encontrado', text);

    // }

}

main();
