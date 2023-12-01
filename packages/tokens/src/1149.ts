import { ChainId, Token, WPLEX } from '@plexswap/sdk'
import { WAYA_PLEXCHAIN, PLEXF_PLEXCHAIN, USDP_PLEXCHAIN } from './common'

export const plexchainTokens = {
  // PLEX native here points to the wplex contract. Wherever the currency PLEX is required, conditional checks for the symbol 'BNB' can be used
  plex: new Token(
    ChainId.PLEXCHAIN,
    '0x50245424Afc53E67Ca1AAD2C90401568C0eFf53A',
    18,
    'PLEX',
    'PLEX',
    'https://plexfinance.us',
  ),
  wplex: WPLEX[ChainId.PLEXCHAIN],
  waya: WAYA_PLEXCHAIN,
  plexf: PLEXF_PLEXCHAIN,
  usdp: USDP_PLEXCHAIN,
}
