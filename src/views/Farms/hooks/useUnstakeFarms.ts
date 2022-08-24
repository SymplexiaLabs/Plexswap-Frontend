import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useChieffarmer } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const chiefFarmerContract = useChieffarmer()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(chiefFarmerContract, pid, amount)
    },
    [chiefFarmerContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
