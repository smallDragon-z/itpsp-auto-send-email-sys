/**
 * @description layout的左侧边栏组件
 * @param {Boolean} isCollapsed - 是否折叠
 *
 * @returns {JSX.Element} JSX representation of the component.
 *
 * @lastDate: 2024/1/30 16:29:42
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ClassNames } from '@emotion/react';
import { Button, SiderProps } from 'antd';
import { Layout } from 'antd';
import React, { FC, useState } from 'react';

import PageNav from '@/layouts/BasicLayout/components/PageNav';

const { Sider } = Layout;
interface IHeaderProps extends SiderProps {
  isCollapsed?: boolean;
}

const Index: FC<IHeaderProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggle = () => setCollapsed(!collapsed);
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Sider
          className={cx(css`
            height: 100%;
            overflow: auto;
            //    修改滚动条样式
            &::-webkit-scrollbar {
              width: 0;
            }
          `)}
          theme={'light'}
          trigger={null}
          collapsible
          collapsed={collapsed}
          {...props}
        >
          <div
            className={cx(css`
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `)}
          >
            <PageNav />
            <div
              className={cx(css`
                display: flex;
                padding: 0 1rem;
                width: 100%;
                justify-content: flex-end;
              `)}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={handleToggle}
              />
            </div>
          </div>
        </Sider>
      )}
    </ClassNames>
  );
};

export default Index;
