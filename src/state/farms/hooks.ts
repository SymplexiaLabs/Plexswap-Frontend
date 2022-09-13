import BigNumber from 'bignumber.js'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { SLOW_INTERVAL } from 'config/constants'
import { useWayaBusdPrice } from 'hooks/useBUSDPrice'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import useSWRImmutable from 'swr/immutable'
import { BIG_ZERO } from 'utils/bigNumber'
import { useBWayaProxyContractAddress } from 'views/Farms/hooks/useBWayaProxyContractAddress'
import { getChiefFarmerContract } from 'utils/contractHelpers'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { featureFarmApiAtom, useFeatureFlag } from 'hooks/useFeatureFlag'
import { getFarmConfig, coreFarmPIDs } from '@plexswap/farms/config'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, fetchInitialFarmsData } from '.'
import { DeserializedFarm, DeserializedFarmsState, DeserializedFarmUserData, State } from '../types'
import {
  farmFromLpSymbolSelector,
  farmSelector,
  makeBusdPriceFromPidSelector,
  makeFarmFromPidSelector,
  makeLpTokenPriceFromLpSymbolSelector,
  makeUserFarmFromPidSelector,
} from './selectors'

export function useFarmsLength() {
  const { chainId } = useActiveWeb3React()
  return useSWRImmutable(chainId ? ['farmsLength', chainId] : null, async () => {
    const chieffarmer = getChiefFarmerContract(undefined, chainId)
    return (await chieffarmer.poolLength()).toNumber()
  })
}

export const usePollFarmsWithUserData = () => {
  const dispatch = useAppDispatch()
  const { account, chainId } = useActiveWeb3React()
  const { proxyAddress } = useBWayaProxyContractAddress(account)
 const farmFlag = useFeatureFlag(featureFarmApiAtom)

  useSWRImmutable(
    chainId ? ['publicFarmData', chainId] : null,
    async () => {
      const farmsConfig = await getFarmConfig(chainId)
      const pids = farmsConfig.map((farmToFetch) => farmToFetch.pid)
      dispatch(fetchFarmsPublicDataAsync({ pids, chainId, flag: farmFlag }))
    },
    {
      refreshInterval: farmFlag === 'api' ? 50 * 1000 : SLOW_INTERVAL,
    },
  )

  const name = proxyAddress
    ? ['farmsWithUserData', account, proxyAddress, chainId]
    : ['farmsWithUserData', account, chainId]

  useSWRImmutable(
    account && chainId ? name : null,
    async () => {
      const farmsConfig = await getFarmConfig(chainId)
      const pids = farmsConfig.map((farmToFetch) => farmToFetch.pid)
      const params = proxyAddress ? { account, pids, proxyAddress, chainId } : { account, pids, chainId }

      dispatch(fetchFarmUserDataAsync(params))
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )
}

export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { chainId } = useActiveWeb3React()
  const farmFlag = useFeatureFlag(featureFarmApiAtom)

  useEffect(() => {
    if (chainId) {
      dispatch(fetchInitialFarmsData({ chainId }))
    }
  }, [chainId, dispatch])

  useFastRefreshEffect(() => {
    if (chainId && farmFlag !== 'api') {
      dispatch(fetchFarmsPublicDataAsync({ pids: coreFarmPIDs[chainId], chainId, flag: farmFlag }))
    }
  }, [dispatch, chainId, farmFlag])
}

export const useFarms = (): DeserializedFarmsState => {
  const { chainId } = useActiveWeb3React()
  return useSelector(farmSelector(chainId))
}

export const useFarmsPoolLength = (): number => {
  return useSelector((state: State) => state.farms.poolLength)
}

export const useFarmFromPid = (pid: number): DeserializedFarm => {
  const farmFromPid = useMemo(() => makeFarmFromPidSelector(pid), [pid])
  return useSelector(farmFromPid)
}

export const useFarmFromLpSymbol = (lpSymbol: string): DeserializedFarm => {
  const farmFromLpSymbol = useMemo(() => farmFromLpSymbolSelector(lpSymbol), [lpSymbol])
  return useSelector(farmFromLpSymbol)
}

export const useFarmUser = (pid): DeserializedFarmUserData => {
  const farmFromPidUser = useMemo(() => makeUserFarmFromPidSelector(pid), [pid])
  return useSelector(farmFromPidUser)
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  const busdPriceFromPid = useMemo(() => makeBusdPriceFromPidSelector(pid), [pid])
  return useSelector(busdPriceFromPid)
}

export const useLpTokenPrice = (symbol: string) => {
  const lpTokenPriceFromLpSymbol = useMemo(() => makeLpTokenPriceFromLpSymbolSelector(symbol), [symbol])
  return useSelector(lpTokenPriceFromLpSymbol)
}

/**
 * @deprecated use the BUSD hook in /hooks
 */
export const usePriceWayaBusd = ({ forceMainnet } = { forceMainnet: false }): BigNumber => {
  const price = useWayaBusdPrice({ forceMainnet })
  return useMemo(() => (price ? new BigNumber(price.toSignificant(6)) : BIG_ZERO), [price])
}
