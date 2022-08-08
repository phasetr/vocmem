import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='twitter:card' content='理系向け多言語単語学習アプリ'/>
          <meta name='twitter:url' content='https://phasetr.com/service/vocmem'/>
          <meta name='twitter:title' content='理系向け多言語単語学習アプリ'/>
          <meta name='twitter:description' content='理系の感覚で言語を学ぶためのアプリ. 多言語を眺めて言語の世界の共通法則を理解する.'/>
          <meta name='twitter:image' content='https://phasetr.com/service/vocmem-gallery/icon-192x192.png'/>
          <meta name='twitter:creator' content='@phasetr'/>
          <meta property='og:type' content='website'/>
          <meta property='og:title' content='理系向け多言語単語学習アプリ'/>
          <meta property='og:description' content='理系の感覚で言語を学ぶためのアプリ. 多言語を眺めて言語の世界の共通法則を理解する.'/>
          <meta property='og:site_name' content='理系向け多言語単語学習アプリ'/>
          <meta property='og:url' content='https://phasetr.com/service/vocmem'/>
          <meta property='og:image' content='https://phasetr.com/service/vocmem/icon-192x192.png'/>
          <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="favicon.ico"/>
          <link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico"/>
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="icon-192x192.png"/>
          <link rel="manifest" href="manifest.json"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
