import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LocalizationProvider } from '../common/contexts/localization-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <meta property="og:image" content="https://storage.googleapis.com/brunoluvizotto-public/images/og-image.png" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale:alternate" content="pt_BR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocalizationProvider>
        <Component {...pageProps} />
      </LocalizationProvider>
    </>
  )
}

export default MyApp
