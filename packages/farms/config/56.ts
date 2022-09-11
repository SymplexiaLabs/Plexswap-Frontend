import { bscTokens } from '@plexswap/tokens'
import { SerializedFarmConfig } from '@plexswap/farms'

const farms: SerializedFarmConfig[] = [
 /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAYA',
    lpAddress:  '0x0581c0dae41F19Fb4602E7ba0A803B7AE50f02E8',
    token: bscTokens.waya,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'WAYA/BNB LP',
    lpAddress:  '0xF5d0C6394Fe37FB5AB5B5ff2D5FC7471CEA9F698',
    token: bscTokens.waya,
    quoteToken: bscTokens.wbnb,
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
    lpAddress:  '0x0867Ac91542eebc6Db1DD2516A5b0f4635EB0221',
    token: bscTokens.waya,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'PLEX-F/BNB LP',
    lpAddress: '0x539Df50cf6fc29d560413d669A5Bb78cB342029B',
    token: bscTokens.plex,
    quoteToken: bscTokens.wbnb,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
