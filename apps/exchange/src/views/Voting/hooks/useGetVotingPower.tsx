import { ChainId } from '@plexswap/chains'
import { useWeb3React } from '@plexswap/wagmi'
import { FetchStatus } from 'config/constants/types'
import useSWRImmutable from 'swr/immutable'
import { getAddress } from 'utils/addressHelpers'
import { getActivePools } from 'utils/calls'
import { bscRpcProvider } from 'config/constants/providers'
import { getVotingPower } from '../helpers'

interface State {
  wayaBalance?: number
  wayaVaultBalance?: number
  wayaPoolBalance?: number
  poolsBalance?: number
  wayaBnbLpBalance?: number

  total: number
  lockedWayaBalance?: number
  lockedEndTime?: number
}

const useGetVotingPower = (block?: number, isActive = true): State & { isLoading: boolean; isError: boolean } => {
  const { account } = useWeb3React()
  const { data, status, error } = useSWRImmutable(
    account && isActive ? [account, block, 'votingPower'] : null,
    async () => {
      const blockNumber = block || (await bscRpcProvider.getBlockNumber())
      const eligiblePools = await getActivePools(blockNumber)
      const poolAddresses = eligiblePools.map(({ contractAddress }) => getAddress(contractAddress, ChainId.BSC))
      const {
        wayaBalance,
        wayaBnbLpBalance,
        wayaPoolBalance,
        total,
        poolsBalance,
        wayaVaultBalance,

        lockedWayaBalance,
        lockedEndTime,
      } = await getVotingPower(account, poolAddresses, blockNumber)
      return {
        wayaBalance,
        wayaBnbLpBalance,
        wayaPoolBalance,
        poolsBalance,
        wayaVaultBalance,

        total,
        lockedWayaBalance,
        lockedEndTime,
      }
    },
  )
  if (error) console.error(error)

  return { ...data, isLoading: status !== FetchStatus.Fetched, isError: status === FetchStatus.Failed }
}

export default useGetVotingPower
