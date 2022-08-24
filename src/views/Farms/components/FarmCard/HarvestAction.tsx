import { Button, Flex, Heading, TooltipText, useTooltip } from '@plexswap/ui-plex'
import { useWeb3React } from '@plexswap/wagmi'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'
import { useTranslation } from '@plexswap/localization'
import { ToastDescriptionWithTx } from 'components/Toast'
import useToast from 'hooks/useToast'
import useCatchTxError from 'hooks/useCatchTxError'

import { usePriceWayaBusd } from 'state/farms/hooks'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { TransactionResponse } from '@ethersproject/providers'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  onReward?: () => Promise<TransactionResponse>
  proxyWayaBalance?: number
  onDone?: () => void
}

const HarvestAction: React.FC<React.PropsWithChildren<FarmCardActionsProps>> = ({
  earnings,
  onReward,
  proxyWayaBalance,
  onDone,
}) => {
  const { account } = useWeb3React()
  const { toastSuccess } = useToast()
  const { fetchWithCatchTxError, loading: pendingTx } = useCatchTxError()
  const { t } = useTranslation()
  const wayaPrice = usePriceWayaBusd()
  const rawEarningsBalance = account ? getBalanceAmount(earnings) : BIG_ZERO
  const displayBalance = rawEarningsBalance.toFixed(5, BigNumber.ROUND_DOWN)
  const earningsBusd = rawEarningsBalance ? rawEarningsBalance.multipliedBy(wayaPrice).toNumber() : 0
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    `${displayBalance} ${t(
      `WAYA has been harvested to the farm booster contract and will be automatically sent to your wallet upon the next harvest.`,
    )}`,
    {
      placement: 'bottom',
    },
  )
  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Flex flexDirection="column" alignItems="flex-start">
        {proxyWayaBalance ? (
          <>
            <TooltipText ref={targetRef} decorationColor="secondary">
              <Heading color={rawEarningsBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
            </TooltipText>
            {tooltipVisible && tooltip}
          </>
        ) : (
          <Heading color={rawEarningsBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
        )}
        {earningsBusd > 0 && (
          <Balance fontSize="12px" color="textSubtle" decimals={2} value={earningsBusd} unit=" USD" prefix="~" />
        )}
      </Flex>
      <Button
        disabled={rawEarningsBalance.eq(0) || pendingTx}
        onClick={async () => {
          const receipt = await fetchWithCatchTxError(() => {
            return onReward()
          })
          if (receipt?.status) {
            toastSuccess(
              `${t('Harvested')}!`,
              <ToastDescriptionWithTx txHash={receipt.transactionHash}>
                {t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'WAYA' })}
              </ToastDescriptionWithTx>,
            )
            onDone?.()
          }
        }}
      >
        {pendingTx ? t('Harvesting') : t('Harvest')}
      </Button>
    </Flex>
  )
}

export default HarvestAction
