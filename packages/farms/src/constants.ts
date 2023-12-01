import { FixedNumber, BigNumber } from '@ethersproject/bignumber'
import { ChainId } from '@plexswap/sdk'

export const supportedChainId = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.PLEXCHAIN]

export const chiefFarmerAddresses = {
   97: '0xCa9F812Ba614E97b6D8EDC36eE0C1b2DbA35f062',
   56: '0x4D4408eA016357BB334eAd40F14dcF0dfd164Dbe',
   1149: '0xE8816BBc9A2D55946408FF2e30D154d277328386',
}

export const crossingVaultAddresses = {
  5: '0xb43D221047F5ec018b0204451Ec93b701ABdc260',
}

export const nativeStableLpMap = {
  [ChainId.GOERLI]: {
    address: '0xc0FB246ae3d56351aDc2bDB196c623577D90cfB5',
    wNative: 'WETH',
    stable: 'BUSD',
  },
  [ChainId.BSC]: {
    address: '0x2C2643D51322738fC33f6588Cb28eDe3790094E1',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
  [ChainId.BSC_TESTNET]: {
    address: '0x49120769a878215a350038AbB394072cEb6F4d4A',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
  [ChainId.PLEXCHAIN]: {
    address: '0x8a233567a582de5110f03bdfe531fb6d1cb02969', // Criar o PlexSwap Pair (WPLEX/USDP) em PlexFactory
    wNative: 'WPLEX',
    stable: 'USDP',
  },
}

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE  = FixedNumber.from(1)
export const FIXED_TWO  = FixedNumber.from(2)
export const BIG_TEN    = BigNumber.from(10)
export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

