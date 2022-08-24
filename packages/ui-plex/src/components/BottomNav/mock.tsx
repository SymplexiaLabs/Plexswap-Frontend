import ItemsMock from "../DropdownMenu/mock";
import { MenuItemsType } from "../MenuItems/types";
import { SwapFillIcon, SwapIcon, EarnFillIcon, EarnIcon, MoreIcon, TrophyIcon, TrophyFillIcon } from "../Svg";

const MenuItemsMock: MenuItemsType[] = [
  {
    label: "Swap",
    href: "/swap",
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    items: ItemsMock,
    showItemsOnMobile: false,
  },
  {
    label: "Earn",
    href: "/earn",
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: ItemsMock,
    showItemsOnMobile: true,
  },
  {
    label: "Gagnez des jetons",
    href: "/win",
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: ItemsMock,
    showItemsOnMobile: true,
  },
  {
    label: "More",
    href: "/more",
    icon: MoreIcon,
    items: ItemsMock,
    showItemsOnMobile: true,
  },
];

export default MenuItemsMock;
