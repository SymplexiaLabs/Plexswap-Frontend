import { FixedNumber, BigNumber } from '@ethersproject/bignumber'
import { ChainId } from '@plexswap/sdk'

export const supportedChainId = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET]

export const chiefFarmerAddresses = {
   97: '0xCa9F812Ba614E97b6D8EDC36eE0C1b2DbA35f062',
   56: '0x4D4408eA016357BB334eAd40F14dcF0dfd164Dbe',
}

export const nonBSCVaultAddresses = {
  5: '0xb43D221047F5ec018b0204451Ec93b701ABdc260',
}

export const nativeStableLpMap = {
  [ChainId.GOERLI]: {
    address: '0xf5bf0C34d3c428A74Ceb98d27d38d0036C587200',
    wNative: 'WETH',
    stable: 'tUSDC',
  },
  [ChainId.BSC]: {
    address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
  [ChainId.BSC_TESTNET]: {
    address: '0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
}

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE  = FixedNumber.from(1)
export const FIXED_TWO  = FixedNumber.from(2)
export const BIG_TEN    = BigNumber.from(10)
export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

