import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/no-array-index-key */
import { useContext, useEffect, useState, useCallback } from "react";
import { usePopper } from "react-popper";
import { useOnClickOutside } from "../../hooks";
import { MenuContext } from "../../widgets/Menu/context";
import { Box, Flex } from "../Box";
import { LogoutIcon } from "../Svg";
import { DropdownMenuDivider, DropdownMenuItem, StyledDropdownMenu, LinkStatus, StyledDropdownMenuItemContainer, } from "./styles";
import { DropdownMenuItemType } from "./types";
var DropdownMenu = function (_a) {
    var children = _a.children, _b = _a.isBottomNav, isBottomNav = _b === void 0 ? false : _b, _c = _a.showItemsOnMobile, showItemsOnMobile = _c === void 0 ? false : _c, _d = _a.activeItem, activeItem = _d === void 0 ? "" : _d, _e = _a.items, items = _e === void 0 ? [] : _e, index = _a.index, setMenuOpenByIndex = _a.setMenuOpenByIndex, isDisabled = _a.isDisabled, props = __rest(_a, ["children", "isBottomNav", "showItemsOnMobile", "activeItem", "items", "index", "setMenuOpenByIndex", "isDisabled"]);
    var linkComponent = useContext(MenuContext).linkComponent;
    var _f = useState(false), isOpen = _f[0], setIsOpen = _f[1];
    var _g = useState(null), targetRef = _g[0], setTargetRef = _g[1];
    var _h = useState(null), tooltipRef = _h[0], setTooltipRef = _h[1];
    var hasItems = items.length > 0;
    var _j = usePopper(targetRef, tooltipRef, {
        strategy: isBottomNav ? "absolute" : "fixed",
        placement: isBottomNav ? "top" : "bottom-start",
        modifiers: [{ name: "offset", options: { offset: [0, isBottomNav ? 6 : 0] } }]
    }), styles = _j.styles, attributes = _j.attributes;
    var isMenuShow = isOpen && ((isBottomNav && showItemsOnMobile) || !isBottomNav);
    useEffect(function () {
        var showDropdownMenu = function () {
            setIsOpen(true);
        };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen, isBottomNav]);
    useEffect(function () {
        if (setMenuOpenByIndex && index !== undefined) {
            setMenuOpenByIndex(function (prevValue) {
                var _a;
                return (__assign(__assign({}, prevValue), (_a = {}, _a[index] = isMenuShow, _a)));
            });
        }
    }, [isMenuShow, setMenuOpenByIndex, index]);
    useOnClickOutside(targetRef, useCallback(function () {
        setIsOpen(false);
    }, [setIsOpen]));
    return (_jsxs(Box, __assign({ ref: setTargetRef }, props, { children: [_jsx(Box, __assign({ onPointerDown: function () {
                    setIsOpen(function (s) { return !s; });
                } }, { children: children })), hasItems && (_jsx(StyledDropdownMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isBottomNav": isBottomNav, "$isOpen": isMenuShow }, { children: items
                    .filter(function (item) { return !item.isMobileOnly; })
                    .map(function (_a, itemItem) {
                    var _b = _a.type, type = _b === void 0 ? DropdownMenuItemType.INTERNAL_LINK : _b, label = _a.label, _c = _a.href, href = _c === void 0 ? "/" : _c, status = _a.status, disabled = _a.disabled, itemProps = __rest(_a, ["type", "label", "href", "status", "disabled"]);
                    var MenuItemContent = (_jsxs(_Fragment, { children: [label, status && (_jsx(LinkStatus, __assign({ color: status.color, fontSize: "14px" }, { children: status.text })))] }));
                    var isActive = href === activeItem;
                    return (_jsxs(StyledDropdownMenuItemContainer, { children: [type === DropdownMenuItemType.BUTTON && (_jsx(DropdownMenuItem, __assign({ "$isActive": isActive, disabled: disabled || isDisabled, type: "button" }, itemProps, { children: MenuItemContent }))), type === DropdownMenuItemType.INTERNAL_LINK && (_jsx(DropdownMenuItem, __assign({ "$isActive": isActive, disabled: disabled || isDisabled, as: linkComponent, href: href, onClick: function () {
                                    setIsOpen(false);
                                } }, itemProps, { children: MenuItemContent }))), type === DropdownMenuItemType.EXTERNAL_LINK && (_jsx(DropdownMenuItem, __assign({ "$isActive": isActive, disabled: disabled || isDisabled, as: "a", href: href, target: "_blank", onClick: function () {
                                    setIsOpen(false);
                                } }, itemProps, { children: _jsxs(Flex, __assign({ alignItems: "center", justifyContent: "space-between", width: "100%" }, { children: [label, _jsx(LogoutIcon, {})] })) }))), type === DropdownMenuItemType.DIVIDER && _jsx(DropdownMenuDivider, {})] }, itemItem));
                }) })))] })));
};
export default DropdownMenu;
