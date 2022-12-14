import BigNumber from 'bignumber.js'

import { CardBody, Flex, Text, CardRibbon } from '@plexswap/ui-plex'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@plexswap/localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { DeserializedPool } from 'state/types'
import { TokenPairImage } from 'components/TokenImage'
import AprRow from './AprRow'
import { StyledCard } from './StyledCard'
import CardFooter from './CardFooter'
import PoolCardHeader, { PoolCardHeaderTitle } from './PoolCardHeader'
import CardActions from './CardActions'

const PoolCard: React.FC<React.PropsWithChildren<{ pool: DeserializedPool; account: string }>> = ({
  pool,
  account,
}) => {
  const { poolId, stakingToken, earningToken, isFinished, userData } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)

  const isWayaPool = earningToken.symbol === 'WAYA' && stakingToken.symbol === 'WAYA'

  return (
    <StyledCard
      isFinished={isFinished && poolId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
    >
      <PoolCardHeader isStaking={accountHasStakedBalance} isFinished={isFinished && poolId !== 0}>
        <PoolCardHeaderTitle
          title={isWayaPool ? t('Manual') : t('Earn %asset%', { asset: earningToken.symbol })}
          subTitle={isWayaPool ? t('Earn WAYA, stake WAYA') : t('Stake %symbol%', { symbol: stakingToken.symbol })}
        />
        <TokenPairImage primaryToken={earningToken} secondaryToken={stakingToken} width={64} height={64} />
      </PoolCardHeader>
      <CardBody>
        <AprRow pool={pool} stakedBalance={stakedBalance} />
        <Flex mt="24px" flexDirection="column">
          {account ? (
            <CardActions pool={pool} stakedBalance={stakedBalance} />
          ) : (
            <>
              <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                {t('Start earning')}
              </Text>
              <ConnectWalletButton />
            </>
          )}
        </Flex>
      </CardBody>
      <CardFooter pool={pool} account={account} />
    </StyledCard>
  )
}

export default PoolCard
