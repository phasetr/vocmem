import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
