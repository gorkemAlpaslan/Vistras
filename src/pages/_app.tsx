import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
