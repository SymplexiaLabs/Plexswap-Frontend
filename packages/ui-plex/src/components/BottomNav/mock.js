import ItemsMock from "../DropdownMenu/mock";
import { SwapFillIcon, SwapIcon, EarnFillIcon, EarnIcon, MoreIcon } from "../Svg";
var MenuItemsMock = [
    {
        label: "Swap",
        href: "/swap",
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        items: ItemsMock,
        showItemsOnMobile: false
    },
    {
        label: "Earn",
        href: "/earn",
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        items: ItemsMock,
        showItemsOnMobile: true
    },
    {
        label: "More",
        href: "/more",
        icon: MoreIcon,
        items: ItemsMock,
        showItemsOnMobile: true
    },
];
export default MenuItemsMock;
