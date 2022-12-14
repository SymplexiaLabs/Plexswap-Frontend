import { createAsyncThunk, createSlice, PayloadAction, isAnyOf } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import fromPairs from 'lodash/fromPairs'
import poolsConfig from 'config/constants/pools'
import {
  PoolsState,
  SerializedPool,
  SerializedVaultFees,
  SerializedWayaVault,
  SerializedLockedVaultUser,

  SerializedVaultUser,
  SerializedLockedWayaVault,
} from 'state/types'
import { getPoolApr } from 'utils/apr'
import { BIG_ZERO } from 'utils/bigNumber'
import wayaAbi from 'config/abi/Waya.json'
import { getWayaVaultAddress, getWayaFlexibleVaultAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { bscTokens } from '@plexswap/tokens'
import { getBalanceNumber } from 'utils/formatBalance'
import { bscRpcProvider } from 'config/constants/providers'
import { getPoolsPriceHelperLpFiles } from 'config/constants/priceHelperLps/index'
import fetchFarms from '../farms/fetchFarms'
import getFarmsPrices from '../farms/getFarmsPrices'
import {
  fetchPoolsBlockLimits,
  fetchPoolsStakingLimits,
  fetchPoolsTotalStaking,
} from './fetchPools'
import {
  fetchPoolsAllowance,
  fetchUserBalances,
  fetchUserPendingRewards,
  fetchUserStakeBalances,
} from './fetchPoolsUser'
import { fetchPublicVaultData, fetchVaultFees, fetchPublicFlexibleVaultData } from './fetchVaultPublic'
import { getTokenPricesFromFarm } from './helpers'
import { resetUserState } from '../global/actions'

import { fetchVaultUser, fetchFlexibleVaultUser } from './fetchVaultUser'

export const initialPoolVaultState = Object.freeze({
  totalShares: null,
  totalLockedAmount: null,
  pricePerFullShare: null,
  totalWayaInVault: null,
  fees: {
    performanceFee: null,
    withdrawalFee: null,
    withdrawalFeePeriod: null,
  },
  userData: {
    isLoading: true,
    userShares: null,
    wayaAtLastUserAction: null,
    lastDepositedTime: null,
    lastUserActionTime: null,
    credit: null,
    locked: null,
    lockStartTime: null,
    lockEndTime: null,
    userBoostedShare: null,
    lockedAmount: null,
    currentOverdueFee: null,
    currentPerformanceFee: null,
  },
  creditStartBlock: null,
})

export const initialIfoState = Object.freeze({
  credit: null,
  ceiling: null,
})

const initialState: PoolsState = {
  data: [...poolsConfig],
  userDataLoaded: false,
  wayaVault: initialPoolVaultState,

  wayaFlexibleVault: initialPoolVaultState,
}

const wayaVaultAddress = getWayaVaultAddress()

export const fetchWayaPoolPublicDataAsync = () => async (dispatch, getState) => {
  const farmsData = getState().farms.data
  const prices = getTokenPricesFromFarm(farmsData)

  const wayaPool = poolsConfig.filter((p) => p.poolId === 0)[0]

  const stakingTokenAddress = wayaPool.stakingToken.address ? wayaPool.stakingToken.address.toLowerCase() : null
  const stakingTokenPrice = stakingTokenAddress ? prices[stakingTokenAddress] : 0

  const earningTokenAddress = wayaPool.earningToken.address ? wayaPool.earningToken.address.toLowerCase() : null
  const earningTokenPrice = earningTokenAddress ? prices[earningTokenAddress] : 0

  dispatch(
    setPoolPublicData({
      poolId: 0,
      data: {
        stakingTokenPrice,
        earningTokenPrice,
      },
    }),
  )
}

export const fetchWayaPoolUserDataAsync = (account: string) => async (dispatch) => {
  const allowanceCall = {
    address: bscTokens.waya.address,
    name: 'allowance',
    params: [account, wayaVaultAddress],
  }
  const balanceOfCall = {
    address: bscTokens.waya.address,
    name: 'balanceOf',
    params: [account],
  }
  const wayaContractCalls = [allowanceCall, balanceOfCall]
  const [[allowance], [stakingTokenBalance]] = await multicallv2({ abi: wayaAbi, calls: wayaContractCalls })

  dispatch(
    setPoolUserData({
      poolId: 0,
      data: {
        allowance: new BigNumber(allowance.toString()).toJSON(),
        stakingTokenBalance: new BigNumber(stakingTokenBalance.toString()).toJSON(),
      },
    }),
  )
}

export const fetchPoolsPublicDataAsync =
  (currentBlockNumber: number, chainId: number) => async (dispatch, getState) => {
    try {
      const [blockLimits, totalStakings, currentBlock] = await Promise.all([
        fetchPoolsBlockLimits(),
        fetchPoolsTotalStaking(),

        currentBlockNumber ? Promise.resolve(currentBlockNumber) : bscRpcProvider.getBlockNumber(),
      ])

      const blockLimitsPoolIdMap = fromPairs(blockLimits.map((entry) => [entry.poolId, entry]))
      const totalStakingsPoolIdMap = fromPairs(totalStakings.map((entry) => [entry.poolId, entry]))

      const priceHelperLpsConfig = getPoolsPriceHelperLpFiles(chainId)
      const activePriceHelperLpsConfig = priceHelperLpsConfig.filter((priceHelperLpConfig) => {
        return (
          poolsConfig
            .filter(
              (pool) => pool.earningToken.address.toLowerCase() === priceHelperLpConfig.token.address.toLowerCase(),
            )
            .filter((pool) => {
              const poolBlockLimit = blockLimitsPoolIdMap[pool.poolId]
              if (poolBlockLimit) {
                return poolBlockLimit.endBlock > currentBlock
              }
              return false
            }).length > 0
        )
      })
      const poolsWithDifferentFarmToken =
        activePriceHelperLpsConfig.length > 0 ? await fetchFarms(priceHelperLpsConfig, chainId) : []
      const farmsData = getState().farms.data
      const bnbBusdFarm =
        activePriceHelperLpsConfig.length > 0
          ? farmsData.find((farm) => farm.token.symbol === 'BUSD' && farm.quoteToken.symbol === 'WBNB')
          : null
      const farmsWithPricesOfDifferentTokenPools = bnbBusdFarm
        ? await getFarmsPrices([bnbBusdFarm, ...poolsWithDifferentFarmToken], chainId)
        : []

      const prices = getTokenPricesFromFarm([...farmsData, ...farmsWithPricesOfDifferentTokenPools])

      const liveData = poolsConfig.map((pool) => {
        const blockLimit = blockLimitsPoolIdMap[pool.poolId]
        const totalStaking = totalStakingsPoolIdMap[pool.poolId]
        const isPoolEndBlockExceeded =
          currentBlock > 0 && blockLimit ? currentBlock > Number(blockLimit.endBlock) : false
        const isPoolFinished = pool.isFinished || isPoolEndBlockExceeded

        const stakingTokenAddress = pool.stakingToken.address ? pool.stakingToken.address.toLowerCase() : null
        const stakingTokenPrice = stakingTokenAddress ? prices[stakingTokenAddress] : 0

        const earningTokenAddress = pool.earningToken.address ? pool.earningToken.address.toLowerCase() : null
        const earningTokenPrice = earningTokenAddress ? prices[earningTokenAddress] : 0
        const apr = !isPoolFinished
          ? getPoolApr(
              stakingTokenPrice,
              earningTokenPrice,
              getBalanceNumber(new BigNumber(totalStaking.totalStaked), pool.stakingToken.decimals),
              parseFloat(pool.tokenPerBlock),
            )
          : 0



        return {
          ...blockLimit,
          ...totalStaking,
          stakingTokenPrice,
          earningTokenPrice,
          apr,
          isFinished: isPoolFinished,
        }
      })

      dispatch(setPoolsPublicData(liveData))
    } catch (error) {
      console.error('[Pools Action] error when getting public data', error)
    }
  }

export const fetchPoolsStakingLimitsAsync = () => async (dispatch, getState) => {
  const poolsWithStakingLimit = getState()
    .pools.data.filter(({ stakingLimit }) => stakingLimit !== null && stakingLimit !== undefined)
    .map((pool) => pool.poolId)

  try {
    const stakingLimits = await fetchPoolsStakingLimits(poolsWithStakingLimit)

    const stakingLimitData = poolsConfig.map((pool) => {
      if (poolsWithStakingLimit.includes(pool.poolId)) {
        return { poolId: pool.poolId }
      }
      const { stakingLimit, numberBlocksForUserLimit } = stakingLimits[pool.poolId] || {
        stakingLimit: BIG_ZERO,
        numberBlocksForUserLimit: 0,
      }
      return {
        poolId: pool.poolId,
        stakingLimit: stakingLimit.toJSON(),
        numberBlocksForUserLimit,
      }
    })

    dispatch(setPoolsPublicData(stakingLimitData))
  } catch (error) {
    console.error('[Pools Action] error when getting staking limits', error)
  }
}

export const fetchPoolsUserDataAsync = createAsyncThunk<
  { poolId: number; allowance: any; stakingTokenBalance: any; stakedBalance: any; pendingReward: any }[],
  string
>('pool/fetchPoolsUserData', async (account, { rejectWithValue }) => {
  try {
    const [allowances, stakingTokenBalances, stakedBalances, pendingRewards] = await Promise.all([
      fetchPoolsAllowance(account),
      fetchUserBalances(account),
      fetchUserStakeBalances(account),
      fetchUserPendingRewards(account),
    ])

    const userData = poolsConfig.map((pool) => ({
      poolId: pool.poolId,
      allowance: allowances[pool.poolId],
      stakingTokenBalance: stakingTokenBalances[pool.poolId],
      stakedBalance: stakedBalances[pool.poolId],
      pendingReward: pendingRewards[pool.poolId],
    }))
    return userData
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const updateUserAllowance = createAsyncThunk<
  { poolId: number; field: string; value: any },
  { poolId: number; account: string }
>('pool/updateUserAllowance', async ({ poolId, account }) => {
  const allowances = await fetchPoolsAllowance(account)
  return { poolId, field: 'allowance', value: allowances[poolId] }
})

export const updateUserBalance = createAsyncThunk<
  { poolId: number; field: string; value: any },
  { poolId: number; account: string }
>('pool/updateUserBalance', async ({ poolId, account }) => {
  const tokenBalances = await fetchUserBalances(account)
  return { poolId, field: 'stakingTokenBalance', value: tokenBalances[poolId] }
})

export const updateUserStakedBalance = createAsyncThunk<
  { poolId: number; field: string; value: any },
  { poolId: number; account: string }
>('pool/updateUserStakedBalance', async ({ poolId, account }) => {
  const stakedBalances = await fetchUserStakeBalances(account)
  return { poolId, field: 'stakedBalance', value: stakedBalances[poolId] }
})

export const updateUserPendingReward = createAsyncThunk<
  { poolId: number; field: string; value: any },
  { poolId: number; account: string }
>('pool/updateUserPendingReward', async ({ poolId, account }) => {
  const pendingRewards = await fetchUserPendingRewards(account)
  return { poolId, field: 'pendingReward', value: pendingRewards[poolId] }
})

export const fetchWayaVaultPublicData = createAsyncThunk<SerializedLockedWayaVault>(
  'wayaVault/fetchPublicData',
  async () => {
    const publicVaultInfo = await fetchPublicVaultData()
    return publicVaultInfo
  },
)

export const fetchWayaFlexibleVaultPublicData = createAsyncThunk<SerializedWayaVault>(
  'wayaFlexibleVault/fetchPublicData',
  async () => {
    const publicVaultInfo = await fetchPublicFlexibleVaultData()
    return publicVaultInfo
  },
)

export const fetchWayaVaultFees = createAsyncThunk<SerializedVaultFees>('wayaVault/fetchFees', async () => {
  const vaultFees = await fetchVaultFees(getWayaVaultAddress())
  return vaultFees
})

export const fetchWayaFlexibleVaultFees = createAsyncThunk<SerializedVaultFees>(
  'wayaFlexibleVault/fetchFees',
  async () => {
    const vaultFees = await fetchVaultFees(getWayaFlexibleVaultAddress())
    return vaultFees
  },
)

export const fetchWayaVaultUserData = createAsyncThunk<SerializedLockedVaultUser, { account: string }>(
  'wayaVault/fetchUser',
  async ({ account }) => {
    const userData = await fetchVaultUser(account)
    return userData
  },
)


export const fetchWayaFlexibleVaultUserData = createAsyncThunk<SerializedVaultUser, { account: string }>(
  'wayaFlexibleVault/fetchUser',
  async ({ account }) => {
    const userData = await fetchFlexibleVaultUser(account)
    return userData
  },
)

export const PoolsSlice = createSlice({
  name: 'Pools',
  initialState,
  reducers: {
    setPoolPublicData: (state, action) => {
      const { poolId } = action.payload
      const poolIndex = state.data.findIndex((pool) => pool.poolId === poolId)
      state.data[poolIndex] = {
        ...state.data[poolIndex],
        ...action.payload.data,
      }
    },
    setPoolUserData: (state, action) => {
      const { poolId } = action.payload
      state.data = state.data.map((pool) => {
        if (pool.poolId === poolId) {
          return { ...pool, userDataLoaded: true, userData: action.payload.data }
        }
        return pool
      })
    },
    setPoolsPublicData: (state, action) => {
      const livePoolsData: SerializedPool[] = action.payload
      const livePoolsPoolIdMap = fromPairs(livePoolsData.map((entry) => [entry.poolId, entry]))
      state.data = state.data.map((pool) => {
        const livePoolData = livePoolsPoolIdMap[pool.poolId]
        return { ...pool, ...livePoolData }
      })
    },

  },
  extraReducers: (builder) => {
    builder.addCase(resetUserState, (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.data = state.data.map(({ userData, ...pool }) => {
        return { ...pool }
      })
      state.userDataLoaded = false
      state.wayaVault = { ...state.wayaVault, userData: initialPoolVaultState.userData }
      state.wayaFlexibleVault = { ...state.wayaFlexibleVault, userData: initialPoolVaultState.userData }
    })
    builder.addCase(
      fetchPoolsUserDataAsync.fulfilled,
      (
        state,
        action: PayloadAction<
          { poolId: number; allowance: any; stakingTokenBalance: any; stakedBalance: any; pendingReward: any }[]
        >,
      ) => {
        const userData = action.payload
        const userDataPoolIdMap = fromPairs(userData.map((entry) => [entry.poolId, entry]))
        state.data = state.data.map((pool) => ({
          ...pool,
          userDataLoaded: true,
          userData: userDataPoolIdMap[pool.poolId],
        }))
        state.userDataLoaded = true
      },
    )
    builder.addCase(fetchPoolsUserDataAsync.rejected, (state, action) => {
      console.error('[Pools Action] Error fetching pool user data', action.payload)
    })
    // Vault public data that updates frequently
    builder.addCase(fetchWayaVaultPublicData.fulfilled, (state, action: PayloadAction<SerializedLockedWayaVault>) => {
      state.wayaVault = { ...state.wayaVault, ...action.payload }
    })
    builder.addCase(
      fetchWayaFlexibleVaultPublicData.fulfilled,
      (state, action: PayloadAction<SerializedWayaVault>) => {
        state.wayaFlexibleVault = { ...state.wayaFlexibleVault, ...action.payload }
      },
    )
    // Vault fees
    builder.addCase(fetchWayaVaultFees.fulfilled, (state, action: PayloadAction<SerializedVaultFees>) => {
      const fees = action.payload
      state.wayaVault = { ...state.wayaVault, fees }
    })
    builder.addCase(fetchWayaFlexibleVaultFees.fulfilled, (state, action: PayloadAction<SerializedVaultFees>) => {
      const fees = action.payload
      state.wayaFlexibleVault = { ...state.wayaFlexibleVault, fees }
    })
    // Vault user data
    builder.addCase(fetchWayaVaultUserData.fulfilled, (state, action: PayloadAction<SerializedLockedVaultUser>) => {
      const userData = action.payload
      state.wayaVault = { ...state.wayaVault, userData }
    })

    builder.addCase(
      fetchWayaFlexibleVaultUserData.fulfilled,
      (state, action: PayloadAction<SerializedVaultUser>) => {
        const userData = action.payload
        state.wayaFlexibleVault = { ...state.wayaFlexibleVault, userData }
      },
    )
    builder.addMatcher(
      isAnyOf(
        updateUserAllowance.fulfilled,
        updateUserBalance.fulfilled,
        updateUserStakedBalance.fulfilled,
        updateUserPendingReward.fulfilled,
      ),
      (state, action: PayloadAction<{ poolId: number; field: string; value: any }>) => {
        const { field, value, poolId } = action.payload
        const index = state.data.findIndex((p) => p.poolId === poolId)

        if (index >= 0) {
          state.data[index] = { ...state.data[index], userData: { ...state.data[index].userData, [field]: value } }
        }
      },
    )
  },
})

// Actions
export const { setPoolsPublicData, setPoolPublicData, setPoolUserData } = PoolsSlice.actions

export default PoolsSlice.reducer
