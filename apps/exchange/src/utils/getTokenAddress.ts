import { WBNB } from '@plexswap/sdk'
import { ChainId  } from '@plexswap/chains'

const BNB_ADDRESS = WBNB[ChainId.BSC].address

export const getTokenAddress = (tokenAddress: undefined | string) => {
  if (!tokenAddress) {
    return ''
  }
  const lowerCaseAddress = tokenAddress.toLowerCase()
  if (lowerCaseAddress === 'bnb') {
    return BNB_ADDRESS
  }

  return lowerCaseAddress
}
