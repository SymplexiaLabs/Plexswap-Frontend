import { bscTokens, WAYA_BSC } from '@plexswap/tokens'
import { SerializedFarmConfig } from '@plexswap/farms'

const farms: SerializedFarmConfig[] = [
 /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAYA',
    lpAddress:  WAYA_BSC.address,
    token: bscTokens.waya,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'WAYA/BNB LP',
    lpAddress:  '0xB459DC2D3763b14c77a5657f6A3C328E2A59255F',
    token: bscTokens.waya,
    quoteToken: bscTokens.wbnb,
    boosted: true,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD/BNB LP',
    lpAddress:  '0x2C2643D51322738fC33f6588Cb28eDe3790094E1',
    token: bscTokens.busd,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'WAYA/BUSD LP',
    lpAddress:  '0x3660F1Ee5711c69160061e55169136631Aa84D6C',
    token: bscTokens.waya,
    quoteToken: bscTokens.busd,
    boosted: true,
  },
  {
    pid: 4,
    lpSymbol: 'PLEX-F/BNB LP',
    lpAddress: '0x539Df50cf6fc29d560413d669A5Bb78cB342029B',
    token: bscTokens.plexf,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'PLEX-F/BUSD LP',
    lpAddress: '0x626f4248e1116f1168B53f6183b2569c7D0fc723',
    token: bscTokens.plexf,
    quoteToken: bscTokens.busd,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
