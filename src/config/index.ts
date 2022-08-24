import { ChainId } from '@plexswap/sdk'
import { BIG_TEN } from 'utils/bigNumber'

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.BSC]: 'https://bscscan.com',
  [ChainId.BSC_TESTNET]: 'https://testnet.bscscan.com',
}


// WAYA_PER_BLOCK in config/index.ts = 10
// WAYA/Block in src/views/Home/components/WayaDataRow.tsx = 10

export const WAYA_PER_BLOCK = 10
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000
export const WAYA_PER_YEAR = WAYA_PER_BLOCK * BLOCKS_PER_YEAR
export const BASE_URL = 'https://swap.plexfinance.us'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.BSC]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 250000
export const BOOSTED_FARM_GAS_LIMIT = 500000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
