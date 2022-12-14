import { Flex, Text, IconButton, AddIcon, MinusIcon, useModal, Skeleton, Box } from '@plexswap/ui-plex'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from 'utils/formatBalance'
import { DeserializedPool, VaultKey } from 'state/types'
import { usePriceWayaBusd } from 'state/farms/hooks'
import { useVaultPoolByKey } from 'state/pools/hooks'
import Balance from 'components/Balance'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import VaultStakeModal from '../VaultStakeModal'
import ConvertToLock from '../../LockedPool/Common/ConvertToLock'

interface HasStakeActionProps {
  pool: DeserializedPool
  stakingTokenBalance: BigNumber
  performanceFee: number
}

const HasSharesActions: React.FC<React.PropsWithChildren<HasStakeActionProps>> = ({
  pool,
  stakingTokenBalance,
  performanceFee,
}) => {
  const {
    userData: {
      balance: { wayaAsBigNumber, wayaAsNumberBalance },
    },
  } = useVaultPoolByKey(pool.vaultKey)

  const { stakingToken } = pool

  const wayaPriceBusd = usePriceWayaBusd()
  const stakedDollarValue = wayaPriceBusd.gt(0)
    ? getBalanceNumber(wayaAsBigNumber.multipliedBy(wayaPriceBusd), stakingToken.decimals)
    : 0

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)
  const [onPresentStake] = useModal(
    <VaultStakeModal stakingMax={stakingTokenBalance} performanceFee={performanceFee} pool={pool} />,
  )
  const [onPresentUnstake] = useModal(
    <VaultStakeModal stakingMax={wayaAsBigNumber} pool={pool} isRemovingStake />,
    true,
    true,
    'withdraw-vault',
  )

  return (
    <>
      <Flex mb="16px" justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <Balance fontSize="20px" bold value={wayaAsNumberBalance} decimals={5} />
          <Text as={Flex} fontSize="12px" color="textSubtle" flexWrap="wrap">
            {wayaPriceBusd.gt(0) ? (
              <Balance
                value={stakedDollarValue}
                fontSize="12px"
                color="textSubtle"
                decimals={2}
                prefix="~"
                unit=" USD"
              />
            ) : (
              <Skeleton mt="1px" height={16} width={64} />
            )}
          </Text>
        </Flex>
        <Flex>
          <IconButton variant="secondary" onClick={onPresentUnstake} mr="6px">
            <MinusIcon color="primary" width="24px" />
          </IconButton>
          <IconButton variant="secondary" onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
            <AddIcon color="primary" width="24px" height="24px" />
          </IconButton>
        </Flex>
      </Flex>
      {pool.vaultKey === VaultKey.WayaVault && (
        <Box mb="16px">
          <ConvertToLock stakingToken={stakingToken} currentStakedAmount={wayaAsNumberBalance} />
        </Box>
      )}
    </>
  )
}

export default HasSharesActions
