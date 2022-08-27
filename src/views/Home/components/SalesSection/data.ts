import { TranslateFunction } from '@plexswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade Plex-F or any other currency. No bureaucracy. No complications.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.plexfinance.us/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/coins/',
    attributes: [
      { src: 'top-left', alt: t('Binance') },
      { src: 'top-right', alt: t('Master Coins') },
      { src: 'main-center', alt: t('Crypto Coins') },
      { src: 'top-center', alt: t('Ethereum') },
    ],
  },
})

export const wayaSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('WAYA makes Plex-Ecosystem more sustainable.'),
  bodyText: t(
    'WAYA token is at the heart of the PlexSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0581c0dae41F19Fb4602E7ba0A803B7AE50f02E8',
    text: t('Buy WAYA'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.plexfinance.us/tokenomics/waya',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/coins/',
    attributes: [
      { src: 'Waya_Left', alt: t('Waya Coin') },
      { src: 'Waya_Center', alt: t('Waya Logo') },
    ],
  },
})
