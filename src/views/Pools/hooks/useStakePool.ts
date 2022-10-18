import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, BOOSTED_FARM_GAS_LIMIT } from 'config'
import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'
import { useCropChief } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const poolStake = async (cropChiefContract, amount, decimals = 18) => {
  const gasPrice = getGasPrice()
  return cropChiefContract.deposit(new BigNumber(amount).times(getFullDecimalMultiplier(decimals)).toString(), {
    ...options,
    gasPrice,
  })
}

const poolStakeBnb = async (cropChiefContract, amount) => {
  const gasPrice = getGasPrice()
  return cropChiefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
}

const useStakePool = (poolId: number, isUsingBnb = false) => {
  const cropChiefContract = useCropChief(poolId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (isUsingBnb) {
        return poolStakeBnb(cropChiefContract, amount)
      }
      return poolStake(cropChiefContract, amount, decimals)
    },
    [isUsingBnb, cropChiefContract],
  )

  return { onStake: handleStake }
}

export default useStakePool
