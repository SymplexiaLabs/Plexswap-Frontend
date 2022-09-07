import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { provider } from 'utils/wagmi'
import { Contract } from '@ethersproject/contracts'
import poolsConfig from 'config/constants/pools'
import { PoolCategory } from 'config/constants/types'
import { WAYA } from '@plexswap/tokens'

// Addresses
import {
  getAddress,
  getChiefFarmerAddress,
  getWayaVaultAddress,
  getMulticallAddress,
  getWayaFlexibleVaultAddress,
  getFarmBoosterAddress,
  getFarmBoosterProxyFactoryAddress,
} from 'utils/addressHelpers'

// ABI

import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import wayaAbi from 'config/abi/Waya.json'
import chiefFarmerAbi from 'config/abi/ChiefFarmer.json'
import taskAssistant from 'config/abi/TaskAssistant.json'
import taskAssistantV2Abi from 'config/abi/TaskAssistantV2.json'
import taskAssistantBnb from 'config/abi/TaskAssistantBnb.json'
import wayaVaultAbi from 'config/abi/WayaVault.json'
import wayaFlexibleVaultAbi from 'config/abi/wayaFlexibleVault.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import erc721CollectionAbi from 'config/abi/erc721collection.json'
import farmBoosterAbi from 'config/abi/FarmBooster.json'
import farmBoosterProxyFactoryAbi from 'config/abi/farmBoosterProxyFactory.json'
import bWayaProxyAbi from 'config/abi/bWayaProxy.json'

// Types
import type {
  Erc20,
  Erc721,
  Waya,
  ChiefFarmer,
  TaskAssistant,
  TaskAssistantV2,
  LpToken,
  Multicall,
  Erc721collection,
  WayaVault,
  WayaFlexibleVault,
  FarmBooster,
  FarmBoosterProxyFactory,
  BWayaProxy,
} from 'config/abi/types'
import { ChainId } from '@plexswap/sdk'

export const getContract = ({
  abi,
  address,
  chainId = ChainId.BSC,
  signer,
}: {
  abi: any
  address: string
  chainId?: ChainId
  signer?: Signer | Provider
}) => {
  const signerOrProvider = signer ?? provider({ chainId })
  return new Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract({ abi: bep20Abi, address, signer }) as Erc20
}
export const getErc721Contract = (address: string, signer?: Signer | Provider) => {
  return getContract({ abi: erc721Abi, address, signer }) as Erc721
}
export const getLpContract = (address: string, signer?: Signer | Provider) => {
  return getContract({ abi: lpTokenAbi, address, signer }) as LpToken
}
export const getTaskAssistantContract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.poolId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? taskAssistantBnb : taskAssistant
  return getContract({ abi, address: getAddress(config.contractAddress), signer }) as TaskAssistant
}
export const getTaskAssistantV2Contract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.poolId === id)
  return getContract({ abi: taskAssistantV2Abi, address: getAddress(config.contractAddress), signer }) as TaskAssistantV2
}

export const getWayaContract = (signer?: Signer | Provider, chainId?: number) => {
  return getContract({
    abi: wayaAbi,
    address: chainId ? WAYA[chainId].address : WAYA[ChainId.BSC].address,
    signer,
  }) as Waya
}

export const getChiefFarmerContract = (signer?: Signer | Provider, chainId?: number) => {
  return getContract({ abi: chiefFarmerAbi, address: getChiefFarmerAddress(chainId), signer }) as ChiefFarmer
}

export const getWayaVaultContract = (signer?: Signer | Provider) => {
  return getContract({ abi: wayaVaultAbi, address: getWayaVaultAddress(), signer }) as WayaVault
}

export const getWayaFlexibleVaultContract = (signer?: Signer | Provider) => {
  return getContract({
    abi: wayaFlexibleVaultAbi,
    address: getWayaFlexibleVaultAddress(),
    signer,
  }) as WayaFlexibleVault
}

 export const getMulticallContract = (chainId: ChainId) => {
  return getContract({ abi: MultiCallAbi, address: getMulticallAddress(chainId), chainId }) as Multicall
}

export const getErc721CollectionContract = (signer?: Signer | Provider, address?: string) => {
  return getContract({ abi: erc721CollectionAbi, address, signer }) as Erc721collection
}

export const getFarmBoosterContract = (signer?: Signer | Provider) => {
  return getContract({ abi: farmBoosterAbi, address: getFarmBoosterAddress(), signer }) as FarmBooster
}

export const getFarmBoosterProxyFactoryContract = (signer?: Signer | Provider) => {
  return getContract({
    abi: farmBoosterProxyFactoryAbi,
    address: getFarmBoosterProxyFactoryAddress(),
    signer,
  }) as FarmBoosterProxyFactory
}

export const getBWayaProxyContract = (proxyContractAddress: string, signer?: Signer | Provider) => {
  return getContract({ abi: bWayaProxyAbi, address: proxyContractAddress, signer }) as BWayaProxy
}
