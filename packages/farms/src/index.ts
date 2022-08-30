import { MultiCallV2 } from '@plexswap/multicall'
import { FetchFarms, fetchFarmsParams, fetchChiefFarmerV2Data as _fetchChiefFarmerV2Data } from './fetchFarms'

export const chiefFarmerAddresses = {
  97: '0x8814Adcc1f9D90d9dBE8e1a87E40de267657d24e',
  56: '0x4Ba4EFa9C4E44b94ea232Fd5F5f7F4A4961904e5',
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}

const supportedChainId = [5, 56, 97]

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
