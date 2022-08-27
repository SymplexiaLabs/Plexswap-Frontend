import NoBscVaultAbi from 'config/abi/NoBscVaultAbi.json'
import { getChiefFarmerAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { ChainId } from '@plexswap/sdk'

// will return BSC or BSC Testnet chainId
export const getBscChainId = async (chainId: number) => {
  try {
    if (!chainId) {
      return ChainId.BSC
    }

    const calls = [
      {
        name: 'BSC_CHAIN_ID',
        address: getChiefFarmerAddress(chainId),
      },
    ]
    const [[bscChainId]] = await multicallv2({ abi: NoBscVaultAbi, calls, chainId })
    return bscChainId
  } catch (error) {
    console.error('Get BSC Chain Id Error: ', error)
    return ChainId.BSC
  }
}
