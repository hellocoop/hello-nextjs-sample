// These styles apply to every route in the application
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hellō Next.js Starter</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}