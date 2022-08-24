import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for ChiefFarmer LPs (farms.ts).
   * This list is added to the ChiefFarmerLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the chieffarmer contract calls are skipped for this farm.
   * Prices are then fetched for all farms (chieffarmer + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
]

export default priceHelperLps
