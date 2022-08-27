import { ChainId, Token, WBNB } from '@plexswap/sdk'
import { BUSD_TESTNET, WAYA_TESTNET, PLEX_TESTNET, USDC_TESTNET  } from './common'

export const bscTestnetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  waya: WAYA_TESTNET,
  busd: BUSD_TESTNET,
  plex: PLEX_TESTNET,
  usdc: USDC_TESTNET,}
