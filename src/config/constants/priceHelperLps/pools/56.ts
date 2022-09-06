import { bscTokens } from '@plexswap/tokens'
import { SerializedFarmConfig } from '../../types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for ChiefFarmer LPs (farms.ts).
   * This list is added to the ChiefFarmerLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the chieffarmer contract calls are skipped for this farm.
   * Prices are then fetched for all farms (chieffarmer + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
   {
    pid: null,
    lpSymbol: 'ANKR-BNB LP',
    lpAddress: '0x3147F98B8f9C53Acdf8F16332eaD12B592a1a4ae',
    token: bscTokens.ankr,
    quoteToken: bscTokens.wbnb,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
