import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(bscTokens)

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
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.WayaVault]: {
    name: <Trans>Stake WAYA</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.waya.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.WayaFlexibleVault]: {
    name: <Trans>Flexible WAYA</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.waya.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    poolId: 0,
    stakingToken: serializedTokens.waya,
    earningToken: serializedTokens.waya,
    contractAddress: {
      97: '0x1e7D98aAC52dAef93B90508DfAdBDCd91f28b78e',
      56: '0xdB21c81428fdDd5841E0feAA7f79f8C249Fe88A2', // ChiefFarmer Address
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
]

// known finished pools
// known finished Silos
const finishedPools = [].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
