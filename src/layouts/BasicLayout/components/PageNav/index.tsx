import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Router from 'next/router';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import { useMenus, useReqMenuList } from '@/hooks';

const Index: React.FC = () => {
  const router = useRouter();
  const curPath = useRef<Array<string>>([router.pathname]);
  const menuList = useMenus();
  useReqMenuList();
  const onClick: MenuProps['onClick'] = (e) => {
    curPath.current = [e.key];
    Router.push(`${e.key}`);
  };

  return <Menu onClick={onClick} selectedKeys={curPath.current} mode="inline" items={menuList} />;
};

export default Index;
