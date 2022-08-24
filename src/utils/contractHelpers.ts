import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { bscRpcProvider } from 'utils/providers'
import poolsConfig from 'config/constants/pools'
import { PoolCategory } from 'config/constants/types'
import { WAYA } from 'config/constants/tokens'

// Addresses
import {
  getAddress,
  getChiefFarmerAddress,
  getWayaVaultAddress,
  getWayaFlexibleVaultAddress,
  getMulticallAddress,
  getFarmBoosterAddress,
  getFarmBoosterProxyFactoryAddress,
  } from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import wayaAbi from 'config/abi/Waya.json'
import chiefFarmer from 'config/abi/ChiefFarmer.json'
import taskAssistant from 'config/abi/TaskAssistant.json'
import taskAssistantBnb from 'config/abi/TaskAssistantBnb.json'
import wayaVaultAbi from 'config/abi/WayaVault.json'
import wayaFlexibleVaultAbi from 'config/abi/WayaFlexibleVault.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import erc721CollectionAbi from 'config/abi/erc721collection.json'

import FarmBoosterAbi from 'config/abi/FarmBooster.json'
import FarmBoosterProxyFactoryAbi from 'config/abi/FarmBoosterProxyFactory.json'
import bWayaProxyAbi from 'config/abi/bWayaProxy.json'

// Types
import type {
  Erc20,
  Erc721,
  Waya,
  ChiefFarmer,
  TaskAssistant,
  LpToken,
  Erc721collection,
  WayaVault,
  WayaFlexibleVault,
  Multicall,
  FarmBooster,
  FarmBoosterProxyFactory,
  BWayaProxy,
} from 'config/abi/types'
import { ChainId } from '@plexswap/sdk'

export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? bscRpcProvider
  return new Contract(address, abi, signerOrProvider)
}
export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer) as Erc20
}
export const getErc721Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(erc721Abi, address, signer) as Erc721
}
export const getLpContract = (address: string, signer?: Signer | Provider) => {
  return getContract(lpTokenAbi, address, signer) as LpToken
}
export const getTaskAssistantContract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.poolId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? taskAssistantBnb : taskAssistant
  return getContract(abi, getAddress(config.contractAddress), signer) as TaskAssistant
}
export const getWayaContract = (signer?: Signer | Provider, chainId?: number) => {
  return getContract(wayaAbi, chainId ? WAYA[chainId].address : WAYA[ChainId.BSC].address, signer) as Waya
}
export const getChieffarmerContract = (signer?: Signer | Provider) => {
  return getContract(chiefFarmer, getChiefFarmerAddress(), signer) as ChiefFarmer
}
export const getWayaVaultContract = (signer?: Signer | Provider) => {
  return getContract(wayaVaultAbi, getWayaVaultAddress(), signer) as WayaVault
}
export const getWayaFlexibleVaultContract = (signer?: Signer | Provider) => {
  return getContract(wayaFlexibleVaultAbi, getWayaFlexibleVaultAddress(), signer) as WayaFlexibleVault
}
export const getErc721CollectionContract = (signer?: Signer | Provider, address?: string) => {
  return getContract(erc721CollectionAbi, address, signer) as Erc721collection
}
export const getMulticallContract = () => {
  return getContract(MultiCallAbi, getMulticallAddress(), bscRpcProvider) as Multicall
}
export const getFarmBoosterContract = (signer?: Signer | Provider) => {
  return getContract(FarmBoosterAbi, getFarmBoosterAddress(), signer) as FarmBooster
}
export const getFarmBoosterProxyFactoryContract = (signer?: Signer | Provider) => {
  return getContract(
    FarmBoosterProxyFactoryAbi,
    getFarmBoosterProxyFactoryAddress(),
    signer,
  ) as FarmBoosterProxyFactory
}
export const getBWayaProxyContract = (proxyContractAddress: string, signer?: Signer | Provider) => {
  return getContract(bWayaProxyAbi, proxyContractAddress, signer) as BWayaProxy
}
