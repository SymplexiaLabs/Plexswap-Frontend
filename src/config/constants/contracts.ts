import { multicallAddresses } from '@plexswap/multicall'
import { chiefFarmerAddresses, nonBSCVaultAddresses } from '@plexswap/farms'

export default {
  chiefFarmer: {
    5:  nonBSCVaultAddresses[5],
    97: chiefFarmerAddresses[97],
    56: chiefFarmerAddresses[56],
  },
  multiCall: multicallAddresses,
  wayaVault: {
    97: '0xd5C79Cd66D2CF28fd0c0b3A41a1ba6D25880D70F',
    56: '0x7899654d3C4f2eEe352c833BD3aBE67Fb18A4D71',
  },
  wayaFlexibleVault: {
    97: '0xA83F46C4700B368E15588d4778df4274075e2b55',
    56: '0xB584cA7F7774EB9a68E60C032C45f0Efe9539AFE',
  },
    taskAssistant: {
    97: '0x994b467b83fF7ffF74FDC8b26F034f1A68eCf1ae',
    56: '0xfd5044541EFdCf6B6a83e6ecBF3f477C8cEC6433',
  },
  iWaya: {
    97: '0xdC17Cab1269a6aE0A3b57bCbe803b2b743BaCA3A',
    56: '',
  },
  FarmBooster: {
    97: '0xe8eC0b12Db305E8A5431aC5cFb3daad2f1162AF9',
    56: '',
  },
  FarmBoosterProxyFactory: {
    97: '0xff440a6bE12d60c0f4e6827178eFAaF4044C4E69',
    56: '',
  },
}
