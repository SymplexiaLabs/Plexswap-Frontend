import { useCallback } from 'react'
import { parseUnits } from '@ethersproject/units'
import { useCropChief } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const poolUnstake = (cropChiefContract: any, amount: string, decimals: number) => {
  const gasPrice = getGasPrice()
  const units = parseUnits(amount, decimals)

  return cropChiefContract.withdraw(units.toString(), {
    gasPrice,
  })
}

const poolEmergencyUnstake = (cropChiefContract: any) => {
  const gasPrice = getGasPrice()
  return cropChiefContract.emergencyWithdraw({ gasPrice })
}

const useUnstakePool = (poolId: number, enableEmergencyWithdraw = false) => {
  const cropChiefContract = useCropChief(poolId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (enableEmergencyWithdraw) {
        return poolEmergencyUnstake(cropChiefContract)
      }

      return poolUnstake(cropChiefContract, amount, decimals)
    },
    [enableEmergencyWithdraw, cropChiefContract],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
