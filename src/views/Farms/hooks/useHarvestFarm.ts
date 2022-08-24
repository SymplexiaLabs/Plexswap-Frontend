import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useChieffarmer } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const chiefFarmerContract = useChieffarmer()

  const handleHarvest = useCallback(async () => {
    return harvestFarm(chiefFarmerContract, farmPid)
  }, [farmPid, chiefFarmerContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
