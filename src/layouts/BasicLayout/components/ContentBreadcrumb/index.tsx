/**
 * @description FunctionComponent description.
 *
 * @returns {JSX.Element} JSX representation of the component.
 *
 * @lastDate: 2024/2/1 14:47:20
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
import { Breadcrumb } from 'antd';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

// import { useImmer } from 'use-immer';
import { useMenus, useRouters } from '@/hooks';

const Index: React.FC = () => {
  const { asPath } = useRouters();
  const menuList = useMenus();

  const [curPath, updateCurPath] = useImmer<
    Array<{
      href: string;
      title: string;
    }>
  >([]);
  useEffect(() => {
    // 将当前路径存入数组，
    const pathArr = asPath.split('/').filter((item) => item);
    // 根据pathArr数组和menuList数组，生成菜单项
    // 1.遍历pathArr数组
    // 2.遍历menuList数组
    // 3.生成一个新数组，如果pathArr数组的元素和menuList数组的元素相等，则生成新的数组项
    for (let i = 0; i < pathArr.length; i++) {
      if (menuList.find((item) => item.key === '/' + pathArr[i])) {
        updateCurPath((draft) => {
          draft.push({
            title: pathArr[i],
            href: '/' + pathArr[i],
          });
        });
      }
    }
    return () => {
      updateCurPath((draft) => {
        // 清空draft数组
        draft.splice(0, draft.length);
      });
    };
  }, [asPath, menuList, updateCurPath]);
  return <Breadcrumb separator=">" items={curPath} />;
};

export default Index;
