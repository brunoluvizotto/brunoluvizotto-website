import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document<any> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // wraps the collectStyles provider around our <App />.
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        })

      // extract the initial props that may be present.
      const initialProps = await Document.getInitialProps(ctx)

      // returning the original props together with our styled components.
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bruno Luvizotto - Engenheiro de Software</title>
          <meta
            name="description"
            content="Bruno Luvizotto - desenvolvedor com experiência em JavaScript / Typescript (React e Node), Python, C e C++ (Qt)."
          />
          <meta property="og:title" content="Bruno Luvizotto - Engenheiro de Software Full Stack" />
          <meta property="og:url" content="https://www.brunoluvizotto.com.br" />
          <meta
            property="og:description"
            content="Software Full Stack em JavaScript / TypeScript (React / Node), Python, C e C++"
          />
          <meta
            property="og:image"
            content="https://storage.googleapis.com/brunoluvizotto-public/images/og-image.png"
          />
          <meta property="og:type" content="profile" />
          <meta property="og:locale:alternate" content="pt_BR" />
          <link rel="icon" href="/favicon.ico" />
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
