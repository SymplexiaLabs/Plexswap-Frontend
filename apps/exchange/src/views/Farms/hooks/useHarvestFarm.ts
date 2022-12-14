import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useChieffarmer } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const useHarvestFarm = (farmPid: number) => {
  const chiefFarmerContract = useChieffarmer()
  const gasPrice = useGasPrice()

  const handleHarvest = useCallback(async () => {
    return harvestFarm(chiefFarmerContract, farmPid, gasPrice)
  }, [farmPid, chiefFarmerContract, gasPrice])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
