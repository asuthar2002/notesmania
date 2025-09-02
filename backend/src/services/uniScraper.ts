import puppeteer from "puppeteer";

export const uniScraper = async (urll: string): Promise<any> => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    console.log('pl')

    try {
        await page.goto('https://www.gjust.ac.in/', { waitUntil: 'domcontentloaded' });
        console.log("ok0");

        await page.waitForSelector('a.dropdown-toggle.has-submenu', { visible: true });
        const admissionLinks = await page.$$('a.dropdown-toggle.has-submenu');

        let hovered = false;
        for (const link of admissionLinks) {
            const text = await link.evaluate(el => el.textContent?.trim());
            if (text?.toLowerCase().includes("admission")) {
                await link.click();
                // await page.waitForTimeout(1000); // Wait for submenu to appear
                hovered = true;
                break;
            }
        }

        if (!hovered) throw new Error("Admission menu not found");


        console.log("ok1");

        await page.waitForSelector('a[href="/Page/Index_ProgramAdmission/Admission%202025-26/3369"]', { visible: true });
        await page.click('a[href="/Page/Index_ProgramAdmission/Admission%202025-26/3369"]');
        console.log("ok2");

        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("ok3");

        await page.waitForSelector('#bk_877', { visible: true });
        console.log("ok4");

        const pageTarget = page.target(); // Get current tab
        await page.click('#bk_877');

        // Wait for new tab to open
        const newTarget = await browser.waitForTarget(target => target.opener() === pageTarget);
        const admissionPage: any = await newTarget.page();

        await admissionPage.bringToFront();
        await admissionPage.waitForLoadState?.('domcontentloaded'); // if using playwright-style fallback
        await admissionPage.waitForNavigation({ waitUntil: 'networkidle2' });

        console.log("ok5");

        await admissionPage.bringToFront();
        await admissionPage.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("ok6");

        await admissionPage.waitForSelector('a[href*="Index_notification"]', { visible: true });

        const [notificationPage]: any = await Promise.all([
            new Promise(resolve => browser.once('targetcreated', async target => resolve(await target.page()))),
            admissionPage.click('a[href*="Index_notification"]')
        ]);

        console.log("ok7");

        await notificationPage.waitForNavigation({ waitUntil: 'networkidle2' });

        const data = await notificationPage.evaluate(() => {
            const rows = Array.from(document.querySelectorAll('tbody.tabledata tr'));
            return rows.map(row => {
                const cols = row.querySelectorAll('td');
                return {
                    title: cols[0]?.innerText.trim(),
                    link: cols[0]?.querySelector('a')?.href || null,
                    date: cols[1]?.innerText.trim(),
                };
            });
        });

        await browser.close();
        return { success: true, data };

    } catch (error) {
        console.error("Scraping failed:", error);
        await browser.close();
        return { success: false, error: "message" };
    }
};
