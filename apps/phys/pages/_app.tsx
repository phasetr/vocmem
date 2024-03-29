import {AppProps} from 'next/app';
import Head from 'next/head';
import {Box} from "@mui/material";
import {GoogleAnalytics, marginPx, usePageView} from "@vocmem/ui";

function CustomApp({Component, pageProps}: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <title>物理学ギャラリー</title>
      </Head>
      <GoogleAnalytics/>
      <Box component="main" className="app" sx={{margin: `0 ${marginPx}`, fontFamily: "serif"}}>
        <Component {...pageProps} />
      </Box>
    </>
  );
}

export default CustomApp;
