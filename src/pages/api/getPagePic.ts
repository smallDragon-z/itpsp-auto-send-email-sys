import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import puppeteer from 'puppeteer-core';

import connectFTP from '@/pages/api/ftp/connect';
import handleRes from '@/pages/api/untils/handleRes';
const CHROME_PATH = process.env.CHROME_PATH!;

export default async function getPagePic(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  const { resSuccess } = handleRes(res);
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    executablePath: path.resolve(CHROME_PATH),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // defaultViewport: {
    //   width: 1600,
    //   height: 937,
    // },
  });
  const page = await browser.newPage();
  await page.goto(url as string);
  const screenshotBuffer = await page.screenshot({ fullPage: true });
  // 将picSource转为文件流保存到FTP服务器
  await connectFTP(screenshotBuffer);
  await browser.close();

  resSuccess({ msg: 'success' });
}
