import { BigNumber, FixedNumber } from '@ethersproject/bignumber'
import { MultiCallV2 } from '@plexswap/multicall'
import { ChainId } from '@plexswap/sdk'
import { BIG_TEN, FIXED_TWO, FIXED_ZERO } from './constants'
import { getFarmsPrices } from './farmPrices'
import { fetchPublicFarmsData } from './fetchPublicFarmData'
import { SerializedFarmConfig } from './types'

export const getTokenAmount = (balance: FixedNumber, decimals: number) => {
  const tokenDividerFixed = FixedNumber.from(BIG_TEN.pow(decimals))
  return balance.divUnsafe(tokenDividerFixed)
}

export type fetchFarmsParams = {
  farms
  multicall: MultiCallV2
  isTestnet: boolean
  chiefFarmerAddresses: Record<number, string>
  chainId: number
  totalRegularAllocPoint: BigNumber
  totalSpecialAllocPoint: BigNumber
}

export async function FetchFarms({
  farms,
  multicall,
  isTestnet,
  chiefFarmerAddresses,
  chainId,
  totalRegularAllocPoint,
  totalSpecialAllocPoint,
}: fetchFarmsParams) {
  const lpData = (await fetchPublicFarmsData(farms, chainId, multicall)).map(formatFarmResponse)
  const poolInfos = await fetchChiefFarmerData(farms, isTestnet, multicall, chiefFarmerAddresses)

  // const lpAprs = getAprs

  const farmsData = farms.map((farm, index) => {
    try {
      return {
        pid: farm.pid,
        ...farm,
        // lpApr: lpAprs?.[farm.lpAddress] || 0,
        ...getFarmsDynamicData({
          ...lpData[index],
          allocPoint: poolInfos[index]?.allocPoint,
          isRegular: poolInfos[index]?.isRegular,
          token0Decimals: farm.token.decimals,
          token1Decimals: farm.quoteToken.decimals,
          totalRegularAllocPoint,
          totalSpecialAllocPoint,
        }),
      }
    } catch (error) {
      console.error(error, farm, index, {
        allocPoint: poolInfos[index]?.allocPoint,
        isRegular: poolInfos[index]?.isRegular,
        token0Decimals: farm.token.decimals,
        token1Decimals: farm.quoteToken.decimals,
        totalRegularAllocPoint,
        totalSpecialAllocPoint,
      })
      throw error
    }
  })

  const farmsDataWithPrices = getFarmsPrices(farmsData, chainId)

  return farmsDataWithPrices
}

const chiefFarmerAbi = [
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'poolInfo',
    outputs: [
      { internalType: 'uint256', name: 'accWayaPerShare', type: 'uint256' },
      { internalType: 'uint256', name: 'lastRewardBlock', type: 'uint256' },
      { internalType: 'uint256', name: 'allocPoint', type: 'uint256' },
      { internalType: 'uint256', name: 'totalBoostedShare', type: 'uint256' },
      { internalType: 'bool', name: 'isRegular', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolLength',
    outputs: [{ internalType: 'uint256', name: 'pools', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalRegularAllocPoint',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSpecialAllocPoint',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: '_isRegular', type: 'bool' }],
    name: 'wayaPerBlock',
    outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]

const chiefFarmerFarmCalls = (farm: SerializedFarmConfig, isTestnet: boolean, chiefFarmerAddresses) => {
  const { pid } = farm
  const chiefFarmerAddress = isTestnet ? chiefFarmerAddresses[ChainId.BSC_TESTNET] : chiefFarmerAddresses[ChainId.BSC]

  return pid || pid === 0
    ? {
        address: chiefFarmerAddress,
        name: 'poolInfo',
        params: [pid],
      }
    : null
}

export const fetchChiefFarmerData = async (
  farms: SerializedFarmConfig[],
  isTestnet: boolean,
  multicall,
  chiefFarmerAddresses,
): Promise<any[]> => {
  try {
    const chiefFarmerCalls = farms.map((farm) => chiefFarmerFarmCalls(farm, isTestnet, chiefFarmerAddresses))
    const chiefFarmerAggregatedCalls = chiefFarmerCalls.filter((chiefFarmerCall) => chiefFarmerCall !== null)

    const chiefFarmerMultiCallResult = await multicall({
      abi: chiefFarmerAbi,
      calls: chiefFarmerAggregatedCalls,
      chainId: isTestnet ? ChainId.BSC_TESTNET : ChainId.BSC,
    })

    let chiefFarmerChunkedResultCounter = 0
    return chiefFarmerCalls.map((chiefFarmerCall) => {
      if (chiefFarmerCall === null) {
        return null
      }
      const data = chiefFarmerMultiCallResult[chiefFarmerChunkedResultCounter]
      chiefFarmerChunkedResultCounter++
      return data
    })
  } catch (error) {
    console.error('ChiefFarmer Pool info data error', error)
    throw error
  }
}

export const fetchChiefFarmerV2Data = async ({
  isTestnet,
  multicall,
  chiefFarmerAddresses,
}: {
  isTestnet: boolean
  multicall: MultiCallV2
  chiefFarmerAddresses
}) => {
  try {
    const chiefFarmerV2Address = isTestnet ? chiefFarmerAddresses[ChainId.BSC_TESTNET] : chiefFarmerAddresses[ChainId.BSC]

    const [[poolLength], [totalRegularAllocPoint], [totalSpecialAllocPoint], [wayaPerBlock]] = await multicall<
      [[BigNumber], [BigNumber], [BigNumber], [BigNumber]]
    >({
      abi: chiefFarmerAbi,
      calls: [
        {
          address: chiefFarmerV2Address,
          name: 'poolLength',
        },
        {
          address: chiefFarmerV2Address,
          name: 'totalRegularAllocPoint',
        },
        {
          address: chiefFarmerV2Address,
          name: 'totalSpecialAllocPoint',
        },
        {
          address: chiefFarmerV2Address,
          name: 'wayaPerBlock',
          params: [true],
        },
      ],
      chainId: isTestnet ? ChainId.BSC_TESTNET : ChainId.BSC,
    })

    return {
      poolLength,
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
      wayaPerBlock,
    }
  } catch (error) {
    console.error('Get ChiefFarmer data error', error)
    throw error
  }
}

type balanceResponse = [BigNumber]
type decimalsResponse = [number]

export type LPData = [
  balanceResponse,
  balanceResponse,
  balanceResponse,
  balanceResponse,
  decimalsResponse,
  decimalsResponse,
]

type FormatFarmResponse = {
  tokenBalanceLP: FixedNumber
  quoteTokenBalanceLP: FixedNumber
  lpTokenBalanceMC: FixedNumber
  lpTotalSupply: FixedNumber
}

const formatFarmResponse = (farmData: LPData): FormatFarmResponse => {
  const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply] = farmData
  return {
    tokenBalanceLP: FixedNumber.from(tokenBalanceLP[0]),
    quoteTokenBalanceLP: FixedNumber.from(quoteTokenBalanceLP[0]),
    lpTokenBalanceMC: FixedNumber.from(lpTokenBalanceMC[0]),
    lpTotalSupply: FixedNumber.from(lpTotalSupply[0]),
  }
}

export const getFarmsDynamicData = ({
  lpTokenBalanceMC,
  lpTotalSupply,
  quoteTokenBalanceLP,
  tokenBalanceLP,
  totalRegularAllocPoint,
  totalSpecialAllocPoint,
  token0Decimals,
  token1Decimals,
  allocPoint,
  isRegular = true,
}: FormatFarmResponse & {
  allocPoint?: BigNumber
  isRegular?: boolean
  totalRegularAllocPoint: BigNumber
  totalSpecialAllocPoint: BigNumber
  token0Decimals: number
  token1Decimals: number
}) => {
  // Raw amount of token in the LP, including those not staked
  const tokenAmountTotal = getTokenAmount(tokenBalanceLP, token0Decimals)
  const quoteTokenAmountTotal = getTokenAmount(quoteTokenBalanceLP, token1Decimals)

  // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
  const lpTokenRatio =
    !lpTotalSupply.isZero() && !lpTokenBalanceMC.isZero() ? lpTokenBalanceMC.divUnsafe(lpTotalSupply) : FIXED_ZERO

  // // Amount of quoteToken in the LP that are staked in the MC
  const quoteTokenAmountMcFixed = quoteTokenAmountTotal.mulUnsafe(lpTokenRatio)

  // // Total staked in LP, in quote token value
  const lpTotalInQuoteToken = quoteTokenAmountMcFixed.mulUnsafe(FIXED_TWO)

  const _allocPoint = allocPoint ? FixedNumber.from(allocPoint) : FIXED_ZERO
  const totalAlloc = isRegular ? totalRegularAllocPoint : totalSpecialAllocPoint

  const poolWeight =
    !totalAlloc.isZero() && !_allocPoint.isZero() ? _allocPoint.divUnsafe(FixedNumber.from(totalAlloc)) : FIXED_ZERO

  return {
    tokenAmountTotal: tokenAmountTotal.toString(),
    quoteTokenAmountTotal: quoteTokenAmountTotal.toString(),
    lpTotalSupply: lpTotalSupply.toString(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toString(),
    tokenPriceVsQuote: !quoteTokenAmountTotal.isZero() && quoteTokenAmountTotal.divUnsafe(tokenAmountTotal).toString(),
    poolWeight: poolWeight.toString(),
    multiplier: !_allocPoint.isZero() ? `${+_allocPoint.divUnsafe(FixedNumber.from(100)).toString()}X` : `0X`,
  }
}
