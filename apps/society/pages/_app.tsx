import {AppProps} from 'next/app';
import Head from 'next/head';

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>社会科</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
