import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useChieffarmer } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const chiefFarmerContract = useChieffarmer()

  const handleStake = useCallback(
    async (amount: string) => {
      return stakeFarm(chiefFarmerContract, pid, amount)
    },
    [chiefFarmerContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
