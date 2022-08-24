import { formatUnits } from '@ethersproject/units'
import pools from 'config/constants/pools'
import { getTaskassistantContract, getTaskassistantV2Contract } from 'utils/contractHelpers'

// Pool 0 is special (waya pool)
// Pool 78 is a broken pool, not used, and break the tests
const idsToRemove = [0, 78]
// Test only against the last 10 pools, for performance concern
const poolsToTest = pools.filter((pool) => !idsToRemove.includes(pool.poolId)).slice(0, 10)

describe('Config pools', () => {
  it.each(pools.map((pool) => pool.poolId))('Pool #%d has an unique poolId', (poolId) => {
    const duplicates = pools.filter((p) => poolId === p.poolId)
    expect(duplicates).toHaveLength(1)
  })
  it.each(pools.map((pool) => [pool.poolId, pool.contractAddress]))(
    'Pool #%d has an unique contract address',
    (poolId, contractAddress) => {
      const duplicates = pools.filter((p) => contractAddress[56] === p.contractAddress[56])
      expect(duplicates).toHaveLength(1)
    },
  )
  it.each(poolsToTest.filter((pool) => pool.earningToken.symbol !== 'BNB'))(
    'Pool %p has the correct earning token',
    async (pool) => {
      const contract = getTaskassistantContract(pool.poolId)
      const rewardTokenAddress = await contract.rewardToken()
      expect(rewardTokenAddress.toLowerCase()).toBe(pool.earningToken.address.toLowerCase())
    },
  )
  it.each(poolsToTest.filter((pool) => pool.stakingToken.symbol !== 'BNB'))(
    'Pool %p has the correct staking token',
    async (pool) => {
      let stakingTokenAddress = null
      try {
        const contract = getTaskassistantV2Contract(pool.poolId)
        stakingTokenAddress = await contract.stakedToken()
      } catch (error) {
        const contract = getTaskassistantContract(pool.poolId)
        stakingTokenAddress = await contract.gaya()
      }

      expect(stakingTokenAddress.toLowerCase()).toBe(pool.stakingToken.address.toLowerCase())
    },
  )

  it.each(poolsToTest.filter((pool) => pool.stakingToken.symbol !== 'BNB'))(
    'Pool %p has the correct tokenPerBlock',
    async (pool) => {
      const contract = getTaskassistantContract(pool.poolId)
      const rewardPerBlock = await contract.rewardPerBlock()

      expect(String(parseFloat(formatUnits(rewardPerBlock, pool.earningToken.decimals)))).toBe(pool.tokenPerBlock)
    },
  )
})
