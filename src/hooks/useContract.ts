import {
  Waya,
  WayaFlexibleVault,
  WayaVault,
  Erc20,
  Erc20Bytes32,
  Erc721collection,
  Multicall,
  Weth,
} from 'config/abi/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useProviderOrSigner } from 'hooks/useProviderOrSigner'
import { useMemo } from 'react'
import { getMulticallAddress } from 'utils/addressHelpers'
import {

  getFarmBoosterContract,
  getFarmBoosterProxyFactoryContract,
  getBWayaProxyContract,
  getBep20Contract,
  getWayaContract,
  getWayaFlexibleVaultContract,
  getWayaVaultContract,
  getErc721Contract,
  getErc721CollectionContract,
  getChieffarmerContract,
  getTaskAssistantContract,
} from 'utils/contractHelpers'
import { useSigner } from 'wagmi'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { WNATIVE } from '@plexswap/sdk'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import IPlexswapPairABI from '../config/abi/IPlexswapPair.json'
import multiCallAbi from '../config/abi/Multicall.json'
import WETH_ABI from '../config/abi/weth.json'
import { getContract } from '../utils'
import { IPlexswapPair } from '../config/abi/types/IPlexswapPair'
import { VaultKey } from '../state/types'
/**
 * Helper hooks to get specific contracts (by ABI)
 */
export const useERC20 = (address: string, withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getBep20Contract(address, providerOrSigner), [address, providerOrSigner])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string, withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getErc721Contract(address, providerOrSigner), [address, providerOrSigner])
}

export const useWaya = (): { reader: Waya; signer: Waya } => {
  const providerOrSigner = useProviderOrSigner()
  return useMemo(
    () => ({
      reader: getWayaContract(null),
      signer: getWayaContract(providerOrSigner),
    }),
    [providerOrSigner],
  )
}

export const useChieffarmer = (withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getChieffarmerContract(providerOrSigner), [providerOrSigner])
}

export const useTaskAssistant = (id) => {
  const { data: signer } = useSigner()
  return useMemo(() => getTaskAssistantContract(id, signer), [id, signer])
}

export const useVaultPoolContract = (vaultKey: VaultKey): WayaVault | WayaFlexibleVault => {
  const { data: signer } = useSigner()
  return useMemo(() => {
    if (vaultKey === VaultKey.WayaVault) {
      return getWayaVaultContract(signer)
    }
    if (vaultKey === VaultKey.WayaFlexibleVault) {
      return getWayaFlexibleVaultContract(signer)
    }
    return null
  }, [signer, vaultKey])
}

export const useWayaVaultContract = (withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getWayaVaultContract(providerOrSigner), [providerOrSigner])
}

export const useErc721CollectionContract = (
  collectionAddress: string,
): { reader: Erc721collection; signer: Erc721collection } => {
  const { data: signer } = useSigner()
  return useMemo(
    () => ({
      reader: getErc721CollectionContract(null, collectionAddress),
      signer: getErc721CollectionContract(signer, collectionAddress),
    }),
    [signer, collectionAddress],
  )
}

// Code below migrated from Exchange useContract.ts
// returns null on errors
export function useContract<T extends Contract = Contract>(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { provider } = useActiveWeb3React()
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible) ?? provider

  const canReturnContract = useMemo(() => address && ABI && providerOrSigner, [address, ABI, providerOrSigner])

  return useMemo(() => {
    if (!canReturnContract) return null
    try {
      return getContract(address, ABI, providerOrSigner)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, providerOrSigner, canReturnContract]) as T
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWNativeContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract<Weth>(chainId ? WNATIVE[chainId]?.address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract<Erc20Bytes32>(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): IPlexswapPair | null {
  return useContract(pairAddress, IPlexswapPairABI, withSignerIfPossible)
}

export function useMulticallContract() {
  const { chainId } = useActiveWeb3React()
  return useContract<Multicall>(getMulticallAddress(chainId), multiCallAbi, false)
}

export function useFarmBoosterContract(withSignerIfPossible = true) {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getFarmBoosterContract(providerOrSigner), [providerOrSigner])
}

export function useFarmBoosterProxyFactoryContract(withSignerIfPossible = true) {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getFarmBoosterProxyFactoryContract(providerOrSigner), [providerOrSigner])
}

export function useBWayaProxyContract(proxyContractAddress: string, withSignerIfPossible = true) {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(
    () => proxyContractAddress && getBWayaProxyContract(proxyContractAddress, providerOrSigner),
    [providerOrSigner, proxyContractAddress],
  )
}
