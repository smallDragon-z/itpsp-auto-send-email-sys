import asyncHttp from '@/services/asyncHttp';

const reqMenuList = async () => {
  const res = await asyncHttp({ url: 'getMenuList', method: 'GET' });
  return res;
};
export { reqMenuList };
