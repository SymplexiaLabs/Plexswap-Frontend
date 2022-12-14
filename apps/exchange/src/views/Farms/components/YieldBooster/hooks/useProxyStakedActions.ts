import { useWeb3React } from '@plexswap/wagmi'
import { useFarmBoosterProxyContract } from 'hooks/useContract'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { useGasPrice } from 'state/user/hooks'
import { harvestFarm, stakeFarm, unstakeFarm } from 'utils/calls/farms'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useFarmBoosterProxyContractAddress } from 'views/Farms/hooks/useFarmBoosterProxyContractAddress'
import { useApproveBoostProxyFarm } from '../../../hooks/useApproveFarm'
import useProxyWAYABalance from './useProxyWAYABalance'

export default function useProxyStakedActions(pid, lpContract) {
  const { account } = useWeb3React()
  const { chainId } = useActiveWeb3React()
  const { proxyAddress } = useFarmBoosterProxyContractAddress(account)
  const bWayaProxy = useFarmBoosterProxyContract(proxyAddress)
  const dispatch = useAppDispatch()
  const gasPrice = useGasPrice()
  const { proxyWayaBalance, refreshProxyWayaBalance } = useProxyWAYABalance()

  const onDone = useCallback(() => {
    refreshProxyWayaBalance()
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid], chainId, proxyAddress }))
  }, [account, proxyAddress, chainId, pid, dispatch, refreshProxyWayaBalance])

  const { onApprove } = useApproveBoostProxyFarm(lpContract, proxyAddress)

  const onStake = useCallback((value) => stakeFarm(bWayaProxy, pid, value, gasPrice), [bWayaProxy, pid, gasPrice])

  const onUnstake = useCallback((value) => unstakeFarm(bWayaProxy, pid, value, gasPrice), [bWayaProxy, pid, gasPrice])

  const onReward = useCallback(() => harvestFarm(bWayaProxy, pid, gasPrice), [bWayaProxy, pid, gasPrice])

  return {
    onStake,
    onUnstake,
    onReward,
    onApprove,
    onDone,
    proxyWayaBalance,
  }
}
