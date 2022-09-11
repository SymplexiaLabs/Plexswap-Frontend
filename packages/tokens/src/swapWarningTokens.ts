import { Token } from '@plexswap/sdk'
import { bscWarningTokens } from './warningTokens'

const { safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

export const SwapWarningTokens = <WarningTokenList>{
  safemoon,
}


