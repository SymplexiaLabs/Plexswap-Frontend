import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement, memo } from "react";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
var MenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, props = __rest(_a, ["items", "activeItem", "activeSubItem"]);
    return (_jsx(Flex, __assign({}, props, { children: items.map(function (_a) {
            var _b, _c;
            var label = _a.label, _d = _a.items, menuItems = _d === void 0 ? [] : _d, href = _a.href, icon = _a.icon, disabled = _a.disabled;
            var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
            var isActive = activeItem === href;
            var linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href: href };
            var Icon = icon;
            return (_jsx(DropdownMenu, __assign({ items: menuItems, py: 1, activeItem: activeSubItem, isDisabled: disabled }, { children: _jsx(MenuItem, __assign({}, linkProps, { isActive: isActive, statusColor: statusColor, isDisabled: disabled }, { children: label || (icon && createElement(Icon, { color: isActive ? "secondary" : "textSubtle" })) })) }), "".concat(label, "#").concat(href)));
        }) })));
};
export default memo(MenuItems);
