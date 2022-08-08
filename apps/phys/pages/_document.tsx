import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name='twitter:card' content='物理学ギャラリー'/>
          <meta name='twitter:url' content='https://phasetr.com/service/phys-gallery'/>
          <meta name='twitter:title' content='物理学ギャラリー'/>
          <meta name='twitter:description' content='物理のいろいろな式や物理法則のギャラリー. 物理学者の名言なども収録.'/>
          <meta name='twitter:image' content='https://phasetr.com/service/phys-gallery/icon-192x192.png'/>
          <meta name='twitter:creator' content='@phasetr'/>
          <meta property='og:type' content='website'/>
          <meta property='og:title' content='物理学ギャラリー'/>
          <meta property='og:description' content='物理のいろいろな式や物理法則のギャラリー. 物理学者の名言なども収録.'/>
          <meta property='og:site_name' content='物理学ギャラリー'/>
          <meta property='og:url' content='https://phasetr.com/service/phys-gallery'/>
          <meta property='og:image' content='https://phasetr.com/service/phys-gallery/icon-192x192.png'/>
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
