import BigNumber from 'bignumber.js'
import { multicallv2 } from 'utils/multicall'
import wayaVaultAbi from 'config/abi/WayaVault.json'
import { getWayaVaultAddress, getWayaFlexibleVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { getWayaContract } from 'utils/contractHelpers'

const wayaVault = getWayaVaultAddress()
const wayaFlexibleVault = getWayaFlexibleVaultAddress()
const wayaContract = getWayaContract()
export const fetchPublicVaultData = async (wayaVaultAddress = wayaVault) => {
  try {
    const calls = ['getPricePerFullShare', 'totalShares', 'totalLockedAmount'].map((method) => ({
      address: wayaVaultAddress,
      name: method,
    }))

    const [[[sharePrice], [shares], totalLockedAmount], totalWayaInVault] = await Promise.all([
      multicallv2(wayaVaultAbi, calls, {
        requireSuccess: false,
      }),
      wayaContract.balanceOf(wayaVault),
    ])

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const totalLockedAmountAsBigNumber = totalLockedAmount ? new BigNumber(totalLockedAmount[0].toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      totalLockedAmount: totalLockedAmountAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalWayaInVault: new BigNumber(totalWayaInVault.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      totalLockedAmount: null,
      pricePerFullShare: null,
      totalWayaInVault: null,
    }
  }
}

export const fetchPublicFlexibleVaultData = async (wayaVaultAddress = wayaFlexibleVault) => {
  try {
    const calls = ['getPricePerFullShare', 'totalShares'].map((method) => ({
      address: wayaVaultAddress,
      name: method,
    }))

    const [[[sharePrice], [shares]], totalWayaInVault] = await Promise.all([
      multicallv2(wayaVaultAbi, calls, {
        requireSuccess: false,
      }),
      wayaContract.balanceOf(wayaVaultAddress),
    ])

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalWayaInVault: new BigNumber(totalWayaInVault.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalWayaInVault: null,
    }
  }
}

export const fetchVaultFees = async (wayaVaultAddress = wayaVault) => {
  try {
    const calls = ['performanceFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: wayaVaultAddress,
      name: method,
    }))

    const [[performanceFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(wayaVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
