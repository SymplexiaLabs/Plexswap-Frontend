import { ResetCSS } from '@plexswap/ui-plex'
import Script from 'next/script'
import BigNumber from 'bignumber.js'
import { ToastListener } from 'contexts/ToastsContext'
import useEagerConnect from 'hooks/useEagerConnect'

import { useAccountEventListener } from 'hooks/useAccountEventListener'
import useSentryUser from 'hooks/useSentryUser'
import useUserAgent from 'hooks/useUserAgent'
import useThemeCookie from 'hooks/useThemeCookie'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore, persistor } from 'state'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { NextPage } from 'next'
import { Blocklist, Updaters } from '..'
import ErrorBoundary from '../components/ErrorBoundary'
import Menu from '../components/Menu'
import Providers from '../Providers'
import GlobalStyle from '../style/Global'



// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function GlobalHooks() {
  usePollBlockNumber()
  useEagerConnect()
  usePollCoreFarmData()
  useUserAgent()
  useAccountEventListener()
  useSentryUser()
  useThemeCookie()
  return null
}

function MPGlobalHooks() {
  usePollBlockNumber()

  usePollCoreFarmData()
  useUserAgent()
  useAccountEventListener()
  useSentryUser()
  return null
}

function MyApp(props: AppProps) {
  const { pageProps, Component } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Discover PlexSwap, an exclusive DEX on BNB Smart Chain (BSC) with special Farms and Crop Silos in DeFi."
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="https://swap.plexfinance.us/images/farmer.png" />
        <meta
          name="twitter:description"
          content="Earn WAYA through yield farming, then stake it in Crop Silos to earn more tokens!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PlexSwap - A simple and consistent DeFi Exchange approach on BNB Smart Chain (BSC)"
        />
        <title>PlexSwap</title>
        {(Component as NextPageWithLayout).mp && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src="https://public.bnbstatic.com/static/js/mp-webview-sdk/webview-v1.0.0.min.js" id="mp-webview" />
        )}
      </Head>
      <Providers store={store}>
        <Blocklist>
          {(Component as NextPageWithLayout).mp ? <MPGlobalHooks /> : <GlobalHooks />}
          <ResetCSS />
          <GlobalStyle />
          <PersistGate loading={null} persistor={persistor}>
            <Updaters />
            <App {...props} />
          </PersistGate>
        </Blocklist>
      </Providers>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
          `,
        }}
      />
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>
  mp?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? ErrorBoundary : Fragment

const App = ({ Component, pageProps, ...appProps }: AppPropsWithLayout) => {
  const noNeedLayout = [`/451`].includes(appProps.router.pathname)

  if (noNeedLayout) {
    return <Component {...pageProps} />
  }

  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  const ShowMenu = Component.mp ? Fragment : Menu

  return (
    <ProductionErrorBoundary>
      <ShowMenu>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShowMenu>

      <ToastListener />

    </ProductionErrorBoundary>
  )
}

export default MyApp
