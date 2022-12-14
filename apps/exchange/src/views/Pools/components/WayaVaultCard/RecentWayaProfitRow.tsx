import { Flex, Text } from '@plexswap/ui-plex'
import { useWeb3React } from '@plexswap/wagmi'
import { useTranslation } from '@plexswap/localization'
import { usePriceWayaBusd } from 'state/farms/hooks'
import { useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedPool, VaultKey, DeserializedLockedVaultUser } from 'state/types'
import { getWayaVaultEarnings } from 'views/Pools/helpers'
import RecentWayaProfitBalance from './RecentWayaProfitBalance'

const RecentWayaProfitCountdownRow = ({ pool }: { pool: DeserializedPool }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { pricePerFullShare, userData } = useVaultPoolByKey(pool.vaultKey)
  const wayaPriceBusd = usePriceWayaBusd()
  const { hasAutoEarnings, autoWayaToDisplay } = getWayaVaultEarnings(
    account,
    userData.wayaAtLastUserAction,
    userData.userShares,
    pricePerFullShare,
    wayaPriceBusd.toNumber(),
    pool.vaultKey === VaultKey.WayaVault
      ? (userData as DeserializedLockedVaultUser).currentPerformanceFee.plus(
          (userData as DeserializedLockedVaultUser).currentOverdueFee,
        )
      : null,
  )

  if (!(userData.userShares.gt(0) && account)) {
    return null
  }

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent WAYA profit')}:`}</Text>
      {hasAutoEarnings && <RecentWayaProfitBalance wayaToDisplay={autoWayaToDisplay} pool={pool} account={account} />}
    </Flex>
  )
}

export default RecentWayaProfitCountdownRow
