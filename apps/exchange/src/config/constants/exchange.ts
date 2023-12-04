import { JSBI, Percent, Token, WNATIVE } from '@plexswap/sdk'
import { ChainId } from '@plexswap/chains'
import { BigNumber } from '@ethersproject/bignumber'
import { plexchainTokens, bscTokens, bscTestnetTokens, USDC, USDT, BUSD, WAYA_BSC } from '@plexswap/tokens'
import { ChainMap, ChainTokenList } from './types'

export const ROUTER_ADDRESS: ChainMap<string> = {
  [ChainId.GOERLI]: '0x86bbDDBa250C1a76E4671C3A37Efd1B8D66356cb',
  [ChainId.BSC]: '0x205ce30FB7Ef4173f05979421a73Def4f6983C47',
  [ChainId.BSC_TESTNET]: '0x995214A87ADAdbe30e7132BC269AF996004BA48D',
  [ChainId.PLEXCHAIN]: '0x7E961C57bFEE77716d1E46D2e942347CfdEaD8DF',
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.GOERLI]: [WNATIVE[ChainId.GOERLI], USDC[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.BSC]: [
    bscTokens.wbnb,
    bscTokens.waya,
    bscTokens.busd,
    bscTokens.usdt,
    bscTokens.btcb,
    bscTokens.eth,
    bscTokens.usdc,
  ],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.waya, bscTestnetTokens.busd],
  [ChainId.PLEXCHAIN]: [plexchainTokens.wplex, plexchainTokens.waya, plexchainTokens.usdp],
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.BSC]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.BSC]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.BSC]: [bscTokens.busd, bscTokens.plexf, bscTokens.waya],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.plexf, bscTestnetTokens.waya],
  [ChainId.PLEXCHAIN]: [plexchainTokens.usdp,plexchainTokens.plexf, plexchainTokens.waya],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.BSC]: [bscTokens.wbnb, bscTokens.dai, bscTokens.busd, bscTokens.usdt, bscTokens.waya],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.waya, bscTestnetTokens.busd],
  [ChainId.PLEXCHAIN]: [plexchainTokens.wplex, plexchainTokens.waya, plexchainTokens.usdp],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.BSC]: [
    [bscTokens.waya, bscTokens.wbnb],
    [bscTokens.busd, bscTokens.usdt],
    [bscTokens.dai, bscTokens.usdt],
  ],
  [ChainId.PLEXCHAIN]: [
    [plexchainTokens.waya, plexchainTokens.wplex],
    [plexchainTokens.wplex, plexchainTokens.usdp],
  ],
}

export const BIG_INT_ZERO = JSBI.BigInt(0)
export const BIG_INT_TEN = JSBI.BigInt(10)

// one basis point
export const BIPS_BASE = JSBI.BigInt(10000)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), BIPS_BASE)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(BIG_INT_TEN, JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), BIPS_BASE)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const BASE_FEE = new Percent(JSBI.BigInt(25), BIPS_BASE)
export const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE)

// BNB
export const DEFAULT_INPUT_CURRENCY = 'BNB'
// WAYA
export const DEFAULT_OUTPUT_CURRENCY = WAYA_BSC.address

// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'pancakeswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = BigNumber.from(500000)

export const LIMIT_ORDERS_DOCS_URL = 'https://docs.plexfinance.us/products/exchange/limit-orders'
