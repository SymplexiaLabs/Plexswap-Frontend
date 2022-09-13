import { formatEther } from '@ethersproject/units'
import { MultiCallV2 } from '@plexswap/multicall'
import { ChainId } from '@plexswap/sdk'
import { chiefFarmerAddresses, supportedChainId } from './constants'
import type { FarmWithPrices } from './farmPrices'
import { farmV2FetchFarms, FetchFarmsParams, fetchChiefFarmerV2Data } from './fetchFarms'

export function createFarmFetcher(multicallv2: MultiCallV2) {
  const fetchFarms = async (
    params: {
      isTestnet: boolean
    } & Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { isTestnet, farms, chainId } = params
    const chiefFarmerAddress = isTestnet ? chiefFarmerAddresses[ChainId.BSC_TESTNET] : chiefFarmerAddresses[ChainId.BSC]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, wayaPerBlock } = await fetchChiefFarmerV2Data({
      isTestnet,
      multicallv2,
      chiefFarmerAddress,
    })
    const regularWayaPerBlock = formatEther(wayaPerBlock)
    const farmsWithPrice = await farmV2FetchFarms({
      multicallv2,
      chiefFarmerAddress,
      isTestnet,
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
    isTestnet: (chainId: number) => ![ChainId.BSC].includes(chainId),
  }
}

export * from './apr'
export * from './farmsPriceHelpers'
export * from './types'
export * from './constants'
export type { FarmWithPrices }
