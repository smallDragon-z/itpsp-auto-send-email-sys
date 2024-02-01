import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import puppeteer from 'puppeteer-core';

import handleRes from '@/pages/api/untils/handleRes';

export default async function getPagePic(req: NextApiRequest, res: NextApiResponse) {
  const { resSuccess } = handleRes(res);
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    executablePath: path.resolve(process.cwd(), 'chrome.exe'),
    defaultViewport: {
      width: 1600,
      height: 937,
    },
  });
  const page = await browser.newPage();
  await page.goto('https://www.jianshu.com');
  const picSource = await page.screenshot({ fullPage: true });
  console.log(picSource);
  await browser.close();

  resSuccess({ msg: 'Hello World' });
}

export const config = {
  api: {
    responseLimit: false,
  },
};
