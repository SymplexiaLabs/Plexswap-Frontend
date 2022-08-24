import { Token, ChainId } from '@plexswap/sdk'
import getLpAddress from 'utils/getLpAddress'

const WAYA_AS_STRING = '0x0581c0dae41F19Fb4602E7ba0A803B7AE50f02E8'
const BUSD_AS_STRING = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const WAYA_AS_TOKEN = new Token(ChainId.MAINNET, WAYA_AS_STRING, 18)
const BUSD_AS_TOKEN = new Token(ChainId.MAINNET, BUSD_AS_STRING, 18)
const WAYA_BUSD_LP = '0x0867Ac91542eebc6Db1DD2516A5b0f4635EB0221'

describe('getLpAddress', () => {
  it('returns correct LP address, both tokens are strings', () => {
    expect(getLpAddress(WAYA_AS_STRING, BUSD_AS_STRING)).toBe(WAYA_BUSD_LP)
  })
  it('returns correct LP address, token1 is string, token 2 is Token', () => {
    expect(getLpAddress(WAYA_AS_STRING, BUSD_AS_TOKEN)).toBe(WAYA_BUSD_LP)
  })
  it('returns correct LP address, both tokens are Token', () => {
    expect(getLpAddress(WAYA_AS_TOKEN, BUSD_AS_TOKEN)).toBe(WAYA_BUSD_LP)
  })
  it('returns null if any address is invalid', () => {
    expect(getLpAddress('123', '456')).toBe(null)
    expect(getLpAddress(undefined, undefined)).toBe(null)
    expect(getLpAddress(WAYA_AS_STRING, undefined)).toBe(null)
    expect(getLpAddress(undefined, BUSD_AS_TOKEN)).toBe(null)
    expect(getLpAddress(WAYA_AS_STRING, '456')).toBe(null)
    expect(getLpAddress('123', BUSD_AS_TOKEN)).toBe(null)
  })
})
