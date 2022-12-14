import { Contract } from '@ethersproject/contracts'
import BigNumber from 'bignumber.js'
import { BOOSTED_FARM_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

export const stakeFarm = async (chiefFarmerContract: Contract, pid, amount, gasPrice) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  return chiefFarmerContract.deposit(pid, value, { ...options, gasPrice })
}

export const unstakeFarm = async (chiefFarmerContract, pid, amount, gasPrice) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  return chiefFarmerContract.withdraw(pid, value, { ...options, gasPrice })
}

export const harvestFarm = async (chiefFarmerContract, pid, gasPrice) => {
  return chiefFarmerContract.deposit(pid, '0', { ...options, gasPrice })
}
