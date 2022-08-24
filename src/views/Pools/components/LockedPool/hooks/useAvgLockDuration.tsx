import { useMemo } from 'react'
import { BOOST_WEIGHT, DURATION_FACTOR } from 'config/constants/pools'
import BigNumber from 'bignumber.js'
import _toNumber from 'lodash/toNumber'
import { useWayaVault } from 'state/pools/hooks'
import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'

import formatSecondsToWeeks from '../../utils/formatSecondsToWeeks'

export default function useAvgLockDuration() {
  const { totalLockedAmount, totalShares, totalWayaInVault, pricePerFullShare } = useWayaVault()

  const avgLockDurationsInSeconds = useMemo(() => {
    const flexibleWayaAmount = totalWayaInVault.minus(totalLockedAmount)
    const flexibleWayaShares = flexibleWayaAmount.div(pricePerFullShare).times(getFullDecimalMultiplier(18))
    const lockedWayaBoostedShares = totalShares.minus(flexibleWayaShares)
    const lockedWayaOriginalShares = totalLockedAmount.div(pricePerFullShare).times(getFullDecimalMultiplier(18))
    const avgBoostRatio = lockedWayaBoostedShares.div(lockedWayaOriginalShares)

    return avgBoostRatio
      .minus(1)
      .times(new BigNumber(DURATION_FACTOR.toString()))
      .div(new BigNumber(BOOST_WEIGHT.toString()).div(getFullDecimalMultiplier(12)))
      .toFixed(0)
  }, [totalWayaInVault, totalLockedAmount, pricePerFullShare, totalShares])

  const avgLockDurationsInWeeks = useMemo(
    () => formatSecondsToWeeks(avgLockDurationsInSeconds),
    [avgLockDurationsInSeconds],
  )

  return {
    avgLockDurationsInWeeks,
    avgLockDurationsInSeconds: _toNumber(avgLockDurationsInSeconds),
  }
}
