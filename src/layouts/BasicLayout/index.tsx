/**
 * @description FunctionComponent description.
 *
 * @param {Object} props - The props object.
 * @param {string} props.prop1 - Description of prop1.
 * @param {number} props.prop2 - Description of prop2.
 *
 * @returns {JSX.Element} JSX representation of the component.
 *
 * @lastDate: 2024/1/30 15:13:53
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
/**
 * @description FunctionComponent description.
 * @lastDate: 2024/1/30 14:47:57
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
import { ClassNames } from '@emotion/react';
import { Layout } from 'antd';
import React, { FC } from 'react';

import Content from '@/layouts/BasicLayout/components/Content';
import ContentBreadcrumb from '@/layouts/BasicLayout/components/ContentBreadcrumb';
import Header from '@/layouts/BasicLayout/components/Header';
import Sider from '@/layouts/BasicLayout/components/Sider';
import StyledLayout from '@/layouts/StyledLayout';

import styles from './index.module.css';

interface IBasicLayoutProps {
  children?: React.ReactNode;
}
const BasicLayout: FC<IBasicLayoutProps> = (props) => {
  const { children } = props;
  return (
    <StyledLayout>
      <ClassNames>
        {({ cx }) => (
          <Layout className={cx(styles.layout)}>
            <Header />
            <Layout>
              <Sider />
              <Content>
                <div>
                  <ContentBreadcrumb />
                </div>
                {children}
              </Content>
            </Layout>
          </Layout>
        )}
      </ClassNames>
    </StyledLayout>
  );
};

export default BasicLayout;
