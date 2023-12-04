import { ChainId } from './chainId'
import { chainNames, chainNameToChainId } from './chainNames'

export function getChainName(chainId: ChainId) {
  return chainNames[chainId]
}

export function getChainIdByChainName(chainName?: string): ChainId | undefined {
  if (!chainName) return undefined
  return chainNameToChainId[chainName] ?? undefined
}
