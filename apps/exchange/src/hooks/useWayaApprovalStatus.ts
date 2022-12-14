import { useMemo } from 'react'
import { useWeb3React } from '@plexswap/wagmi'
import { useWaya } from 'hooks/useContract'
import { useSWRContract, UseSWRContractKey } from 'hooks/useSWRContract'

// TODO: refactor as useTokenApprovalStatus for generic use

export const useWayaApprovalStatus = (spender) => {
  const { account } = useWeb3React()
  const { reader: wayaContract } = useWaya()

  const key = useMemo<UseSWRContractKey>(
    () =>
      account && spender
        ? {
            contract: wayaContract,
            methodName: 'allowance',
            params: [account, spender],
          }
        : null,
    [account, wayaContract, spender],
  )

  const { data, mutate } = useSWRContract(key)

  return { isVaultApproved: data ? data.gt(0) : false, setLastUpdated: mutate }
}

export default useWayaApprovalStatus
