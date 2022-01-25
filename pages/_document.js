import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='da'>
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/hok4euk.css" />
        </Head>
        <body id='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
