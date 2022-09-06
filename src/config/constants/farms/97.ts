import { bscTestnetTokens } from '@plexswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
   /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAYA',
    lpAddress: '0xA2af2640A694f91632e60befc7Fc30C1b787D505', // Waya Address
    token: bscTestnetTokens.waya,
    quoteToken: bscTestnetTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'WAYA/BNB LP',
    lpAddress:  '0xb2f17C22DB21b82449e73AD605A74dff66C16aeF', // WAYA-LP Pair
    token: bscTestnetTokens.waya,
    quoteToken: bscTestnetTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD/BNB LP',
    lpAddress:  '0x49120769a878215a350038AbB394072cEb6F4d4A',
    token: bscTestnetTokens.busd,
    quoteToken: bscTestnetTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'WAYA/BUSD LP',
    lpAddress:  '0x92AaD8AC7da29516ece348b3703679920c5a94E7',
    token: bscTestnetTokens.waya,
    quoteToken: bscTestnetTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'PLEX-F/BNB LP',
    lpAddress:  '0x22aE89104C0A2a0792568b8CDf5A7806249d6e90', 
    token: bscTestnetTokens.plex,
    quoteToken: bscTestnetTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'PLEX-F/BUSD LP',
    lpAddress:  '0x98BE7F94d796d14630f425B4748B9eBDC26bdBf7', 
    token: bscTestnetTokens.plex,
    quoteToken: bscTestnetTokens.busd,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
