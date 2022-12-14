import { Box, CardBody, CardProps, Flex, Text, TokenPairImage } from '@plexswap/ui-plex'
import { useWeb3React } from '@plexswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { FlexGap } from 'components/Layout/Flex'
import { vaultPoolConfig } from 'config/constants/pools'
import { useTranslation } from '@plexswap/localization'
import { useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedPool, VaultKey, DeserializedLockedWayaVault, DeserializedWayaVault } from 'state/types'
import styled from 'styled-components'

import CardFooter from '../PoolCard/CardFooter'
import PoolCardHeader, { PoolCardHeaderTitle } from '../PoolCard/PoolCardHeader'
import { StyledCard } from '../PoolCard/StyledCard'
import { VaultPositionTagWithLabel } from '../Vault/VaultPositionTag'
import UnstakingFeeCountdownRow from './UnstakingFeeCountdownRow'
import RecentWayaProfitRow from './RecentWayaProfitRow'
import { StakingApy } from './StakingApy'
import VaultCardActions from './VaultCardActions'
import LockedStakingApy from '../LockedPool/LockedStakingApy'

const StyledCardBody = styled(CardBody)<{ isLoading: boolean }>`
  min-height: ${({ isLoading }) => (isLoading ? '0' : '254px')};
`

interface WayaVaultProps extends CardProps {
  pool: DeserializedPool
  showStakedOnly: boolean
  defaultFooterExpanded?: boolean
  showIWaya?: boolean
}

interface WayaVaultDetailProps {
  isLoading?: boolean
  account: string
  pool: DeserializedPool
  vaultPool: DeserializedWayaVault
  accountHasSharesStaked: boolean
  defaultFooterExpanded?: boolean
  showIWaya?: boolean
  performanceFeeAsDecimal: number
}

export const WayaVaultDetail: React.FC<React.PropsWithChildren<WayaVaultDetailProps>> = ({
  isLoading = false,
  account,
  pool,
  vaultPool,
  accountHasSharesStaked,
  showIWaya,
  performanceFeeAsDecimal,
  defaultFooterExpanded,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <StyledCardBody isLoading={isLoading}>
        {account && pool.vaultKey === VaultKey.WayaVault && (
          <VaultPositionTagWithLabel userData={(vaultPool as DeserializedLockedWayaVault).userData} />
        )}
        {account &&
        pool.vaultKey === VaultKey.WayaVault &&
        (vaultPool as DeserializedLockedWayaVault).userData.locked ? (
          <LockedStakingApy
            userData={(vaultPool as DeserializedLockedWayaVault).userData}
            stakingToken={pool?.stakingToken}
            stakingTokenBalance={pool?.userData?.stakingTokenBalance}
            showIWaya={showIWaya}
          />
        ) : (
          <>
            <StakingApy pool={pool} />
            <FlexGap mt="16px" gap="24px" flexDirection={accountHasSharesStaked ? 'column-reverse' : 'column'}>
              <Box>
                {account && (
                  <Box mb="8px">
                    <UnstakingFeeCountdownRow vaultKey={pool.vaultKey} />
                  </Box>
                )}
                <RecentWayaProfitRow pool={pool} />
              </Box>
              <Flex flexDirection="column">
                {account ? (
                  <VaultCardActions
                    pool={pool}
                    accountHasSharesStaked={accountHasSharesStaked}
                    isLoading={isLoading}
                    performanceFee={performanceFeeAsDecimal}
                  />
                ) : (
                  <>
                    <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                      {t('Start earning')}
                    </Text>
                    <ConnectWalletButton />
                  </>
                )}
              </Flex>
            </FlexGap>
          </>
        )}
      </StyledCardBody>
      <CardFooter defaultExpanded={defaultFooterExpanded} pool={pool} account={account} />
    </>
  )
}

const WayaVaultCard: React.FC<React.PropsWithChildren<WayaVaultProps>> = ({
  pool,
  showStakedOnly,
  defaultFooterExpanded,
  showIWaya = false,
  ...props
}) => {
  const { account } = useWeb3React()

  const vaultPool = useVaultPoolByKey(pool.vaultKey)

  const {
    userData: { userShares, isLoading: isVaultUserDataLoading },
    fees: { performanceFeeAsDecimal },
  } = vaultPool

  const accountHasSharesStaked = userShares && userShares.gt(0)
  const isLoading = !pool.userData || isVaultUserDataLoading

  if (showStakedOnly && !accountHasSharesStaked) {
    return null
  }

  return (
    <StyledCard isActive {...props}>
      <PoolCardHeader isStaking={accountHasSharesStaked}>
        <PoolCardHeaderTitle
          title={vaultPoolConfig[pool.vaultKey].name}
          subTitle={vaultPoolConfig[pool.vaultKey].description}
        />
        <TokenPairImage {...vaultPoolConfig[pool.vaultKey].tokenImage} width={64} height={64} />
      </PoolCardHeader>
      <WayaVaultDetail
        isLoading={isLoading}
        account={account}
        pool={pool}
        vaultPool={vaultPool}
        accountHasSharesStaked={accountHasSharesStaked}
        showIWaya={showIWaya}
        performanceFeeAsDecimal={performanceFeeAsDecimal}
        defaultFooterExpanded={defaultFooterExpanded}
      />
    </StyledCard>
  )
}

export default WayaVaultCard
