import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import debounce from "lodash/debounce";
import { useCallback, useEffect, useRef } from "react";
import { useMatchBreakpoints } from "../../contexts";
import { Box } from "../Box";
import { DropdownMenuItemType } from "../DropdownMenu/types";
import MenuItem from "../MenuItem/MenuItem";
import { ChevronLeftIcon, ChevronRightIcon, OpenNewIcon } from "../Svg";
import StyledSubMenuItems, { LeftMaskLayer, RightMaskLayer, StyledSubMenuItemWrapper, SubMenuItemWrapper, } from "./styles";
var SUBMENU_CHEVRON_CLICK_MOVE_PX = 100;
var SUBMENU_SCROLL_DEVIATION = 3;
var SubMenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, _c = _a.isMobileOnly, isMobileOnly = _c === void 0 ? false : _c, props = __rest(_a, ["items", "activeItem", "isMobileOnly"]);
    var isMobile = useMatchBreakpoints().isMobile;
    var scrollLayerRef = useRef(null);
    var chevronLeftRef = useRef(null);
    var chevronRightRef = useRef(null);
    var layerController = useCallback(function () {
        if (!scrollLayerRef.current || !chevronLeftRef.current || !chevronRightRef.current)
            return;
        var scrollLayer = scrollLayerRef.current;
        if (scrollLayer.scrollLeft === 0)
            chevronLeftRef.current.classList.add("hide");
        else
            chevronLeftRef.current.classList.remove("hide");
        if (scrollLayer.scrollLeft + scrollLayer.offsetWidth < scrollLayer.scrollWidth - SUBMENU_SCROLL_DEVIATION)
            chevronRightRef.current.classList.remove("hide");
        else
            chevronRightRef.current.classList.add("hide");
    }, []);
    useEffect(function () {
        layerController();
    }, [layerController]);
    return (_jsxs(SubMenuItemWrapper, __assign({ "$isMobileOnly": isMobileOnly }, props, { children: [isMobile && (_jsx(LeftMaskLayer, __assign({ ref: chevronLeftRef, onClick: function () {
                    if (!scrollLayerRef.current)
                        return;
                    scrollLayerRef.current.scrollLeft -= SUBMENU_CHEVRON_CLICK_MOVE_PX;
                } }, { children: _jsx(ChevronLeftIcon, {}) }))), isMobile && (_jsx(RightMaskLayer, __assign({ ref: chevronRightRef, onClick: function () {
                    if (!scrollLayerRef.current)
                        return;
                    scrollLayerRef.current.scrollLeft += SUBMENU_CHEVRON_CLICK_MOVE_PX;
                } }, { children: _jsx(ChevronRightIcon, {}) }))), _jsx(StyledSubMenuItems, __assign({ justifyContent: [isMobileOnly ? "flex-end" : "start", null, "center"], pl: ["12px", null, "0px"], onScroll: debounce(layerController, 100), ref: scrollLayerRef }, { children: items.map(function (_a) {
                    var label = _a.label, href = _a.href, icon = _a.icon, itemProps = _a.itemProps, type = _a.type, disabled = _a.disabled;
                    var Icon = icon;
                    var isExternalLink = type === DropdownMenuItemType.EXTERNAL_LINK;
                    var linkProps = isExternalLink
                        ? {
                            as: "a",
                            target: "_blank"
                        }
                        : {};
                    var isActive = href === activeItem;
                    return (label && (_jsx(StyledSubMenuItemWrapper, __assign({ mr: "20px" }, { children: _jsxs(MenuItem, __assign({ href: href, scrollLayerRef: scrollLayerRef, isActive: isActive, isDisabled: disabled, variant: "subMenu" }, itemProps, linkProps, { children: [Icon && _jsx(Icon, { color: isActive ? "secondary" : "textSubtle", mr: "4px" }), label, isExternalLink && (_jsx(Box, __assign({ display: ["none", null, "flex"], style: { alignItems: "center" }, ml: "4px" }, { children: _jsx(OpenNewIcon, { color: "textSubtle" }) })))] })) }), label)));
                }) }))] })));
};
export default SubMenuItems;
