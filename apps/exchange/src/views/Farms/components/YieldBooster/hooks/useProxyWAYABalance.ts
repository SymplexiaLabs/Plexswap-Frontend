import { useWeb3React } from '@plexswap/wagmi'
import { useSWRContract } from 'hooks/useSWRContract'
import { getWayaContract } from 'utils/contractHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarmBoosterProxyContractAddress } from 'views/Farms/hooks/useFarmBoosterProxyContractAddress'
import BigNumber from 'bignumber.js'

const useProxyWAYABalance = () => {
  const { account } = useWeb3React()
  const { proxyAddress } = useFarmBoosterProxyContractAddress(account)
  const wayaContract = getWayaContract()

  const { data, mutate } = useSWRContract([wayaContract, 'balanceOf', [proxyAddress]])

  return {
    refreshProxyWayaBalance: mutate,
    proxyWayaBalance: data ? getBalanceNumber(new BigNumber(data.toString())) : 0,
  }
}

export default useProxyWAYABalance
