import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useChieffarmer } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useUnstakeFarms = (pid: number) => {
  const chiefFarmerContract = useChieffarmer()
  const gasPrice = useGasPrice()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(chiefFarmerContract, pid, amount, gasPrice)
    },
    [chiefFarmerContract, pid, gasPrice],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
