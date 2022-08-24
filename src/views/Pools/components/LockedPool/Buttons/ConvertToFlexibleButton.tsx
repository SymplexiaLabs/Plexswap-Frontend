import { memo, useCallback } from 'react'
import { Button, ButtonProps } from '@plexswap/ui-plex'
import { useTranslation } from '@plexswap/localization'

import { useAppDispatch } from 'state'
import { fetchWayaVaultUserData } from 'state/pools'
import useToast from 'hooks/useToast'
import useCatchTxError from 'hooks/useCatchTxError'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { useVaultPoolContract } from 'hooks/useContract'
import { useWeb3React } from '@plexswap/wagmi'
import { ToastDescriptionWithTx } from 'components/Toast'
import { vaultPoolConfig } from 'config/constants/pools'
import { VaultKey } from 'state/types'

const ConvertToFlexibleButton: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const dispatch = useAppDispatch()

  const { account } = useWeb3React()
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const vaultPoolContract = useVaultPoolContract(VaultKey.WayaVault)
  const { callWithGasPrice } = useCallWithGasPrice()
  const { t } = useTranslation()
  const { toastSuccess } = useToast()

  const handleUnlock = useCallback(async () => {
    const callOptions = {
      gasLimit: vaultPoolConfig[VaultKey.WayaVault].gasLimit,
    }

    const receipt = await fetchWithCatchTxError(() => {
      const methodArgs = [account]
      return callWithGasPrice(vaultPoolContract, 'unlock', methodArgs, callOptions)
    })

    if (receipt?.status) {
      toastSuccess(
        t('Staked!'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your funds have been staked in the pool')}
        </ToastDescriptionWithTx>,
      )
      dispatch(fetchWayaVaultUserData({ account }))
    }
  }, [t, toastSuccess, account, callWithGasPrice, dispatch, fetchWithCatchTxError, vaultPoolContract])

  return (
    <Button width="100%" disabled={pendingTx} onClick={handleUnlock} {...props}>
      {pendingTx ? t('Converting...') : t('Convert to Flexible')}
    </Button>
  )
}

export default memo(ConvertToFlexibleButton)
