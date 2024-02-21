import * as ftp from 'basic-ftp';
import day from 'dayjs';
import fs from 'fs';

import { FTP_CONFIG } from '@/pages/api/constants';
const connectFTP = async (imageBuffer: Buffer) => {
  // 将picSource上传到FTP服务器
  const client = new ftp.Client();
  client.ftp.verbose = true;
  // pic临时存储路径
  const picPath = './temp.png';
  try {
    const curDate = day().format('YYYY-MM-DD');
    await client.access(FTP_CONFIG);
    await client.cd('testFile');
    fs.writeFileSync(picPath, imageBuffer);
    const remotePath = curDate + '.png';
    await client.uploadFrom(picPath, remotePath);
    client.trackProgress((info) => console.log(info.bytesOverall));
  } catch (err) {
    console.log('err');
    console.log(err);
    await Promise.reject(err);
    client.trackProgress();
  } finally {
    client.close();
  }
};
export default connectFTP;
