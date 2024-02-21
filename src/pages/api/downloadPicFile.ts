import * as ftp from 'basic-ftp';
import day from 'dayjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { FTP_CONFIG } from '@/pages/api/constants';
import handleRes from '@/pages/api/untils/handleRes';
const connectFTP = async () => {
  // 将picSource上传到FTP服务器
  const client = new ftp.Client();
  client.ftp.verbose = true;
  // pic临时存储路径
  try {
    const curDate = day().format('YYYY-MM-DD');
    await client.access(FTP_CONFIG);
    await client.cd('testFile');
    const remotePath = curDate + '.png';
    // 将ftp中的文件下载到本地
    const localPath = path.resolve('/imgs');
    console.log('localPath');
    console.log(localPath);
    await client.downloadTo('F:/imgs/image.png', remotePath);
  } catch (err) {
    await Promise.reject(err);
  } finally {
    client.close();
  }
};
export default async function downloadPicFile(req: NextApiRequest, res: NextApiResponse) {
  // const { picName } = req.query;
  const { resSuccess, resInvalid } = handleRes(res);
  try {
    // 如果存在picName，则通过picName下载FTP服务器中对应的文件
    // 如果不存在picName，则下载FTP服务器中的最新的文件
    await connectFTP();
    resSuccess({ msg: 'success' });
  } catch (error) {
    resInvalid('error', error as Error);
  }
}
