import '@/styles/globals.css';

import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import React from 'react';

import theme from '@/theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
