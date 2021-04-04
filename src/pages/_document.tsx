import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/dino-icon.png" type="image/x-icon"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://kit.fontawesome.com/f5ccfda43e.js" crossOrigin="anonymous"></script>
          
        </body>
      </Html>
    );
  }
}