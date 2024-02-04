import { useSelector } from 'react-redux';

import type { RootState } from '@/store';

const useMenus = () => {
  const menuList = useSelector((state: RootState) => state.menuList.data);
  return menuList;
};

export default useMenus;
