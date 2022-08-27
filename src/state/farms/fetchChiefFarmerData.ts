import chieffarmerABI from 'config/abi/ChiefFarmer.json'
import chunk from 'lodash/chunk'
import BigNumber from 'bignumber.js'
import { multicallv2 } from 'utils/multicall'
import { getBscChainId } from 'state/farms/getBscChainId'
import { BIG_ZERO } from 'utils/bigNumber'
import { verifyBscNetwork } from 'utils/verifyBscNetwork'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'
import { getChiefFarmerAddress } from '../../utils/addressHelpers'

export const fetchChiefFarmerFarmPoolLength = async (chainId: number) => {
  try {
    const [poolLength] = await multicallv2({
      abi: chieffarmerABI,
      calls: [
        {
          name: 'poolLength',
          address: getChiefFarmerAddress(chainId),
        },
      ],
      chainId,
    })

    return new BigNumber(poolLength).toNumber()
  } catch (error) {
    console.error('Fetch ChiefFarmer Farm Pool Length Error: ', error)
    return BIG_ZERO.toNumber()
  }
}

const chiefFarmerFarmCalls = async (farm: SerializedFarm) => {
  const { pid, bscPid, quoteToken } = farm
  const isBscNetwork = verifyBscNetwork(quoteToken.chainId)
  const multiCallChainId = isBscNetwork ? quoteToken.chainId : await getBscChainId(quoteToken.chainId)
  const chiefFarmerAddress = getChiefFarmerAddress(multiCallChainId)
  const chiefFarmerPid = isBscNetwork ? pid : bscPid

  return chiefFarmerPid || chiefFarmerPid === 0
    ? [
        {
          address: chiefFarmerAddress,
          name: 'poolInfo',
          params: [chiefFarmerPid],
        },
        {
          address: chiefFarmerAddress,
          name: 'totalRegularAllocPoint',
        },
      ]
    : [null, null]
}

export const fetchChiefFarmerData = async (farms: SerializedFarmConfig[], chainId: number): Promise<any[]> => {
  const chiefFarmerCalls = await Promise.all(farms.map((farm) => chiefFarmerFarmCalls(farm)))
  const chunkSize = chiefFarmerCalls.flat().length / farms.length
  const chiefFarmerAggregatedCalls = chiefFarmerCalls
    .filter((chiefFarmerCall) => chiefFarmerCall[0] !== null && chiefFarmerCall[1] !== null)
    .flat()

  const isBscNetwork = verifyBscNetwork(chainId)
  const multiCallChainId = isBscNetwork ? chainId : await getBscChainId(chainId)
  const chiefFarmerMultiCallResult = await multicallv2({
    abi: chieffarmerABI,
    calls: chiefFarmerAggregatedCalls,
    chainId: multiCallChainId,
  })
  const chiefFarmerChunkedResultRaw = chunk(chiefFarmerMultiCallResult, chunkSize)

  let chiefFarmerChunkedResultCounter = 0
  return chiefFarmerCalls.map((chiefFarmerCall) => {
    if (chiefFarmerCall[0] === null && chiefFarmerCall[1] === null) {
      return [null, null]
    }
    const data = chiefFarmerChunkedResultRaw[chiefFarmerChunkedResultCounter]
    chiefFarmerChunkedResultCounter++
    return data
  })
}
