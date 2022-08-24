import { TooltipText, useTooltip } from '@plexswap/ui-plex'
import { DeserializedPool } from 'state/types'
import Balance from 'components/Balance'
import AutoEarningsBreakdown from '../AutoEarningsBreakdown'

interface RecentWayaProfitBalanceProps {
  wayaToDisplay: number
  pool: DeserializedPool
  account: string
}

const RecentWayaProfitBalance: React.FC<RecentWayaProfitBalanceProps> = ({ wayaToDisplay, pool, account }) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(<AutoEarningsBreakdown pool={pool} account={account} />, {
    placement: 'bottom-end',
  })

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={wayaToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentWayaProfitBalance
