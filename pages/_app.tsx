import '../styles/globals.scss'
import Head from 'next/head'
import Router from "next/router";
import withYM from "next-ym";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StanR</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home of StanR." />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="StanR" />
        <meta name="application-name" content="StanR" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

      </Head>
      <div className="main">
          <Component {...pageProps} />
      </div>
    </>
    )
}

export default withYM("56214295", Router)(MyApp);
