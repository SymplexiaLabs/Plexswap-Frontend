import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, BOOSTED_FARM_GAS_LIMIT } from 'config'
import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'
import { useTaskAssistant } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const sousStake = async (taskAssistantContract, amount, decimals = 18) => {
  const gasPrice = getGasPrice()
  return taskAssistantContract.deposit(new BigNumber(amount).times(getFullDecimalMultiplier(decimals)).toString(), {
    ...options,
    gasPrice,
  })
}

const sousStakeBnb = async (taskAssistantContract, amount) => {
  const gasPrice = getGasPrice()
  return taskAssistantContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
}

const useStakePool = (poolId: number, isUsingBnb = false) => {
  const taskAssistantContract = useTaskAssistant(poolId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (isUsingBnb) {
        return sousStakeBnb(taskAssistantContract, amount)
      }
      return sousStake(taskAssistantContract, amount, decimals)
    },
    [isUsingBnb, taskAssistantContract],
  )

  return { onStake: handleStake }
}

export default useStakePool
