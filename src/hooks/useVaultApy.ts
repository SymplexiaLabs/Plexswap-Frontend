import { BigNumber, FixedNumber } from '@ethersproject/bignumber'
import { WeiPerEther } from '@ethersproject/constants'
import _toString from 'lodash/toString'
import { BLOCKS_PER_YEAR } from 'config'
import chiefFarmerAbi from 'config/abi/ChiefFarmer.json'
import { useCallback, useMemo } from 'react'
import { useWayaVault } from 'state/pools/hooks'
import useSWRImmutable from 'swr/immutable'
import { getChiefFarmerAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { BOOST_WEIGHT, DURATION_FACTOR, MAX_LOCK_DURATION } from 'config/constants/pools'
import { multicallv2 } from '../utils/multicall'

const chiefFarmerAddress = getChiefFarmerAddress()

// default
const DEFAULT_PERFORMANCE_FEE_DECIMALS = 2

const PRECISION_FACTOR = BigNumber.from('1000000000000')

const getFlexibleApy = (
  totalWayaPoolEmissionPerYear: FixedNumber,
  pricePerFullShare: FixedNumber,
  totalShares: FixedNumber,
) =>
  totalWayaPoolEmissionPerYear
    .mulUnsafe(FixedNumber.from(WeiPerEther))
    .divUnsafe(pricePerFullShare)
    .divUnsafe(totalShares)
    .mulUnsafe(FixedNumber.from(100))

const _getBoostFactor = (boostWeight: BigNumber, duration: number, durationFactor: BigNumber) => {
  return FixedNumber.from(boostWeight)
    .mulUnsafe(FixedNumber.from(Math.max(duration, 0)))
    .divUnsafe(FixedNumber.from(durationFactor))
    .divUnsafe(FixedNumber.from(PRECISION_FACTOR))
}

const getLockedApy = (flexibleApy: string, boostFactor: FixedNumber) =>
  FixedNumber.from(flexibleApy).mulUnsafe(boostFactor.addUnsafe(FixedNumber.from('1')))

const dummyWayaPoolPID = 0

export function useVaultApy({ duration = MAX_LOCK_DURATION }: { duration?: number } = {}) {
  const {
    totalShares = BIG_ZERO,
    pricePerFullShare = BIG_ZERO,
    fees: { performanceFeeAsDecimal } = { performanceFeeAsDecimal: DEFAULT_PERFORMANCE_FEE_DECIMALS },
  } = useWayaVault()

  const totalSharesAsEtherBN = useMemo(() => FixedNumber.from(totalShares.toString()), [totalShares])
  const pricePerFullShareAsEtherBN = useMemo(() => FixedNumber.from(pricePerFullShare.toString()), [pricePerFullShare])

  const { data: totalWayaPoolEmissionPerYear } = useSWRImmutable('chiefFarmer-total-waya-pool-emission', async () => {
    const calls = [
      {
        address: chiefFarmerAddress,
        name: 'wayaPerBlock',
        params: [false],
      },
      {
        address: chiefFarmerAddress,
        name: 'poolInfo',
        params: [dummyWayaPoolPID],
      },
      {
        address: chiefFarmerAddress,
        name: 'totalSpecialAllocPoint',
      },
    ]

    const [[specialFarmsPerBlock], wayaPoolInfo, [totalSpecialAllocPoint]] = await multicallv2(chiefFarmerAbi, calls)

    const wayaPoolSharesInSpecialFarms = FixedNumber.from(wayaPoolInfo.allocPoint).divUnsafe(
      FixedNumber.from(totalSpecialAllocPoint),
    )
    return FixedNumber.from(specialFarmsPerBlock)
      .mulUnsafe(FixedNumber.from(BLOCKS_PER_YEAR))
      .mulUnsafe(wayaPoolSharesInSpecialFarms)
  })

  const flexibleApy = useMemo(
    () =>
      totalWayaPoolEmissionPerYear &&
      !pricePerFullShareAsEtherBN.isZero() &&
      !totalSharesAsEtherBN.isZero() &&
      getFlexibleApy(totalWayaPoolEmissionPerYear, pricePerFullShareAsEtherBN, totalSharesAsEtherBN).toString(),
    [pricePerFullShareAsEtherBN, totalWayaPoolEmissionPerYear, totalSharesAsEtherBN],
  )

  const boostFactor = useMemo(() => _getBoostFactor(BOOST_WEIGHT, duration, DURATION_FACTOR), [duration])

  const lockedApy = useMemo(() => {
    return flexibleApy && getLockedApy(flexibleApy, boostFactor).toString()
  }, [boostFactor, flexibleApy])

  const getBoostFactor = useCallback(
    (adjustDuration: number) => _getBoostFactor(BOOST_WEIGHT, adjustDuration, DURATION_FACTOR),
    [],
  )

  const flexibleApyNoFee = useMemo(() => {
    if (flexibleApy && performanceFeeAsDecimal) {
      const rewardPercentageNoFee = _toString(1 - performanceFeeAsDecimal / 100)

      return FixedNumber.from(flexibleApy).mulUnsafe(FixedNumber.from(rewardPercentageNoFee)).toString()
    }

    return flexibleApy
  }, [flexibleApy, performanceFeeAsDecimal])

  return {
    flexibleApy: flexibleApyNoFee,
    lockedApy,
    getLockedApy: useCallback(
      (adjustDuration: number) => flexibleApy && getLockedApy(flexibleApy, getBoostFactor(adjustDuration)).toString(),
      [flexibleApy, getBoostFactor],
    ),
    boostFactor: useMemo(() => boostFactor.addUnsafe(FixedNumber.from('1')), [boostFactor]),
    getBoostFactor: useCallback(
      (adjustDuration: number) => getBoostFactor(adjustDuration).addUnsafe(FixedNumber.from('1')),
      [getBoostFactor],
    ),
  }
}
