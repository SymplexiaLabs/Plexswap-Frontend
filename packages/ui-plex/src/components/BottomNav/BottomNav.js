import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, memo } from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { NotificationDot } from "../NotificationDot";
import { Overlay } from "../Overlay";
var BottomNav = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.activeItem, activeItem = _c === void 0 ? "" : _c, _d = _a.activeSubItem, activeSubItem = _d === void 0 ? "" : _d, props = __rest(_a, ["items", "activeItem", "activeSubItem"]);
    var _e = useState({}), menuOpenByIndex = _e[0], setMenuOpenByIndex = _e[1];
    var isBottomMenuOpen = Object.values(menuOpenByIndex).some(function (acc) { return acc; });
    return (_jsxs(_Fragment, { children: [isBottomMenuOpen && _jsx(Overlay, {}), _jsx(StyledBottomNav, __assign({ justifyContent: "space-around" }, props, { children: items.map(function (_a, index) {
                    var _b, _c;
                    var label = _a.label, menuItems = _a.items, href = _a.href, icon = _a.icon, fillIcon = _a.fillIcon, _d = _a.showOnMobile, showOnMobile = _d === void 0 ? true : _d, _e = _a.showItemsOnMobile, showItemsOnMobile = _e === void 0 ? true : _e, disabled = _a.disabled;
                    var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
                    return (showOnMobile && (_jsx(DropdownMenu, __assign({ items: menuItems, isBottomNav: true, activeItem: activeSubItem, showItemsOnMobile: showItemsOnMobile, setMenuOpenByIndex: setMenuOpenByIndex, index: index, isDisabled: disabled }, { children: _jsx(Box, { children: _jsx(NotificationDot, __assign({ show: !!statusColor, color: statusColor }, { children: _jsx(BottomNavItem, { href: href, disabled: disabled, isActive: href === activeItem, label: label, icon: icon, fillIcon: fillIcon, showItemsOnMobile: showItemsOnMobile }) })) }) }), "".concat(label, "#").concat(href))));
                }) }))] }));
};
export default memo(BottomNav);
