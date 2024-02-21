const URL_REG = new RegExp(
  "^(http|https|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9-._?,'/\\+&amp;%$#=~])*$"
);

const DOUBLE_SLASH_REG = /^\/\//; // 匹配以双斜杠开头
const SINGLE_SLASH_REG = /^\//; // 匹配以单斜杠开头
export {
  /*
   * URL的正则表达式
   * */
  URL_REG,
  /*
   * 匹配以双斜杠开头
   * */
  DOUBLE_SLASH_REG,
  /*
   * 匹配以单斜杠开头
   * */
  SINGLE_SLASH_REG,
};
export const FTP_CONFIG = {
  host: '192.168.100.17',
  port: 21,
  user: 'zhangxiaolong',
  password: '6231977891',
  secure: false, // 设置为true，如果使用FTPS
};
