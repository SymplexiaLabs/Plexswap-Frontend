import chieffarmerABI from 'config/abi/ChiefFarmer.json'
import chunk from 'lodash/chunk'
import { multicallv2 } from 'utils/multicall'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'
import { getChiefFarmerAddress } from '../../utils/addressHelpers'
import { getChieffarmerContract } from '../../utils/contractHelpers'

const chiefFarmerAddress = getChiefFarmerAddress()
const chiefFarmerContract = getChieffarmerContract()

export const fetchChiefFarmerFarmPoolLength = async () => {
  const poolLength = await chiefFarmerContract.poolLength()
  return poolLength
}

const chiefFarmerFarmCalls = (farm: SerializedFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: chiefFarmerAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: chiefFarmerAddress,
          name: 'totalRegularAllocPoint',
        },
      ]
    : [null, null]
}

export const fetchChiefFarmerData = async (farms: SerializedFarmConfig[]): Promise<any[]> => {
  const chiefFarmerCalls = farms.map((farm) => chiefFarmerFarmCalls(farm))
  const chunkSize = chiefFarmerCalls.flat().length / farms.length
  const chiefFarmerAggregatedCalls = chiefFarmerCalls
    .filter((chiefFarmerCall) => chiefFarmerCall[0] !== null && chiefFarmerCall[1] !== null)
    .flat()
  const chiefFarmerMultiCallResult = await multicallv2(chieffarmerABI, chiefFarmerAggregatedCalls)
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
