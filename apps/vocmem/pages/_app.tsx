import {AppProps} from 'next/app';
import Head from 'next/head';
import {GoogleAnalytics, usePageView} from "@vocmem/ui";

function CustomApp({Component, pageProps}: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <title>語学学習アプリ</title>
      </Head>
      <GoogleAnalytics/>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
