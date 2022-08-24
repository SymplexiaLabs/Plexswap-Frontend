import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import chieffarmerABI from 'config/abi/ChiefFarmer.json'
import multicall from 'utils/multicall'
import { getAddress, getChiefFarmerAddress } from 'utils/addressHelpers'
import { SerializedFarmConfig } from 'config/constants/types'

export const fetchFarmUserAllowances = async (
  account: string,
  farmsToFetch: SerializedFarmConfig[],
  proxyAddress?: string,
) => {
  const chiefFarmerAddress = getChiefFarmerAddress()

  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return { address: lpContractAddress, name: 'allowance', params: [account, proxyAddress || chiefFarmerAddress] }
  })

  const rawLpAllowances = await multicall<BigNumber[]>(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })

  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const chiefFarmerAddress = getChiefFarmerAddress()

  const calls = farmsToFetch.map((farm) => {
    return {
      address: chiefFarmerAddress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(chieffarmerABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const chiefFarmerAddress = getChiefFarmerAddress()

  const calls = farmsToFetch.map((farm) => {
    return {
      address: chiefFarmerAddress,
      name: 'pendingWaya',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(chieffarmerABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
