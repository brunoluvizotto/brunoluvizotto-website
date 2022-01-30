import type { AppProps } from 'next/app'
import { LocalizationProvider } from '../common/contexts/localization-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Component {...pageProps} />
    </LocalizationProvider>
  )
}

export default MyApp
