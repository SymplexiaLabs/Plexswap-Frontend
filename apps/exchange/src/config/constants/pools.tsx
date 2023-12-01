import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { bscTokens } from '@plexswap/tokens'
import { chiefFarmerAddresses } from '@plexswap/farms'
import { SerializedPoolConfig, PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.WayaVaultV1]: {
    name: <Trans>Auto WAYA</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.waya.address}.svg`,
      secondarySrc: '/images/tokens/WayaToWaya.svg',
    },
  },
  [VaultKey.WayaVault]: {
    name: <Trans>Stake WAYA</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.waya.address}.svg`,
      secondarySrc: '/images/tokens/WayaToWaya.svg',
    },
  },
  [VaultKey.WayaFlexibleVault]: {
    name: <Trans>Flexible WAYA</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.waya.address}.svg`,
      secondarySrc: '/images/tokens/WayaToWaya.svg',
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    poolId: 0,
    stakingToken: bscTokens.waya,
    earningToken: bscTokens.waya,
    contractAddress: chiefFarmerAddresses,
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    poolId: 1,
    stakingToken: bscTokens.waya,
    earningToken: bscTokens.plexf,
    contractAddress: {
      56: '0x0d1b5d6216c45fd8198814ecf247930758c55ab5',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00115',
  },
].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// Known finished Silos (Pools)
const finishedPools = [
].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools]
