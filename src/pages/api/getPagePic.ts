import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import puppeteer from 'puppeteer-core';

import handleRes from '@/pages/api/untils/handleRes';

export default async function getPagePic(req: NextApiRequest, res: NextApiResponse) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    executablePath: path.resolve(process.cwd(), 'chrome.exe'),
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector('text/Customize and automate');
  const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
  const { resSuccess } = handleRes(res);
  resSuccess({ msg: 'Hello World' });
}

export const config = {
  api: {
    responseLimit: false,
  },
};
