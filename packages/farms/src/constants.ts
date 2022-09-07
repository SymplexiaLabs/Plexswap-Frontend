import { FixedNumber, BigNumber } from '@ethersproject/bignumber'
import { ChainId } from '@plexswap/sdk'

export const supportedChainId = [5, 56, 97]

export const chiefFarmerAddresses = {
  97: '0xCa9F812Ba614E97b6D8EDC36eE0C1b2DbA35f062',
  56: '0x4Ba4EFa9C4E44b94ea232Fd5F5f7F4A4961904e5',
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}

export const nativeStableLpMap = {
    [ChainId.GOERLI]: {
      address: '0xf5bf0C34d3c428A74Ceb98d27d38d0036C587200',
      wNative: 'WETH',
      stable: 'USDC',
    },
    [ChainId.BSC]: {
      address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      wNative: 'WBNB',
      stable: 'BUSD',
    },
    [ChainId.BSC_TESTNET]: {
      address: '0x49120769a878215a350038AbB394072cEb6F4d4A',
      wNative: 'WBNB',
      stable: 'BUSD',
    },
  }

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE  = FixedNumber.from(1)
export const FIXED_TWO  = FixedNumber.from(2)
export const BIG_TEN    = BigNumber.from(10)
export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

