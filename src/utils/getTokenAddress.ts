import { ChainId, WBNB } from '@plexswap/sdk'

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
