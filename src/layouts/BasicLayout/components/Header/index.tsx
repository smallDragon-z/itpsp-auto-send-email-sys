/**
 * @description layout of header component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.prop1 - Description of prop1.
 * @param {number} props.prop2 - Description of prop2.
 *
 * @returns {JSX.Element} JSX representation of the component.
 *
 * @lastDate: 2024/1/30 15:18:34
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
import { ClassNames } from '@emotion/react';
import { Layout } from 'antd';
import React from 'react';

import styles from './index.module.css';

const { Header } = Layout;
const Index = () => {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Header
          className={cx(
            styles.header,
            css`
              height: 3rem;
              padding: 1.333rem 1.333rem 1.333rem 0;
              border-top-left-radius: 0.833rem;
              border-bottom-right-radius: 0.833rem;
              line-height: 3rem;
              background: #fff;
              color: #000;
            `
          )}
        ></Header>
      )}
    </ClassNames>
  );
};
export default Index;
