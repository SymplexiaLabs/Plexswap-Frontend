import farms56 from '@plexswap/farms/config/56'
import farms1149 from '@plexswap/farms/config/1149'
import { SerializedFarm } from 'state/types'
import { getLpContract } from 'utils/contractHelpers'

// Test only against the last 10 farms, for performance concern
const farms56ToTest: [number, SerializedFarm, number][] = farms56
  .filter((farm) => farm.pid !== 0)
  .slice(0, 10)
  .map((farm) => [farm.pid, farm, 56])

const farms1149ToTest: [number, SerializedFarm, number][] = farms1149
  .filter((farm) => farm.pid !== 0)
  .slice(0, 10)
  .map((farm) => [farm.pid, farm, 1149])

describe('Config farms', () => {
  it.each([...farms56ToTest])('Farm #%d has an unique pid - chainid:56', (pid) => {
    const duplicates = farms56.filter((f) => pid === f.pid)
    expect(duplicates).toHaveLength(1)
  })

  it.each([...farms1149ToTest])('Farm #%d has an unique pid - chainid:1149', (pid) => {
    const duplicates = farms1149.filter((f) => pid === f.pid)
    expect(duplicates).toHaveLength(1)
  })

  it.each([...farms56ToTest])('Farm #%d has an unique address - chainid:56', (pid, farm) => {
    const duplicates = farms56.filter((f) => farm.lpAddress === f.lpAddress)
    expect(duplicates).toHaveLength(1)
  })

  it.each([...farms1149ToTest])('Farm #%d has an unique address - chainid:1149', (pid, farm) => {
    const duplicates = farms1149.filter((f) => farm.lpAddress === f.lpAddress)
    expect(duplicates).toHaveLength(1)
  })
  it.each([...farms56ToTest, ...farms1149ToTest])('Farm %d has the correct token addresses', async (pid, farm, chainId) => {
    const tokenAddress = farm.token.address
    const quoteTokenAddress = farm.quoteToken.address
    const lpContract = getLpContract(farm.lpAddress, chainId)

    const token0Address = (await lpContract.token0()).toLowerCase()
    const token1Address = (await lpContract.token1()).toLowerCase()

    expect(
      token0Address === tokenAddress.toLowerCase() || token0Address === quoteTokenAddress.toLowerCase(),
    ).toBeTruthy()
    expect(
      token1Address === tokenAddress.toLowerCase() || token1Address === quoteTokenAddress.toLowerCase(),
    ).toBeTruthy()
  })

  // TODO: Add test for ETH
  // The first pid using the new factory
  const START_PID = 2
  const FACTORY_ADDRESS = '0xca143ce32fe78f1f7019d7d551a6402fc5350c73'
  const newFarmsToTest = farms56ToTest.filter((farmSet) => farmSet[0] >= START_PID)

  it.each(newFarmsToTest)('farm %d is using correct factory address', async (pid, farm) => {
    const lpContract = getLpContract(farm.lpAddress)
    const factory = await lpContract.factory()
    expect(factory.toLowerCase()).toEqual(FACTORY_ADDRESS)
  })
})
