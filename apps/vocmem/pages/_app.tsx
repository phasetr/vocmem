import {AppProps} from 'next/app';
import Head from 'next/head';
import {GoogleAnalytics, usePageView} from "@vocmem/ui";

function CustomApp({Component, pageProps}: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <title>単語暗記アプリ</title>
      </Head>
      <GoogleAnalytics/>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
