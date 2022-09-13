import { ChainId, Token, WETH9 } from '@plexswap/sdk'
import { USDC_GOERLI, BUSD_GOERLI, WAYA_GOERLI, PLEX_GOERLI } from './common'

export const goerliTestnetTokens = {
  weth: WETH9[ChainId.GOERLI],
  usdc: USDC_GOERLI,
  waya: WAYA_GOERLI,
  busd: BUSD_GOERLI,
  plex: PLEX_GOERLI,
}
