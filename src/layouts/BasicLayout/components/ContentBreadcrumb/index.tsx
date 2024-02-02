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

// import { useImmer } from 'use-immer';
import { useRouters } from '@/hooks';

const Index: React.FC = () => {
  const { asPath } = useRouters();
  // const [curPath, updateCurPath] = useImmer<Array<string>>([]);
  useEffect(() => {
    console.log(asPath);
  }, [asPath]);
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          href: '/home',
          title: '首页',
        },
        {
          href: '/email',
          title: '邮件配置',
        },
        {
          href: '/set',
          title: '全局配置',
        },
      ]}
    />
  );
};

export default Index;
