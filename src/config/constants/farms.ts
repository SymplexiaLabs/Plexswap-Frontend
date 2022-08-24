import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const WAYA_BNB_LP_MAINNET = '0xF5d0C6394Fe37FB5AB5B5ff2D5FC7471CEA9F698'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAYA',
    lpAddresses: {
      56: '0x0581c0dae41F19Fb4602E7ba0A803B7AE50f02E8',
      97: '0xFf7144153586ccE57Af03111d6f7c0a168d9Bf21', // dummyWayaPool (dWP) or Waya Address
    },
    token: serializedTokens.waya,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'WAYA/BNB LP',
    lpAddresses: {
      56: '0xF5d0C6394Fe37FB5AB5B5ff2D5FC7471CEA9F698',
      97: '0xb2f17C22DB21b82449e73AD605A74dff66C16aeF', // WAYA-LP Pair
    },
    token: serializedTokens.waya,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD/BNB LP',
    lpAddresses: {
      56: '0x2C2643D51322738fC33f6588Cb28eDe3790094E1',
      97: '0xC29d9C4Cc6ee9f25A486bdd74D6f6aC60068cffE',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'WAYA/BUSD LP',
    lpAddresses: {
      56: '0x0867Ac91542eebc6Db1DD2516A5b0f4635EB0221',
      97: '0x07D9Da509bD9349378441311E5b1F560C30Df055',
    },
    token: serializedTokens.waya,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'PLEX-F/BNB LP',
    lpAddresses: {
      56: '0x539Df50cf6fc29d560413d669A5Bb78cB342029B',
      97: '0x22aE89104C0A2a0792568b8CDf5A7806249d6e90', // PLEX-LP Pair
    },
    token: serializedTokens.plex,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
