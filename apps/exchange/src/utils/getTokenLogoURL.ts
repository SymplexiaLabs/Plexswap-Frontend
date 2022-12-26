import { ChainId, Token } from '@plexswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = (token?: Token) => {
  if (token.symbol === 'WAYA')   {return 'https://swap.plexfinance.us/images/tokens/common/waya.png'}
  if (token.symbol === 'PLEX-F') {return 'https://swap.plexfinance.us/images/tokens/common/plex.png'}
  if (token && mapping[token.chainId]) {
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  }
  return null
}

export default getTokenLogoURL
