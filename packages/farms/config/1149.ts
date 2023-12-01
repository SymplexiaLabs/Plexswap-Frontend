import { plexchainTokens, WAYA_PLEXCHAIN } from '@plexswap/tokens'
import { SerializedFarmConfig } from '@plexswap/farms'

const farms: SerializedFarmConfig[] = [
   /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAYA',
    lpAddress: WAYA_PLEXCHAIN.address, // Waya Address
    token: plexchainTokens.waya,
    quoteToken: plexchainTokens.wplex,
  },
  {
    pid: 1,
    lpSymbol: 'WAYA/PLEX LP',
    lpAddress:  '0x1571238fc03aa157e6cc77145709b78b35b84108', // WAYA-LP Pair
    token: plexchainTokens.waya,
    quoteToken: plexchainTokens.wplex,
  },
  {
    pid: 2,
    lpSymbol: 'PLEX-F/PLEX LP',
    lpAddress:  '0xc6de9de7de07eb5e7569e67ad76dc0680c7b98ec',
    token: plexchainTokens.plexf,
    quoteToken: plexchainTokens.wplex,
  },
  {
    pid: 3,
    lpSymbol: 'PLEX/USDP LP',
    lpAddress:  '0x8a233567a582de5110f03bdfe531fb6d1cb02969',
    token: plexchainTokens.wplex,
    quoteToken: plexchainTokens.usdp,
  },
  {
    pid: 4,
    lpSymbol: 'WAYA/USDP LP',
    lpAddress:  '0xe5c042fc3de449e3fc70799e88ff034d539abfc4',
    token: plexchainTokens.waya,
    quoteToken: plexchainTokens.usdp,
  },
  {
    pid: 5,
    lpSymbol: 'PLEX-F/USDP LP',
    lpAddress:  '0xc27987dab15c3c1be2c2bb052c5ce79dad5c51fc',
    token: plexchainTokens.plexf,
    quoteToken: plexchainTokens.usdp,
  },
 ].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
