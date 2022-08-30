import { parseUnits } from '@ethersproject/units'
import { SerializedFarmPublicData } from '@plexswap/farms'
import BigNumber from 'bignumber.js'
import {

  DeserializedFarmConfig,
  DeserializedPoolConfig,

  SerializedPoolConfig,
} from 'config/constants/types'


export enum GAS_PRICE {
  default = '5',
  fast = '6',
  instant = '7',
  testnet = '10',
}

export const GAS_PRICE_GWEI = {
  default: parseUnits(GAS_PRICE.default, 'gwei').toString(),
  fast: parseUnits(GAS_PRICE.fast, 'gwei').toString(),
  instant: parseUnits(GAS_PRICE.instant, 'gwei').toString(),
  testnet: parseUnits(GAS_PRICE.testnet, 'gwei').toString(),
}

export type DeserializedPoolVault = DeserializedPool & DeserializedWayaVault
export type DeserializedPoolLockedVault = DeserializedPool & DeserializedLockedWayaVault

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

export type SerializedBigNumber = string

interface SerializedFarmUserData {
  allowance: string
  tokenBalance: string
  stakedBalance: string
  earnings: string
  proxy?: {
    allowance: string
    tokenBalance: string
    stakedBalance: string
    earnings: string
  }
}

export interface DeserializedFarmUserData {
  allowance: BigNumber
  tokenBalance: BigNumber
  stakedBalance: BigNumber
  earnings: BigNumber
  proxy?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}

export interface SerializedFarm extends SerializedFarmPublicData {
  userData?: SerializedFarmUserData

}

export interface DeserializedFarm extends DeserializedFarmConfig {
  tokenPriceBusd?: string
  quoteTokenPriceBusd?: string
  tokenAmountTotal?: BigNumber
  quoteTokenAmountTotal?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  lpTotalSupply?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: BigNumber
  userData?: DeserializedFarmUserData
  boosted?: boolean
}

export enum VaultKey {
  WayaVaultV1 = 'wayaVaultV1',
  WayaVault = 'wayaVault',
  WayaFlexibleVault = 'wayaFlexibleVault',

}

interface CorePoolProps {
  startBlock?: number
  endBlock?: number
  apr?: number
  rawApr?: number
  stakingTokenPrice?: number
  earningTokenPrice?: number
  vaultKey?: VaultKey
}

export interface DeserializedPool extends DeserializedPoolConfig, CorePoolProps {
  totalStaked?: BigNumber
  stakingLimit?: BigNumber
  stakingLimitEndBlock?: number

  userDataLoaded?: boolean
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface SerializedPool extends SerializedPoolConfig, CorePoolProps {
  totalStaked?: SerializedBigNumber
  stakingLimit?: SerializedBigNumber
  numberBlocksForUserLimit?: number
   userData?: {
    allowance: SerializedBigNumber
    stakingTokenBalance: SerializedBigNumber
    stakedBalance: SerializedBigNumber
    pendingReward: SerializedBigNumber
  }
}



// Slices states

export interface SerializedFarmsState {
  data: SerializedFarm[]
  loadArchivedFarmsData: boolean
  userDataLoaded: boolean
  loadingKeys: Record<string, boolean>
  poolLength?: number
  regularWayaPerBlock?: number
}

export interface DeserializedFarmsState {
  data: DeserializedFarm[]
  loadArchivedFarmsData: boolean
  userDataLoaded: boolean
  poolLength?: number
  regularWayaPerBlock?: number
}

export interface SerializedVaultFees {
  performanceFee: number
  withdrawalFee: number
  withdrawalFeePeriod: number
}

export interface DeserializedVaultFees extends SerializedVaultFees {
  performanceFeeAsDecimal: number
}

export interface SerializedVaultUser {
  isLoading: boolean
  userShares: SerializedBigNumber
  wayaAtLastUserAction: SerializedBigNumber
  lastDepositedTime: string
  lastUserActionTime: string
}

export interface SerializedLockedVaultUser extends SerializedVaultUser {
  lockStartTime: string
  lockEndTime: string
  userBoostedShare: SerializedBigNumber
  locked: boolean
  lockedAmount: SerializedBigNumber
  currentPerformanceFee: SerializedBigNumber
  currentOverdueFee: SerializedBigNumber
}

export interface DeserializedVaultUser {
  isLoading: boolean
  userShares: BigNumber
  wayaAtLastUserAction: BigNumber
  lastDepositedTime: string
  lastUserActionTime: string
  balance: {
    wayaAsNumberBalance: number
    wayaAsBigNumber: BigNumber
    wayaAsDisplayBalance: string
  }
}

export interface DeserializedLockedVaultUser extends DeserializedVaultUser {
  lastDepositedTime: string
  lastUserActionTime: string
  lockStartTime: string
  lockEndTime: string
  burnStartTime: string
  userBoostedShare: BigNumber
  locked: boolean
  lockedAmount: BigNumber
  currentPerformanceFee: BigNumber
  currentOverdueFee: BigNumber
}

export interface DeserializedWayaVault {
  totalShares?: BigNumber
  totalLockedAmount?: BigNumber
  pricePerFullShare?: BigNumber
  totalWayaInVault?: BigNumber
  fees?: DeserializedVaultFees
  userData?: DeserializedVaultUser
}

export interface DeserializedLockedWayaVault extends Omit<DeserializedWayaVault, 'userData'> {
  totalLockedAmount?: BigNumber
  userData?: DeserializedLockedVaultUser
}

export interface SerializedLockedWayaVault extends Omit<SerializedWayaVault, 'userData'> {
  totalLockedAmount?: SerializedBigNumber
  userData?: SerializedLockedVaultUser
}

export interface SerializedWayaVault {
  totalShares?: SerializedBigNumber
  pricePerFullShare?: SerializedBigNumber
  totalWayaInVault?: SerializedBigNumber
  fees?: SerializedVaultFees
  userData?: SerializedVaultUser
}



export interface PoolsState {
  data: SerializedPool[]

  wayaVault: SerializedLockedWayaVault
  wayaFlexibleVault: SerializedWayaVault
  userDataLoaded: boolean
}



// Voting

/* eslint-disable camelcase */
/**
 * @see https://hub.snapshot.page/graphql
 */
export interface VoteWhere {
  id?: string
  id_in?: string[]
  voter?: string
  voter_in?: string[]
  proposal?: string
  proposal_in?: string[]
}

export enum SnapshotCommand {
  PROPOSAL = 'proposal',
  VOTE = 'vote',
}

export enum ProposalType {
  ALL = 'all',
  CORE = 'core',
  COMMUNITY = 'community',
}

export enum ProposalState {
  ACTIVE = 'active',
  PENDING = 'pending',
  CLOSED = 'closed',
}

export interface Space {
  id: string
  name: string
}

export interface Proposal {
  author: string
  body: string
  choices: string[]
  end: number
  id: string
  snapshot: string
  space: Space
  votes: number
  start: number
  state: ProposalState
  title: string
}

export interface Vote {
  id: string
  voter: string
  created: number
  space: Space
  proposal: {
    choices: Proposal['choices']
  }
  choice: number
  metadata?: {
    votingPower: string
  }
}



// Global state

export interface State {
  farms: SerializedFarmsState

  pools: PoolsState

}
