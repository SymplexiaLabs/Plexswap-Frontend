const PANCAKE_TOP100 = 'https://tokens.pancakeswap.finance/pancakeswap-top-100.json'
const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
const CMC = 'https://s3.coinmarketcap.com/generated/dex/tokens/bsc-tokens-all.json'

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_TOP100]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCAKE_TOP100,
  CMC,
  COINGECKO,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
