import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = 'https://bsc-dataseed1.binance.org/'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
