import { Token } from '@plexswap/sdk'
import { bscWarningTokens } from 'config/constants/warningTokens'

const { safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
}

export default SwapWarningTokens
