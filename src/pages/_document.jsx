import Document, { Html, Head, Main, NextScript } from 'next/document'
import stylesManifest from '../../static-packs/dist/css/manifest'
import webcomponentsManifest from '../../static-packs/dist/web-components/manifest.json'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <html>
          <Head>
            <link rel="stylesheet" type="text/css" href={`/static/packs/css/${stylesManifest['styles.css']}`}/>
            <script src={`/static/packs/web-components/${webcomponentsManifest['web-components.js']}`}></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </Html>
    )
  }
}

export default MyDocument
