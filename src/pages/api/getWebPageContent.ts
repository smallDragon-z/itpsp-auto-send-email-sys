import axios from 'axios';
import * as cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

import { URL_REG } from '@/pages/api/constants';
import jsDownloadAddress from '@/pages/api/untils/getJsURLByPrefix';
import handleRes from '@/pages/api/untils/handleRes';
import fetchJsFile from '@/pages/api/untils/reqJsFile';

type IJsCodeSource = { code: string; index: number }[];
type IjsFiles = { codeSrc: string; index: number }[];
export default async function getWebPageContent(req: NextApiRequest, res: NextApiResponse) {
  const headJsCodeSource: IJsCodeSource = [];
  const bodyJsCodeSource: IJsCodeSource = [];
  const headJsFiles: IjsFiles = [];
  const bodyJsFiles: IjsFiles = [];
  const { resInvalid, resHTML } = handleRes(res);
  const { url } = req.query as { url: string };
  const urlReg = URL_REG;
  // 判断url是否合法
  // 如果不合法，返回错误信息
  if (url === undefined || !urlReg.test(url)) {
    resInvalid('url为空或不合法');
    return;
  }
  // 获取url的基础路径
  const baseUrl = new URL(url).origin;
  // 发送请求，获取页面内容
  try {
    axios
      .get(url)
      .then(async (response) => {
        // 使用cheerio解析HTML
        const $ = cheerio.load(response.data);
        // 获取html head中的script
        const $headScripts = $('head>script');
        // 获取html body中的script
        const $bodyScripts = $('body>script');
        // 整理head中的script
        for (let i = 0; i < $headScripts.length; i++) {
          if ($headScripts[i].attribs.src) {
            headJsFiles.push({
              codeSrc: $headScripts[i].attribs.src,
              index: i,
            });
          } else {
            if (($headScripts[i]?.children[0] as { data: string })?.data) {
              headJsCodeSource.push({
                code: ($headScripts[i]?.children[0] as { data: string })?.data,
                index: i,
              });
            }
          }
        }
        // 整理body中的script
        for (let i = 0; i < $bodyScripts.length; i++) {
          if ($bodyScripts[i].attribs.src) {
            bodyJsFiles.push({
              codeSrc: $bodyScripts[i].attribs.src,
              index: i,
            });
          } else {
            if (($bodyScripts[i]?.children[0] as { data: string })?.data) {
              bodyJsCodeSource.push({
                code: ($bodyScripts[i]?.children[0] as { data: string })?.data,
                index: i,
              });
            }
          }
        }
        // 遍历head中的script，按顺序请求js文件的内容保存到headJsSource中
        for (const headScript of headJsFiles) {
          const jsUrl = jsDownloadAddress(headScript.codeSrc, baseUrl);
          const jsCode = await fetchJsFile(jsUrl);
          headJsCodeSource.push({
            code: `${jsCode}`,
            index: headScript.index,
          });
        }
        // 遍历body中的script，按请求js文件的内容保存到bodyJsSource中
        for (const bodyScript of bodyJsFiles) {
          const jsUrl = jsDownloadAddress(bodyScript.codeSrc, baseUrl);
          const jsCode = await fetchJsFile(jsUrl);
          bodyJsCodeSource.push({
            code: `${jsCode}`,
            index: bodyScript.index,
          });
        }

        // 遍历body中的script元素，按照jsCodeSource中的顺序替换script元素的内容
        $bodyScripts.each((index, element) => {
          if (bodyJsCodeSource[index]) {
            // 移除当前script元素的src属性,并将jsCodeSource中的js代码替换到当前script元素中
            $(element).removeAttr('src').text(bodyJsCodeSource[index].code);
          }
        });

        // 遍历head中的script元素，按照jsCodeSource中的顺序替换script元素的内容
        $headScripts.each((index, element) => {
          if (headJsCodeSource[index]) {
            // 移除当前script元素的src属性，并将jsCodeSource中的js代码替换到当前script元素中
            // 如果代码中存在</script>，则会导致代码被截断，所以需要将</script>替换为<\/script>
            if (headJsCodeSource[index].code.includes('</script>')) {
              headJsCodeSource[index].code = headJsCodeSource[index].code.replace(
                /<\/script>/g,
                '&lt;' + '/script' + '&gt;'
              );
            }
            // $(element).removeAttr('src').text(headJsCodeSource[index].code);
            $(element).remove();
            // 创建script元素
            const scriptElement = `<script>${headJsCodeSource[index].code}</script>`;
            // 将script元素插入到body元素中
            $('body').append(scriptElement);
          }
        });

        resHTML($.html());
      })
      .catch((error) => {
        console.log(error);
        resInvalid(error.message);
      });
  } catch (e) {
    resInvalid(`Error creating ${(e as Error).message}`);
  }
}
