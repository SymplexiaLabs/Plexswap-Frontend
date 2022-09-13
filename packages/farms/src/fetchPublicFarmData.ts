import { MultiCallV2 } from '@plexswap/multicall'
import { ChainId } from '@plexswap/sdk'
import chunk from 'lodash/chunk'
import { SerializedFarmPublicData, SerializedFarmConfig } from './types'
import { nonBSCVaultAddresses } from './constants'

const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

const fetchFarmCalls = (farm: SerializedFarmPublicData, chiefFarmerAddress: string, vaultAddress?: string) => {
  const { lpAddress, token, quoteToken } = farm
  return [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: lpAddress,
      name: 'balanceOf',
      params: [vaultAddress || chiefFarmerAddress],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
  ]
}

export const fetchPublicFarmsData = async (
  farms: SerializedFarmConfig[],
  chainId = ChainId.BSC,
  multicall: MultiCallV2,
  chiefFarmerAddress: string,
): Promise<any[]> => {
  try {
    const farmCalls = farms.flatMap((farm) => fetchFarmCalls(farm, chiefFarmerAddress, nonBSCVaultAddresses[chainId]))
    const chunkSize = farmCalls.length / farms.length
    const farmMultiCallResult = await multicall({ abi, calls: farmCalls, chainId })
    return chunk(farmMultiCallResult, chunkSize)
  } catch (error) {
    console.error('ChiefFarmer Public Data error ', error)
    throw error
  }
}
