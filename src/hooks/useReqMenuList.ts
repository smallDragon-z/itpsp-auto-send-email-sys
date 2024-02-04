import { useRequest } from 'ahooks';
import { get } from 'lodash';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateMenuList } from '@/features/menuList/menuListSlice';
import { reqMenuList } from '@/services/menu/reqMenuList';

const useReqMenuList = () => {
  const { data } = useRequest(reqMenuList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMenuList(get(data, 'data', [])));
  }, [data, dispatch]);
};

export default useReqMenuList;
