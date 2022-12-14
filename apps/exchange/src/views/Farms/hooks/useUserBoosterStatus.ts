import { FetchStatus } from 'config/constants/types'
import { useFarmBoosterContract } from 'hooks/useContract'
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

export const useUserBoosterStatus = (account: string) => {
  const farmBoosterContract = useFarmBoosterContract()
  const { data: MAX_BOOST_FARM_QTD, status: maxBoostStatus } = useSWRImmutable('maxBoostFarm', () =>
    farmBoosterContract.MAX_BOOST_FARM_QTD(),
  )
  const {
    data: activatedPools,
    status,
    mutate,
  } = useSWR(account && ['activatedBoostFarm', [account]], () => farmBoosterContract.activedPools(account))

  return {
    maxBoostCounts: MAX_BOOST_FARM_QTD?.toNumber() ?? 0,
    activatedPoolsCounts: activatedPools?.length ?? 0,
    remainingCounts: (MAX_BOOST_FARM_QTD?.toNumber() ?? 0) - (activatedPools?.length ?? 0),
    isLoading: maxBoostStatus !== FetchStatus.Fetched || status !== FetchStatus.Fetched,
    refreshActivePools: mutate,
  }
}
