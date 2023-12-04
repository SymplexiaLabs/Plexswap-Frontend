import { Token } from '@plexswap/sdk'
import { ChainId  } from '@plexswap/chains'

const mapping = {
  [ChainId.BSC]: 'smartchain',
}

const getTokenLogoURL = (token?: Token) => {

  let logoPNG
  switch (token.symbol) {
    case 'WAYA':       logoPNG = 'waya';     break
    case 'PLEX-F':     logoPNG = 'plex';     break
    case 'WPLEX':      logoPNG = 'wplex';    break
    case 'USDP':       logoPNG = 'usdp';     break
    default:           logoPNG = null
  }

  if (logoPNG)   {return `https://swap.plexfinance.us/images/tokens/common/${logoPNG}.png`}
  
  if (token && mapping[token.chainId]) {
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  }
  return null
}

export default getTokenLogoURL


