import { mainnet, goerli, bsc, bscTestnet } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const plexchain: Chain = {
  id: 1149,
  name: 'Plexchain',
  network: 'plexchain',
  nativeCurrency: {
    decimals: 18,
    name: 'Plexchain Native Token',
    symbol: 'PLEX'
  },
  rpcUrls: {
    public:  { http: ['https://plex-rpc.plexfinance.us/'] },
    default: { http: ['https://plex-rpc.plexfinance.us/'] }
  },
  blockExplorers: {
    default: { name: 'PlexScan', url: 'https://explorer.plexfinance.us' }
  },
  contracts: {
    multicall3: {
        address: '0x2210e34629E5B17B5F2D875a76098223d71F1D3E',
        blockCreated: 455863,
    },
  }
};

export { mainnet, goerli, bsc, bscTestnet }