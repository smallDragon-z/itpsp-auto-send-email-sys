import type { NextApiRequest, NextApiResponse } from 'next';

import handleRes from '@/pages/api/untils/handleRes';

export default async function getMenuList(req: NextApiRequest, res: NextApiResponse) {
  const { resSuccess } = handleRes(res);
  resSuccess({
    data: [
      {
        key: '/home',
        label: '首页',
      },
      {
        key: '/email',
        label: '邮件配置',
      },
      {
        key: '/set',
        label: '全局配置',
      },
    ],
  });
}

export const config = {
  api: {
    responseLimit: false,
  },
};
