import Link from 'next/link';
import { FC } from 'react';

import styles from './index.module.css';
const NotFoundPage: FC = () => {
  return (
    <>
      <h1>404 Error Page #3</h1>
      <p className={styles['zoom-area']}>
        <b>404</b> NOT FOUND
      </p>
      <section className={styles['error-container']}>
        <span>4</span>
        <span>
          <span className={styles['screen-reader-text']}>0</span>
        </span>
        <span>4</span>
      </section>
      <div className={styles['link-container']}>
        <Link href="/home" className="more-link">
          GO BACK HOME
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
