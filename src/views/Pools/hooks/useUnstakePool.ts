import { useCallback } from 'react'
import { parseUnits } from '@ethersproject/units'
import { useTaskAssistant } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const sousUnstake = (taskAssistantContract: any, amount: string, decimals: number) => {
  const gasPrice = getGasPrice()
  const units = parseUnits(amount, decimals)

  return taskAssistantContract.withdraw(units.toString(), {
    gasPrice,
  })
}

const sousEmergencyUnstake = (taskAssistantContract: any) => {
  const gasPrice = getGasPrice()
  return taskAssistantContract.emergencyWithdraw({ gasPrice })
}

const useUnstakePool = (poolId: number, enableEmergencyWithdraw = false) => {
  const taskAssistantContract = useTaskAssistant(poolId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (enableEmergencyWithdraw) {
        return sousEmergencyUnstake(taskAssistantContract)
      }

      return sousUnstake(taskAssistantContract, amount, decimals)
    },
    [enableEmergencyWithdraw, taskAssistantContract],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
