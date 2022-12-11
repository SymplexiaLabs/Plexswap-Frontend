import noop from "lodash/noop";
import { DropdownMenuItemType } from "./types";
var ItemsMock = [
    {
        label: "Exchange",
        href: "/swap"
    },
    {
        label: "Liquidity",
        href: "/pool"
    },
    {
        type: DropdownMenuItemType.DIVIDER
    },
    {
        label: "Disconnect",
        onClick: noop,
        type: DropdownMenuItemType.BUTTON
    },
];
export default ItemsMock;
