import { ChainId, Token, WBNB } from '@plexswap/sdk'

const WAYA_BSC = new Token(
  ChainId.BSC,
  '0x0581c0dae41F19Fb4602E7ba0A803B7AE50f02E8',
  18,
  'WAYA',
  'PlexSwap Token',
  'https://swap.plexfinance.us/',
)

const WAYA_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xA2af2640A694f91632e60befc7Fc30C1b787D505',
  18,
  'WAYA',
  'PlexSwap Token',
  'https://swap.plexfinance.us/',
)

const PLEX_BSC = new Token(
  ChainId.BSC,
  '0xBB472510B1896C6992D658a7Ab69F7dF32a37b3c',
  9,
  'PLEX-F',
  'Symplexia Finance',
  'https://finance.symplexia.com/',
)

const PLEX_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xb7a3DFd16663dbA80c8f93338d1c59bA21680921',
  9,
  'PLEX-F',
  'Symplexia Finance',
  'https://finance.symplexia.com/',
)

export const WAYA = {
  [ChainId.BSC]: WAYA_BSC,
  [ChainId.BSC_TESTNET]: WAYA_TESTNET,
}

export const PLEX = {
  [ChainId.BSC]: PLEX_BSC,
  [ChainId.BSC_TESTNET]: PLEX_TESTNET,
}

const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const USDC_ETH = new Token(
  ChainId.ETHEREUM, 
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 
  6, 
  'USDC', 
  'USD Coin'
  )

const USDC_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
  6,
  'tUSDC',
  'test USD Coin',
)

const USDC_GOERLI = new Token(
  ChainId.GOERLI, 
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', 
  6, 
  'tUSDC', 
  'test USD Coin'
  )

const USDT_BSC = new Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.RINKEBY]: USDC_RINKEBY,
  [ChainId.GOERLI]: USDC_GOERLI,
}

const BUSD_BSC = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.RINKEBY]: BUSD_RINKEBY,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const bscTokens = {
  wbnb: WBNB[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'BNB',
    'BNB',
    'https://www.binance.com/',
  ),

  waya: WAYA_BSC,
  plex: PLEX_BSC,
  busd: BUSD_BSC,
  usdc: USDC_BSC,

  dai: new Token(
    ChainId.BSC,
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  usdt: USDT_BSC,
  btcb: new Token(
    ChainId.BSC,
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    18,
    'BTCB',
    'Binance BTC',
    'https://bitcoin.org/',
  ),
  ust: new Token(
    ChainId.BSC,
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    18,
    'UST',
    'Wrapped UST Token',
    'https://mirror.finance/',
  ),
  eth: new Token(
    ChainId.BSC,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'ETH',
    'Binance-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  ctk: new Token(
    ChainId.BSC,
    '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
    6,
    'CTK',
    'Certik Token',
    'https://www.certik.foundation/',
  ),
  ada: new Token(
    ChainId.BSC,
    '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    18,
    'ADA',
    'Binance-Peg Cardano Token',
    'https://www.cardano.org/',
  ),
  doge: new Token(
    ChainId.BSC,
    '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    8,
    'DOGE',
    'Binance-Peg Dogecoin',
    'https://dogecoin.com/',
  ),

}

export const bscTestnetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  waya: WAYA_TESTNET,
  plex: PLEX_TESTNET,
  busd: BUSD_TESTNET,
  usdc: USDC_TESTNET,
}
