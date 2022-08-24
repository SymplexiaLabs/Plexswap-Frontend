import { Token, ChainId } from '@plexswap/sdk'

// a list of tokens by chain
export type ChainMap<T> = {
  readonly [chainId in ChainId]: T
}

export type ChainTokenList = ChainMap<Token[]>

export type TranslatableText =
  | string
  | {
      key: string
      data?: {
        [key: string]: string | number
      }
    }
export interface Address {
  97?: string
  56: string
  [chainId: number]: string
}

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
  projectLink?: string
  logoURI?: string
}

export enum PoolIds {
  poolBasic = 'poolBasic',
  poolUnlimited = 'poolUnlimited',
}



export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
  'AUTO' = 'Auto',
}

interface FarmConfigBaseProps {
  pid: number

  lpSymbol: string
  lpAddresses: Address
  multiplier?: string
  isCommunity?: boolean
  auctionHostingStartSeconds?: number
  auctionHostingEndDate?: string
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  boosted?: boolean
}

export interface SerializedFarmConfig extends FarmConfigBaseProps {
  token: SerializedToken
  quoteToken: SerializedToken
}

export interface DeserializedFarmConfig extends FarmConfigBaseProps {
  token: Token
  quoteToken: Token
}

interface PoolConfigBaseProps {
  poolId: number
  contractAddress: Address
  poolCategory: PoolCategory
  tokenPerBlock: string
  isFinished?: boolean
  enableEmergencyWithdraw?: boolean
  version?: number
}

export interface SerializedPoolConfig extends PoolConfigBaseProps {
  earningToken: SerializedToken
  stakingToken: SerializedToken
}

export interface DeserializedPoolConfig extends PoolConfigBaseProps {
  earningToken: Token
  stakingToken: Token
}

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}



export type PageMeta = {
  title: string
  description?: string
  image?: string
}




export enum FetchStatus {
  Idle = 'IDLE',
  Fetching = 'FETCHING',
  Fetched = 'FETCHED',
  Failed = 'FAILED',
}
