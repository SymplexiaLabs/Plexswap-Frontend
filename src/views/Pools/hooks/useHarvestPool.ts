import { useCallback } from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { useTaskAssistant } from 'hooks/useContract'
import { BOOSTED_FARM_GAS_LIMIT } from 'config'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const harvestPool = async (taskAssistantContract) => {
  const gasPrice = getGasPrice()
  return taskAssistantContract.deposit('0', { ...options, gasPrice })
}

const harvestPoolBnb = async (taskAssistantContract) => {
  const gasPrice = getGasPrice()
  return taskAssistantContract.deposit({ ...options, value: BIG_ZERO, gasPrice })
}

const useHarvestPool = (poolId, isUsingBnb = false) => {
  const taskAssistantContract = useTaskAssistant(poolId)

  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(taskAssistantContract)
    }

    return harvestPool(taskAssistantContract)
  }, [isUsingBnb, taskAssistantContract])

  return { onReward: handleHarvest }
}

export default useHarvestPool
