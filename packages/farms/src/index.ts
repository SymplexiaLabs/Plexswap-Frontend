import { MultiCallV2 } from '@plexswap/multicall'
import { FetchFarms, fetchFarmsParams, fetchChiefFarmerV2Data as _fetchChiefFarmerV2Data } from './fetchFarms'
import { chiefFarmerAddresses, supportedChainId } from './constants'

export function createFarmFetcher(multicall: MultiCallV2) {
  const fetchFarms = (params: Omit<fetchFarmsParams, 'chiefFarmerAddresses' | 'multicall'>) => {
    return FetchFarms({ ...params, multicall, chiefFarmerAddresses })
  }
  return {
    fetchFarms,
    fetchChiefFarmerV2Data: (isTestnet: boolean) =>
      _fetchChiefFarmerV2Data({ isTestnet, chiefFarmerAddresses, multicall }),
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
  }
}

export * from './types'
export * from './farmsPriceHelpers'
export * from './constants'
