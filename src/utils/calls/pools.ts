/* eslint-disable import/prefer-default-export */
import BigNumber from 'bignumber.js'
import poolsConfig from 'config/constants/pools'
import taskAssistantV2 from 'config/abi/TaskAssistantV2.json'
import multicall from '../multicall'
import { bscRpcProvider } from '../providers'
import { getAddress } from '../addressHelpers'

/**
 * Returns the total number of pools that were active at a given block
 */
export const getActivePools = async (block?: number) => {
  const eligiblePools = poolsConfig
    .filter((pool) => pool.poolId !== 0)
    .filter((pool) => pool.isFinished === false || pool.isFinished === undefined)
  const blockNumber = block || (await bscRpcProvider.getBlockNumber())
  const startBlockCalls = eligiblePools.map(({ contractAddress }) => ({
    address: getAddress(contractAddress),
    name: 'startBlock',
  }))
  const endBlockCalls = eligiblePools.map(({ contractAddress }) => ({
    address: getAddress(contractAddress),
    name: 'bonusEndBlock',
  }))
  const [startBlocks, endBlocks] = await Promise.all([
    multicall(taskAssistantV2, startBlockCalls),
    multicall(taskAssistantV2, endBlockCalls),
  ])

  return eligiblePools.reduce((accum, poolCheck, index) => {
    const startBlock = startBlocks[index] ? new BigNumber(startBlocks[index]) : null
    const endBlock = endBlocks[index] ? new BigNumber(endBlocks[index]) : null

    if (!startBlock || !endBlock) {
      return accum
    }

    if (startBlock.gte(blockNumber) || endBlock.lte(blockNumber)) {
      return accum
    }

    return [...accum, poolCheck]
  }, [])
}
