import Layout from "@/components/layouts/layout";
import { CartProvider } from "@/context/cartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Favicon from "@/public/assets/icons/icons8-online-store-96.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="The scarlet store is your one stop shop for classic ladies wears like crop tops, bodycon tops and trousers. "
          />
          <title>Scarlet Store</title>
          <link rel="icon" href={Favicon.src} />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
