import { Token, ChainId } from '@plexswap/sdk'
import { SerializedWrappedToken } from '@plexswap/tokens'
import type { SerializedFarmConfig, FarmConfigBaseProps } from '@plexswap/farms'

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



export enum PoolIds {
  poolBasic = 'poolBasic',
  poolUnlimited = 'poolUnlimited',
}



export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a TOKEN
  'AUTO' = 'Auto',
}

export type { SerializedFarmConfig, FarmConfigBaseProps }

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
  earningToken: SerializedWrappedToken
  stakingToken: SerializedWrappedToken
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
