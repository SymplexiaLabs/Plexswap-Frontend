import { ChainId, Token, WBNB } from '@plexswap/sdk'
import { BUSD_TESTNET, WAYA_TESTNET, PLEXF_TESTNET, USDC_TESTNET  } from './common'

export const bscTestnetTokens = {
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'BNB',
    'BNB',
    'https://www.binance.com/',
  ),
  wbtc: new Token(
    ChainId.BSC_TESTNET, 
    '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 
    8, 
    'WBTC', 
    'Wrapped BTC'
  ),
  wbnb: WBNB[ChainId.BSC_TESTNET],
  waya: WAYA_TESTNET,
  busd: BUSD_TESTNET,
  plexf: PLEXF_TESTNET,
  usdc: USDC_TESTNET,}
