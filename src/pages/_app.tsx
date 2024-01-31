import '@/styles/globals.css';

import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';
import theme from '@/theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.pathname === '/login') {
    return <Component {...pageProps} />;
  }
  return (
    <ConfigProvider theme={theme}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ConfigProvider>
  );
};

export default App;
