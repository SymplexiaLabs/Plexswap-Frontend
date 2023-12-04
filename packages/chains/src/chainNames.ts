import { ChainId } from './chainId'

export const chainNames: Record<ChainId, string> = {
  [ChainId.GOERLI]: 'goerli',
  [ChainId.BSC]: 'bsc',
  [ChainId.BSC_TESTNET]: 'bscTestnet',
  [ChainId.PLEXCHAIN]: 'plexchain',
}

export const chainNameToChainId = Object.entries(chainNames).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

