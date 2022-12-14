import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useChieffarmer } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useStakeFarms = (pid: number) => {
  const chiefFarmerContract = useChieffarmer()
  const gasPrice = useGasPrice()

  const handleStake = useCallback(
    async (amount: string) => {
      return stakeFarm(chiefFarmerContract, pid, amount, gasPrice)
    },
    [chiefFarmerContract, pid, gasPrice],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
