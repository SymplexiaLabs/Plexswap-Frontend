import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { ClickableElementContainer } from "./styles";
import getPortalRoot from "../../util/getPortalRoot";
var BaseMenu = function (_a) {
    var _b, _c, _d;
    var component = _a.component, options = _a.options, children = _a.children, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), menuElement = _g[0], setMenuElement = _g[1];
    var placement = (_b = options === null || options === void 0 ? void 0 : options.placement) !== null && _b !== void 0 ? _b : "bottom";
    var offset = (_c = options === null || options === void 0 ? void 0 : options.offset) !== null && _c !== void 0 ? _c : [0, 10];
    var padding = (_d = options === null || options === void 0 ? void 0 : options.padding) !== null && _d !== void 0 ? _d : { left: 16, right: 16 };
    var _h = useState(isOpen), isMenuOpen = _h[0], setIsMenuOpen = _h[1];
    var toggle = function () {
        setIsMenuOpen(function (prev) { return !prev; });
    };
    var open = function () {
        setIsMenuOpen(true);
    };
    var close = function () {
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    useEffect(function () {
        setIsMenuOpen(isOpen);
    }, [isOpen, setIsMenuOpen]);
    useEffect(function () {
        if (menuElement !== null && targetElement !== null) {
            var handleClickOutside_1 = function (_a) {
                var target = _a.target;
                if (target instanceof Node && !menuElement.contains(target) && !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            };
            document.addEventListener("click", handleClickOutside_1);
            return function () {
                document.removeEventListener("click", handleClickOutside_1);
            };
        }
        return undefined;
    }, [menuElement, targetElement]);
    var _j = usePopper(targetElement, menuElement, {
        placement: placement,
        modifiers: [
            { name: "offset", options: { offset: offset } },
            { name: "preventOverflow", options: { padding: padding } },
        ]
    }), styles = _j.styles, attributes = _j.attributes;
    var menu = (_jsx("div", __assign({ ref: setMenuElement, style: styles.popper }, attributes.popper, { children: typeof children === "function" ? children({ toggle: toggle, open: open, close: close }) : children })));
    var portal = getPortalRoot();
    var renderMenu = portal ? createPortal(menu, portal) : menu;
    return (_jsxs(_Fragment, { children: [_jsx(ClickableElementContainer, __assign({ ref: setTargetElement, onClick: toggle }, { children: component })), isMenuOpen && renderMenu] }));
};
export default BaseMenu;
