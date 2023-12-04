import { ChainId } from '@plexswap/chains'

export const verifyFarmNetwork = (chainId: number) => {
  return chainId === ChainId.BSC || chainId === ChainId.BSC_TESTNET || chainId === ChainId.PLEXCHAIN || chainId === ChainId.GOERLI
}
