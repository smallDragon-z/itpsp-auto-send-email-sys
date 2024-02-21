import { useRequest } from 'ahooks';
import { get } from 'lodash';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MenuListState, updateMenuList } from '@/features/menuList/menuListSlice';
import { reqMenuList } from '@/services/menu/reqMenuList';

const useReqMenuList = () => {
  const { data } = useRequest(reqMenuList);
  const dispatch = useDispatch();

  const triggerUpdateMenuListAction = useCallback(
    (data: MenuListState[]) => {
      data && dispatch(updateMenuList(get(data, 'data', [])));
    },
    [dispatch]
  );

  useEffect(() => {
    // 在每次渲染时，重新调用 triggerUpdateMenuListAction
    if (data) {
      triggerUpdateMenuListAction(data as MenuListState[]);
    }
  }, [data, triggerUpdateMenuListAction]);

  // 返回 triggerUpdateMenuListAction，以便在组件中使用
  return triggerUpdateMenuListAction;
};

export default useReqMenuList;
