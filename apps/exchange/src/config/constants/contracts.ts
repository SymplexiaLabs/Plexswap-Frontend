import { multicallAddresses } from '@plexswap/multicall'
import { chiefFarmerAddresses, crossingVaultAddresses } from '@plexswap/farms'

export default {
  chiefFarmer: {
    5:    chiefFarmerAddresses[5],
    97:   chiefFarmerAddresses[97],
    56:   chiefFarmerAddresses[56],
    1149: chiefFarmerAddresses[1149],
  },
  multiCall: multicallAddresses,
  wayaVault: {
    97: '0xd5C79Cd66D2CF28fd0c0b3A41a1ba6D25880D70F',
    56: '0x7899654d3C4f2eEe352c833BD3aBE67Fb18A4D71',
    1149: '0xD521A6e16Ef1e26688cdD779da10376685B4858B',
  },
  wayaFlexibleVault: {
    97: '0xA83F46C4700B368E15588d4778df4274075e2b55',
    56: '0xB584cA7F7774EB9a68E60C032C45f0Efe9539AFE',
    1149: '0x9Ca28E70B28c72546dfc52E7b12C2dE3bAFc4205'
  },
  FarmBooster: {
    97: '0xe8eC0b12Db305E8A5431aC5cFb3daad2f1162AF9',
    56: '0x1A8B1dA52599E31B4BEC6240704F218be001eF84',
    1149: '0xD65a0Da39A5CA112C7e6F1CaABeB5AE5433267D5'
  },
  FarmBoosterProxyFactory: {
    97: '0xff440a6bE12d60c0f4e6827178eFAaF4044C4E69',
    56: '0x5D99aAa3838429c242142B8f00152714C88486a5',
    1149: '0x8BacdA81F099CE817e683560CC571Cd9Cd026485'
  },
}
