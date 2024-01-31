/**
 * @description FunctionComponent description.
 *
 * @param {Object} props - The props object.
 * @param {string} props.prop1 - Description of prop1.
 * @param {number} props.prop2 - Description of prop2.
 *
 * @returns {JSX.Element} JSX representation of the component.
 *
 * @lastDate: 2024/1/30 14:47:57
 * @author: 张晓龙
 * @lastEditors: 张晓龙
 */
import React from 'react';

import styles from './index.module.css';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
