import { useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedLockedWayaVault, VaultKey } from 'state/types'

export const useUserLockedWayaStatus = () => {
  const vaultPool = useVaultPoolByKey(VaultKey.WayaVault) as DeserializedLockedWayaVault

  return {
    isLoading: vaultPool?.userData?.isLoading,
    locked: Boolean(vaultPool?.userData?.locked),
    lockedEnd: vaultPool?.userData?.lockEndTime,
  }
}
