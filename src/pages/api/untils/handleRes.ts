import type { NextApiResponse } from 'next';

const handleRes = (res: NextApiResponse) => {
  const resHTML = (data: string) => {
    res.status(200).send(data);
  };
  const resInvalid = (msg: string) => {
    res.status(400).json({ msg, code: 400 });
  };
  return { resHTML, resInvalid };
};

export default handleRes;
