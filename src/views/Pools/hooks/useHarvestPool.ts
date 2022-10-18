import { useCallback } from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { useCropChief } from 'hooks/useContract'
import { BOOSTED_FARM_GAS_LIMIT } from 'config'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const harvestPool = async (cropChiefContract) => {
  const gasPrice = getGasPrice()
  return cropChiefContract.deposit('0', { ...options, gasPrice })
}

const harvestPoolBnb = async (cropChiefContract) => {
  const gasPrice = getGasPrice()
  return cropChiefContract.deposit({ ...options, value: BIG_ZERO, gasPrice })
}

const useHarvestPool = (poolId, isUsingBnb = false) => {
  const cropChiefContract = useCropChief(poolId)

  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(cropChiefContract)
    }

    return harvestPool(cropChiefContract)
  }, [isUsingBnb, cropChiefContract])

  return { onReward: handleHarvest }
}

export default useHarvestPool
