import noop from "lodash/noop";
import { DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { SwapIcon, SwapFillIcon, EarnFillIcon, EarnIcon, MoreIcon, } from "../../components/Svg";
export var status = {
    LIVE: {
        text: "LIVE",
        color: "failure"
    },
    SOON: {
        text: "SOON",
        color: "warning"
    },
    NEW: {
        text: "NEW",
        color: "success"
    }
};
export var links = [
    {
        label: "Trade",
        href: "/swap",
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        items: [
            {
                label: "Swap",
                href: "/swap"
            },
            {
                label: 'Limit',
                href: '/limit-orders'
            },
            {
                label: "Liquidity",
                href: "/liquidity"
            },
        ]
    },
    {
        label: "Earn",
        href: "/farms",
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        items: [
            {
                label: "Farms",
                href: "/farms"
            },
            {
                label: "Silos",
                href: "/pools"
            },
        ]
    },
    {
        label: "Info",
        href: "",
        icon: MoreIcon,
        items: [
            {
                label: 'Documentation',
                href: '/',
                type: DropdownMenuItemType.EXTERNAL_LINK
            },
            {
                label: 'Making Proposals',
                href: '/'
            },
            {
                type: DropdownMenuItemType.DIVIDER
            },
            {
                label: 'Crypto News',
                href: '/',
                type: DropdownMenuItemType.EXTERNAL_LINK
            },
        ]
    },
];
export var userMenulinks = [
    {
        label: "Wallet",
        onClick: noop,
        type: DropdownMenuItemType.BUTTON
    },
    {
        label: "Transactions",
        type: DropdownMenuItemType.BUTTON
    },
    {
        type: DropdownMenuItemType.DIVIDER
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Dashboard"
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Portfolio"
    },
    {
        type: DropdownMenuItemType.EXTERNAL_LINK,
        href: "https://swap.plexfinance.us",
        label: "Link"
    },
    {
        type: DropdownMenuItemType.DIVIDER
    },
    {
        type: DropdownMenuItemType.BUTTON,
        onClick: noop,
        label: "Disconnect"
    },
];
export var MENU_HEIGHT = 56;
export var MENU_ENTRY_HEIGHT = 48;
export var MOBILE_MENU_HEIGHT = 44;
export var SIDEBAR_WIDTH_FULL = 240;
export var SIDEBAR_WIDTH_REDUCED = 56;
export var TOP_BANNER_HEIGHT = 70;
export var TOP_BANNER_HEIGHT_MOBILE = 84;
