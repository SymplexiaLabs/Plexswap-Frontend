import useSWR from 'swr'
import { NO_PROXY_CONTRACT } from 'config/constants'
import { useFarmBoosterContract } from 'hooks/useContract'
import { FetchStatus } from 'config/constants/types'

export const useBWayaProxyContractAddress = (account?: string) => {
  const farmBoosterContract = useFarmBoosterContract()
  const { data, status, mutate } = useSWR(account && ['proxyAddress', account], async () =>
    farmBoosterContract.proxyContract(account),
  )

  return {
    proxyAddress: data,
    isLoading: status !== FetchStatus.Fetched,
    proxyCreated: data && data !== NO_PROXY_CONTRACT,
    refreshProxyAddress: mutate,
  }
}
