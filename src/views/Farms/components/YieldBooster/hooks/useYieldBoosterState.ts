import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useFarmUser } from 'state/farms/hooks'
import { useFarmBoosterContract } from 'hooks/useContract'
import { useSWRMulticall } from 'hooks/useSWRContract'
import farmBoosterAbi from 'config/abi/FarmBooster.json'
import isUndefinedOrNull from '@plexswap/utils/isUndefinedOrNull'
import { useUserBoosterStatus } from 'views/Farms/hooks/useUserBoosterStatus'
import { useBWayaProxyContractAddress } from 'views/Farms/hooks/useBWayaProxyContractAddress'
import { useUserLockedWayaStatus } from 'views/Farms/hooks/useUserLockedWayaStatus'
import { useCallback } from 'react'

export enum YieldBoosterState {
  UNCONNECTED,
  NO_LOCKED,
  LOCKED_END,
  NO_PROXY_CREATED,
  NO_MIGRATE,
  NO_LP,
  DEACTIVE,
  ACTIVE,
  MAX,
}

function useIsPoolActive(pid: number) {
  const farmBoosterContract = useFarmBoosterContract()
  const { account } = useActiveWeb3React()

  const { data, mutate } = useSWRMulticall(
    farmBoosterAbi,
    [{ address: farmBoosterContract.address, name: 'isBoostedPool', params: [account, pid] }],
    { isPaused: () => !account },
  )

  return {
    isActivePool: Array.isArray(data) ? data[0][0] : false,
    refreshIsPoolActive: mutate,
  }
}

interface UseYieldBoosterStateArgs {
  farmPid: number
}

export default function useYieldBoosterState(yieldBoosterStateArgs: UseYieldBoosterStateArgs) {
  const { farmPid } = yieldBoosterStateArgs
  const { account } = useActiveWeb3React()
  const { remainingCounts, refreshActivePools } = useUserBoosterStatus(account)
  const { locked, lockedEnd } = useUserLockedWayaStatus()
  const { stakedBalance, proxy } = useFarmUser(farmPid)
  const { isActivePool, refreshIsPoolActive } = useIsPoolActive(farmPid)
  const { proxyCreated, refreshProxyAddress, proxyAddress } = useBWayaProxyContractAddress(account)

  const refreshActivePool = useCallback(() => {
    refreshActivePools()
    refreshIsPoolActive()
  }, [refreshActivePools, refreshIsPoolActive])

  let state = null

  if (!account || isUndefinedOrNull(locked)) {
    state = YieldBoosterState.UNCONNECTED
  } else if (!locked) {
    // NOTE: depend on useWayaVaultUserData in Farm Component to check state
    state = YieldBoosterState.NO_LOCKED
  } else if (!proxyCreated) {
    state = YieldBoosterState.NO_PROXY_CREATED
  } else if (stakedBalance.gt(0)) {
    state = YieldBoosterState.NO_MIGRATE
  } else if (lockedEnd === '0' || new Date() > new Date(parseInt(lockedEnd) * 1000)) {
    // NOTE: duplicate logic in BWayaBoosterCard
    state = YieldBoosterState.LOCKED_END
  } else if (!proxy?.stakedBalance.gt(0)) {
    state = YieldBoosterState.NO_LP
  } else if (!isActivePool && remainingCounts === 0) {
    state = YieldBoosterState.MAX
  } else if (isActivePool) {
    state = YieldBoosterState.ACTIVE
  } else {
    state = YieldBoosterState.DEACTIVE
  }

  return {
    state,
    shouldUseProxyFarm: [
      YieldBoosterState.DEACTIVE,
      YieldBoosterState.ACTIVE,
      YieldBoosterState.MAX,
      YieldBoosterState.NO_LP,
      YieldBoosterState.LOCKED_END,
    ].includes(state),
    refreshActivePool,
    refreshProxyAddress,
    proxyAddress,
  }
}
