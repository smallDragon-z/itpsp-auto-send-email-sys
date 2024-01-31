/**
 * @description FunctionComponent description.
 *
 * @param {Object} props - The props object.
 * @param {string} props.prop1 - Description of prop1.
 * @param {number} props.prop2 - Description of prop2.
 *
 * @returns {JSX.Element} JSX representation of the component.
 *
 * @lastDate: 2024/1/30 16:33:34
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
import { ClassNames } from '@emotion/react';
import { Layout } from 'antd';
import React, { FC } from 'react';

const { Content } = Layout;
interface ILayoutContentProps {
  children?: React.ReactNode;
}
const Index: FC<ILayoutContentProps> = (props) => {
  const { children } = props;
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Content
          className={cx(css`
            height: calc(100vh - 3rem);
          `)}
        >
          {children}
        </Content>
      )}
    </ClassNames>
  );
};

export default Index;
