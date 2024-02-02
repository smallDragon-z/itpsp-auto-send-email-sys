import { useRouter } from 'next/router';

export const useRouters = () => {
  const router = useRouter();
  return {
    ...router,
  };
};
