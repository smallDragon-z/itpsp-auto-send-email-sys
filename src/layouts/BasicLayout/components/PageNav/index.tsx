import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Router from 'next/router';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('首页', '/home', <AppstoreOutlined />),
  getItem('邮件配置', '/email', <MailOutlined />),
  getItem('全局配置', '/set', <SettingOutlined />),
];

const Index: React.FC = () => {
  const router = useRouter();
  const curPath = useRef<Array<string>>([router.pathname]);
  const onClick: MenuProps['onClick'] = (e) => {
    curPath.current = [e.key];
    Router.push(`${e.key}`);
  };

  return <Menu onClick={onClick} selectedKeys={curPath.current} mode="inline" items={items} />;
};

export default Index;
