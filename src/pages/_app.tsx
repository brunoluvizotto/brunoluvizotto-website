import type { AppProps } from "next/app";
import { ContextProviders } from "../common/contexts";
import { Layout } from "../common/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProviders>
  );
}

export default MyApp;
