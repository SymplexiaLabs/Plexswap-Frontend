import BigNumber from 'bignumber.js'
import { SerializedLockedVaultUser, SerializedVaultUser } from 'state/types'
import { getWayaVaultAddress } from 'utils/addressHelpers'
import wayaVaultAbi from 'config/abi/WayaVault.json'
import { multicallv2 } from 'utils/multicall'
import { getWayaFlexibleVaultContract } from '../../utils/contractHelpers'

const wayaVaultAddress = getWayaVaultAddress()
const flexibleVaultContract = getWayaFlexibleVaultContract()

export const fetchVaultUser = async (account: string): Promise<SerializedLockedVaultUser> => {
  try {
    const calls = ['userInfo', 'calculatePerformanceFee', 'calculateOverdueFee'].map((method) => ({
      address: wayaVaultAddress,
      name: method,
      params: [account],
    }))

    const [userContractResponse, [currentPerformanceFee], [currentOverdueFee]] = await multicallv2(wayaVaultAbi, calls)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      wayaAtLastUserAction: new BigNumber(userContractResponse.wayaAtLastUserAction.toString()).toJSON(),
      userBoostedShare: new BigNumber(userContractResponse.userBoostedShare.toString()).toJSON(),
      locked: userContractResponse.locked,
      lockEndTime: userContractResponse.lockEndTime.toString(),
      lockStartTime: userContractResponse.lockStartTime.toString(),
      lockedAmount: new BigNumber(userContractResponse.lockedAmount.toString()).toJSON(),
      currentPerformanceFee: new BigNumber(currentPerformanceFee.toString()).toJSON(),
      currentOverdueFee: new BigNumber(currentOverdueFee.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      wayaAtLastUserAction: null,
      userBoostedShare: null,
      lockEndTime: null,
      lockStartTime: null,
      locked: null,
      lockedAmount: null,
      currentPerformanceFee: null,
      currentOverdueFee: null,
    }
  }
}

export const fetchFlexibleVaultUser = async (account: string): Promise<SerializedVaultUser> => {
  try {
    const userContractResponse = await flexibleVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      wayaAtLastUserAction: new BigNumber(userContractResponse.wayaAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      wayaAtLastUserAction: null,
    }
  }
}
