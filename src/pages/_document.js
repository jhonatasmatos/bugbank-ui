import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import HeadLinks from '../components/HeadLinks';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const transform = (App) => {
      // Next.js gives us a `transformPage` function
      // to be able to hook into the rendering of a page
      // Step 1: Here we will generate the styles
      return App;
    }
    const page = renderPage(transform);
    return { ...page };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <HeadLinks />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

