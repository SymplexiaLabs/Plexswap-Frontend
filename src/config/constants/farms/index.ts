import { ChainId } from '@plexswap/sdk'
import { SerializedFarmConfig } from '../types'

let logged = false

/**
 * Fetches the "core" farm data used globally
 * 1 = WAYA-BNB LP
 * 2 = BUSD-BNB LP
 */
export const coreFarmPIDs = {
  56: [1, 2],
  97: [1, 2],
  5: [1, 2],
}

export const mainFarmPID = 1            // Waya Farm

export const getFarmConfig = async (chainId: ChainId) => {
  try {
    return (await import(`/${chainId}.ts`)).default as SerializedFarmConfig[]
  } catch (error) {
    if (!logged) {
      console.error('Cannot get farm config', error, chainId)
      logged = true
    }
    return []
  }
}
