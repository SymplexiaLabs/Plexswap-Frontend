import { Flex, Link, LinkExternal, Skeleton, Text, TimerIcon } from '@plexswap/ui-plex'
import Balance from 'components/Balance'
import AddToWalletButton, { AddToWalletTextOptions } from 'components/AddToWallet/AddToWalletButton'
import { BASE_BSC_SCAN_URL } from 'config'
import { useTranslation } from '@plexswap/localization'
import { memo } from 'react'
import { useCurrentBlock } from 'state/block/hooks'
import { useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedPool, VaultKey } from 'state/types'
import { getBlockExploreLink } from 'utils'
import { getAddress, getVaultPoolAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { getPoolBlockInfo } from 'views/Pools/helpers'
import MaxStakeRow from './MaxStakeRow'
import { AprInfo, DurationAvg, PerformanceFee, TotalLocked, TotalStaked } from './Stat'

interface ExpandedFooterProps {
  pool: DeserializedPool
  account: string
  showTotalStaked?: boolean
  alignLinksToRight?: boolean
}

const PoolStatsInfo: React.FC<React.PropsWithChildren<ExpandedFooterProps>> = ({
  pool,
  account,
  showTotalStaked = true,
  alignLinksToRight = true,
}) => {
  const { t } = useTranslation()
  const currentBlock = useCurrentBlock()

  const {
    stakingToken,
    earningToken,
    totalStaked,
    startBlock,
    endBlock,
    stakingLimit,
    stakingLimitEndBlock,
    contractAddress,
    vaultKey,
    isFinished,
    userData: poolUserData,
  } = pool

  const stakedBalance = poolUserData?.stakedBalance ? poolUserData.stakedBalance : BIG_ZERO

  const {
    totalWayaInVault,
    totalLockedAmount,
    fees: { performanceFeeAsDecimal },
    userData,
  } = useVaultPoolByKey(vaultKey)

  const tokenAddress = earningToken.address || ''
  const poolContractAddress = getAddress(contractAddress)
  const wayaVaultContractAddress = getVaultPoolAddress(vaultKey)

  const { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
    getPoolBlockInfo(pool, currentBlock)

  return (
    <>

      {!vaultKey && <AprInfo pool={pool} stakedBalance={stakedBalance} />}
      {showTotalStaked && (
        <TotalStaked totalStaked={vaultKey ? totalWayaInVault : totalStaked} stakingToken={stakingToken} />
      )}
      {vaultKey === VaultKey.WayaVault && <TotalLocked totalLocked={totalLockedAmount} lockedToken={stakingToken} />}
      {vaultKey === VaultKey.WayaVault && <DurationAvg />}
      {!isFinished && stakingLimit && stakingLimit.gt(0) && (
        <MaxStakeRow
          small
          currentBlock={currentBlock}
          hasPoolStarted={hasPoolStarted}
          stakingLimit={stakingLimit}
          stakingLimitEndBlock={stakingLimitEndBlock}
          stakingToken={stakingToken}
        />
      )}
      {shouldShowBlockCountdown && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          <Text small>{hasPoolStarted ? t('Ends in') : t('Starts in')}:</Text>
          {blocksRemaining || blocksUntilStart ? (
            <Flex alignItems="center">
              <Link external href={getBlockExploreLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
                <Balance small value={blocksToDisplay} decimals={0} color="primary" />
                <Text small ml="4px" color="primary" textTransform="lowercase">
                  {t('Blocks')}
                </Text>
                <TimerIcon ml="4px" color="primary" />
              </Link>
            </Flex>
          ) : (
            <Skeleton width="54px" height="21px" />
          )}
        </Flex>
      )}
      {vaultKey && <PerformanceFee userData={userData} performanceFeeAsDecimal={performanceFeeAsDecimal} />}
      <Flex mb="2px" justifyContent={alignLinksToRight ? 'flex-end' : 'flex-start'}>
        <LinkExternal href={`/info/token/${earningToken.address}`} bold={false} small>
          {t('See Token Info')}
        </LinkExternal>
      </Flex>
      {!vaultKey && (
        <Flex mb="2px" justifyContent={alignLinksToRight ? 'flex-end' : 'flex-start'}>
          <LinkExternal href={earningToken.projectLink} bold={false} small>
            {t('View Project Site')}
          </LinkExternal>
        </Flex>
      )}
      {vaultKey && (
        <Flex mb="2px" justifyContent={alignLinksToRight ? 'flex-end' : 'flex-start'}>
          <LinkExternal href="https://docs.plexfinance.us/products/crop-silos" bold={false} small>
            {t('View Tutorial')}
          </LinkExternal>
        </Flex>
      )}
      {poolContractAddress && (
        <Flex mb="2px" justifyContent={alignLinksToRight ? 'flex-end' : 'flex-start'}>
          <LinkExternal
            href={`${BASE_BSC_SCAN_URL}/address/${vaultKey ? wayaVaultContractAddress : poolContractAddress}`}
            bold={false}
            small
          >
            {t('View Contract')}
          </LinkExternal>
        </Flex>
      )}
      {account && tokenAddress && (
        <Flex justifyContent={alignLinksToRight ? 'flex-end' : 'flex-start'}>
          <AddToWalletButton
            variant="text"
            p="0"
            height="auto"
            style={{ fontSize: '14px', fontWeight: '400', lineHeight: 'normal' }}
            marginTextBetweenLogo="4px"
            textOptions={AddToWalletTextOptions.TEXT}
            tokenAddress={tokenAddress}
            tokenSymbol={earningToken.symbol}
            tokenDecimals={earningToken.decimals}
            tokenLogo={`https://tokens.plexswap.finance/images/${tokenAddress}.png`}
          />
        </Flex>
      )}
    </>
  )
}

export default memo(PoolStatsInfo)
