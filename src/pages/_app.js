import { Montserrat } from "next/font/google";
import Head from "next/head";

import { store } from "@/store";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

import CustomerProvider from "@/components/layout/customer-provider";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Books-land</title>
      </Head>
      <Provider store={store}>
        <NextUIProvider>
          <main className={montserrat.className}>
            <CustomerProvider>
              <Component {...pageProps} />
            </CustomerProvider>
          </main>
        </NextUIProvider>
      </Provider>
    </>
  );
}
