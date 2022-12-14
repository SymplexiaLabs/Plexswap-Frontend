import styled from 'styled-components'
import ApyButton from 'views/Farms/components/FarmCard/ApyButton'
import BigNumber from 'bignumber.js'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Skeleton } from '@plexswap/ui-plex'

export interface AprProps {
  value: string
  multiplier: string
  pid: number
  lpLabel: string
  lpSymbol: string
  lpRewardsApr: number
  tokenAddress?: string
  quoteTokenAddress?: string
  wayaPrice: BigNumber
  originalValue: number
  hideButton?: boolean
  strikethrough?: boolean
  useTooltipText?: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Apr: React.FC<React.PropsWithChildren<AprProps>> = ({
  value,
  pid,
  lpLabel,
  lpSymbol,
  multiplier,
  tokenAddress,
  quoteTokenAddress,
  wayaPrice,
  originalValue,
  hideButton = false,
  strikethrough,
  lpRewardsApr,
  useTooltipText = true,
}) => {
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAddress, tokenAddress })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  return originalValue !== 0 ? (
    <Container>
      {originalValue ? (
        <ApyButton
          variant={hideButton ? 'text' : 'text-and-button'}
          pid={pid}
          lpSymbol={lpSymbol}
          lpLabel={lpLabel}
          multiplier={multiplier}
          wayaPrice={wayaPrice}
          apr={originalValue}
          displayApr={value}
          lpRewardsApr={lpRewardsApr}
          addLiquidityUrl={addLiquidityUrl}
          strikethrough={strikethrough}
          useTooltipText={useTooltipText}
          hideButton={hideButton}
        />
      ) : (
        <AprWrapper>
          <Skeleton width={60} />
        </AprWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <AprWrapper>{originalValue}%</AprWrapper>
    </Container>
  )
}

export default Apr
