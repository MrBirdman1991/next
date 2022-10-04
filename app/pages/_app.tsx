import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>NextJS Event</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
