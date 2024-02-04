import type { NextApiResponse } from 'next';

const handleRes = (res: NextApiResponse) => {
  const resHTML = (data: string) => {
    res.status(200).send(data);
  };
  const resInvalid = (msg: string, error: Error) => {
    res.status(400).json({ msg, error, code: 400 });
  };
  const resSuccess = <T>(data: T) => {
    res.status(200).json({ data, code: 0 });
  };
  return { resHTML, resInvalid, resSuccess };
};

export default handleRes;
