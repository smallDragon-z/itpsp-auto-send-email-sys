import '@/styles/globals.css';

import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

import LayoutCom from '@/components/LayoutCom';
import theme from '@/theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.pathname === '/login') {
    return <Component {...pageProps} />;
  }
  return (
    <ConfigProvider theme={theme}>
      <LayoutCom>
        <Component {...pageProps} />
      </LayoutCom>
    </ConfigProvider>
  );
};

export default App;
