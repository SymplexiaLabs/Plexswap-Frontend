import { formatEther } from '@ethersproject/units'
import { MultiCallV2 } from '@plexswap/multicall'
import { chiefFarmerAddresses, supportedChainId } from './constants'
import type { FarmWithPrices } from './farmPrices'
import { farmV2FetchFarms, FetchFarmsParams, fetchChiefFarmerV2Data } from './fetchFarms'

export function createFarmFetcher(multicallv2: MultiCallV2) {
  const fetchFarms = async (
    params: Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { farms, chainId } = params
    const chiefFarmerAddress = chiefFarmerAddresses[chainId]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, wayaPerBlock } = await fetchChiefFarmerV2Data({
      chainId,
      multicallv2,
      chiefFarmerAddress,
    })
    const regularWayaPerBlock = formatEther(wayaPerBlock)
    const farmsWithPrice = await farmV2FetchFarms({
      multicallv2,
      chiefFarmerAddress,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength.gt(f.pid)),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    return {
      farmsWithPrice,
      poolLength: poolLength.toNumber(),
      regularWayaPerBlock: +regularWayaPerBlock,
    }
  }
  return {
    fetchFarms,
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
    supportedChainId,
  }
}

export * from './apr'
export * from './farmsPriceHelpers'
export * from './types'
export * from './constants'
export type { FarmWithPrices }
