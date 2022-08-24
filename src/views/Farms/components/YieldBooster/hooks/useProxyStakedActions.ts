import { useWeb3React } from '@plexswap/wagmi'
import { useBWayaProxyContract } from 'hooks/useContract'

import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { harvestFarm, stakeFarm, unstakeFarm } from 'utils/calls/farms'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useBWayaProxyContractAddress } from 'views/Farms/hooks/useBWayaProxyContractAddress'
import { useApproveBoostProxyFarm } from '../../../hooks/useApproveFarm'
import useProxyWAYABalance from './useProxyWAYABalance'

export default function useProxyStakedActions(pid, lpContract) {
  const { account } = useWeb3React()
  const { proxyAddress } = useBWayaProxyContractAddress(account)
  const bWayaProxy = useBWayaProxyContract(proxyAddress)
  const dispatch = useAppDispatch()
  const { proxyWayaBalance, refreshProxyWayaBalance } = useProxyWAYABalance()

  const onDone = useCallback(() => {
    refreshProxyWayaBalance()
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid], proxyAddress }))
  }, [account, proxyAddress, pid, dispatch, refreshProxyWayaBalance])

  const { onApprove } = useApproveBoostProxyFarm(lpContract, proxyAddress)

  const onStake = useCallback((value) => stakeFarm(bWayaProxy, pid, value), [bWayaProxy, pid])

  const onUnstake = useCallback((value) => unstakeFarm(bWayaProxy, pid, value), [bWayaProxy, pid])

  const onReward = useCallback(() => harvestFarm(bWayaProxy, pid), [bWayaProxy, pid])

  return {
    onStake,
    onUnstake,
    onReward,
    onApprove,
    onDone,
    proxyWayaBalance,
  }
}
