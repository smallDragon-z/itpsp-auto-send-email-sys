import * as ftp from 'basic-ftp';
import day from 'dayjs';
import { Readable } from 'stream';
const FTP_CONFIG = {
  host: '192.168.100.17',
  port: 21,
  user: 'zhangxiaolong',
  password: '6231977891',
  secure: false, // 设置为true，如果使用FTPS
};

const connectFTP = async (imageBuffer: Buffer) => {
  // 将picSource上传到FTP服务器
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    const curDate = day().format('YYYY-MM-DD');
    // const img = sharp(imageBuffer).toFormat('png');
    const ImageReadableStream = Readable.from(imageBuffer);
    await client.access(FTP_CONFIG);
    await client.cd('testFile');
    const remotePath = curDate + '_image.png';
    // await client.uploadFrom(remotePath, remotePath);
    await client.uploadFrom(ImageReadableStream, remotePath);
    // client.trackProgress((info) => {
    //   console.log('info');
    //   console.log(info);
    // });
  } catch (err) {
    await Promise.reject(err);
  } finally {
    client.close();
  }
};
export default connectFTP;
