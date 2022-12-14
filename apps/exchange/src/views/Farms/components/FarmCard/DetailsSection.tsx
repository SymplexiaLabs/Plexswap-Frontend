import { useTranslation } from '@plexswap/localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Skeleton } from '@plexswap/ui-plex'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const tutorial = "https://docs.plexfinance.us/products/yield-farming/how-to-use-farms"

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<React.PropsWithChildren<ExpandableSectionProps>> = ({
  bscScanAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const {
    t,
  } = useTranslation()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{t('Total Liquidity')}:</Text>
        {totalValueFormatted ? <Text>{totalValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>{t('Get %symbol%', { symbol: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal href={bscScanAddress}>{t('View Contract')}</StyledLinkExternal>
      <StyledLinkExternal href={tutorial}>{t('View Tutorial')}</StyledLinkExternal>
    </Wrapper>
  )
}

export default DetailsSection
