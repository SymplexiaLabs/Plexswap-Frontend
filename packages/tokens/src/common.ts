import { ChainId, Token } from '@plexswap/sdk'


export const WAYA_BSC = new Token(
  ChainId.BSC,
  '0x32d9F70F6eF86718A51021ad269522Abf4CFFE49',
  18,
  'WAYA',
  'PlexSwap Token',
  'https://swap.plexfinance.us/',
)

export const WAYA_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xA2af2640A694f91632e60befc7Fc30C1b787D505',
  18,
  'WAYA',
  'PlexSwap Token',
  'https://swap.plexfinance.us/',
)

export const WAYA_GOERLI = new Token(
  ChainId.GOERLI,
  '0x2b82d6d89F5786C6A0fFab86b5F7F0532d5F19e4',
  18,
  'WAYA',
  'PlexSwap Token',
  'https://swap.plexfinance.us/',
)

export const PLEX_BSC = new Token(
  ChainId.BSC,
  '0xBB472510B1896C6992D658a7Ab69F7dF32a37b3c',
  9,
  'PLEX-F',
  'Symplexia Finance',
  'https://plexfinance.us/',
)

export const PLEX_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xb7a3DFd16663dbA80c8f93338d1c59bA21680921',
  9,
  'PLEX-F',
  'Symplexia Finance',
  'https://plexfinance.us/',
)

export const PLEX_GOERLI = new Token(
  ChainId.GOERLI,
  '0xE95AF82Bc998D2f05aD76a2F1B404756DCfc0b8a',
  9,
  'PLEX-F',
  'Symplexia Finance',
  'https://plexfinance.us/',
)

export const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new Token(
  ChainId.ETHEREUM, 
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 
  6, 
  'USDC', 
  'USD Coin'
)

export const USDC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x8516Fc284AEEaa0374E66037BD2309349FF728eA',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const WAYA = {
  [ChainId.BSC]: WAYA_BSC,
  [ChainId.BSC_TESTNET]: WAYA_TESTNET,
  [ChainId.GOERLI]: WAYA_GOERLI,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
}
