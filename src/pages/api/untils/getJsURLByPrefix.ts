/*
 * 根据前缀类型获取js文件下载路径
 * */
import { DOUBLE_SLASH_REG, URL_REG } from '@/pages/api/constants';

const jsDownloadAddress = (curUrl: string, sourceURL: string) => {
  // 如果是完整的url，直接返回
  if (URL_REG.test(curUrl)) {
    return curUrl;
  }
  // 如果是以双斜杠开头的url，加上https:
  if (DOUBLE_SLASH_REG.test(curUrl)) {
    return `https:${curUrl}`;
  }
  // 如果是以单斜杠开头的url，加上源地址
  if (curUrl.startsWith('/')) {
    return sourceURL + curUrl;
  }
  // 如果开头没有斜杠，直接加上源地址
  return sourceURL + '/' + curUrl;
};
export default jsDownloadAddress;
