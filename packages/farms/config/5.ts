import { goerliTestnetTokens } from '@plexswap/tokens'
import { SerializedFarmConfig } from '@plexswap/farms'

const farms: SerializedFarmConfig[] = [
   /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
    {
      pid: 0,
      lpSymbol: 'WAYA',
      lpAddress: '0xB4Ebcc066959C09206e596B7E810484eb55DD80C', // Waya Address
      token: goerliTestnetTokens.waya,
      quoteToken: goerliTestnetTokens.weth,
    },
    {
      pid: 1,
      lpSymbol: 'WAYA/ETH LP',
      lpAddress:  '0x2A051fd7c6a100bC7690B5064923f6Bc43d3574e', // WAYA-LP Pair
      token: goerliTestnetTokens.waya,
      quoteToken: goerliTestnetTokens.weth,
    },
    {
      pid: 2,
      lpSymbol: 'BUSD/ETH LP',
      lpAddress:  '0xc0FB246ae3d56351aDc2bDB196c623577D90cfB5',
      token: goerliTestnetTokens.busd,
      quoteToken: goerliTestnetTokens.weth,
    },
    {
      pid: 3,
      lpSymbol: 'WAYA/BUSD LP',
      lpAddress:  '0x57b4905662BdB31d5F42357Bb4226878f8469076',
      token: goerliTestnetTokens.waya,
      quoteToken: goerliTestnetTokens.busd,
    },
    {
      pid: 4,
      lpSymbol: 'PLEX-F/ETH LP',
      lpAddress:  '0xaD4761f26AbA1870Eb9081CfcAA0a9C07bbB3a12', 
      token: goerliTestnetTokens.plex,
      quoteToken: goerliTestnetTokens.weth,
    },
    {
      pid: 5,
      lpSymbol: 'PLEX-F/BUSD LP',
      lpAddress:  '0x4fCfa60A9BF43a6F9aD614A0dBa4586b19de2483', 
      token: goerliTestnetTokens.plex,
      quoteToken: goerliTestnetTokens.busd,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
