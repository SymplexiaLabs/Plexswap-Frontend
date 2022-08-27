import { ChainId } from '@plexswap/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { VaultKey } from 'state/types'

export const getAddress = (address: Address, chainId?: number): string => {
  return address[chainId] ? address[chainId] : address[ChainId.BSC]
}

export const getChiefFarmerAddress = (chainId?: number) => {
  return getAddress(addresses.chiefFarmer, chainId)
}

export const getMulticallAddress = (chainId?: number) => {
  return getAddress(addresses.multiCall, chainId)
}


export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  return getAddress(addresses[vaultKey])
}

export const getWayaVaultAddress = () => {
  return getAddress(addresses.wayaVault)
}

export const getWayaFlexibleVaultAddress = () => {
  return getAddress(addresses.wayaFlexibleVault)
}

export const getIWayaAddress = () => {
  return getAddress(addresses.iWaya)
}

export const getFarmBoosterAddress = () => {
  return getAddress(addresses.FarmBooster)
}

export const getFarmBoosterProxyFactoryAddress = () => {
  return getAddress(addresses.FarmBoosterProxyFactory)
}
