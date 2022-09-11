import { Token } from '@plexswap/sdk'
import { SwapWarningTokens } from '@plexswap/tokens'

const swapWarningTokens = Object.values(SwapWarningTokens)

const shouldShowSwapWarning = (swapCurrency: Token) => {
  return swapWarningTokens.some((warningToken) => warningToken.equals(swapCurrency))
}

export default shouldShowSwapWarning
