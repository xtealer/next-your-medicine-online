import "@/styles/globals.css";

import { AppPropsWithLayout } from "@/types/Layout";
import AppProviders from "@/AppProviders";
import { Inter } from "@next/font/google";
import Head from "next/head";

import TawkScript from "@/components/scripts/TawkScript";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppProviders>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <style jsx global className={inter.variable}>{`
        html {
          font-family: ${inter.style.fontFamily} !important;
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
      <TawkScript />
    </AppProviders>
  );
}
