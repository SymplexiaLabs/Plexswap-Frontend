import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,

  MoreIcon,
} from '@plexswap/ui-plex'
import { ContextApi } from '@plexswap/localization'

import { DropdownMenuItems } from '@plexswap/ui-plex/src/components/DropdownMenu/types'
import { ChainId } from '@plexswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t) =>
    [
     {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Limit'),
        href: '/limit-orders',    
        supportChainIds: [ChainId.BSC],

      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    supportChainIds: [ChainId.BSC],
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Silos'),
        href: '/pools',
      },
    ],
  },

  {
    label: 'Info',
    href: '',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Documentation'),
        href: 'https://docs.plexfinance.us',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Making Proposals'),
        href: '/voting',
        supportChainIds: [ChainId.BSC],
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Crypto News'),
        href: 'https://news.symplexia.com/category/new-economy/cryptocurrency/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('PLEX-F Info'),
        href: 'https://finance.symplexia.com/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
