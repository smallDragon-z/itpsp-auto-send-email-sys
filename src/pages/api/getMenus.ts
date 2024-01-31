import type { NextApiRequest, NextApiResponse } from 'next';

import handleRes from '@/pages/api/untils/handleRes';

export default async function getWebPageContent(req: NextApiRequest, res: NextApiResponse) {
  const { resSuccess } = handleRes(res);
  resSuccess({ msg: 'Hello World' });
}

export const config = {
  api: {
    responseLimit: false,
  },
};
