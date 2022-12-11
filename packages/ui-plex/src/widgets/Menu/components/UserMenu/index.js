import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import { Box, Flex } from "../../../../components/Box";
import { ChevronDownIcon } from "../../../../components/Svg";
import { variants } from "./types";
import MenuIcon from "./MenuIcon";
import { UserMenuItem } from "./styles";
export var StyledUserMenu = styled(Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 32px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 32px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
export var LabelText = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"], ["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Menu = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var isOpen = _a.isOpen;
    return !isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
}, UserMenuItem, UserMenuItem);
var UserMenu = function (_a) {
    var account = _a.account, text = _a.text, avatarSrc = _a.avatarSrc, _b = _a.variant, variant = _b === void 0 ? variants.DEFAULT : _b, children = _a.children, disabled = _a.disabled, props = __rest(_a, ["account", "text", "avatarSrc", "variant", "children", "disabled"]);
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(null), targetRef = _d[0], setTargetRef = _d[1];
    var _e = useState(null), tooltipRef = _e[0], setTooltipRef = _e[1];
    var accountEllipsis = account ? "".concat(account.substring(0, 2), "...").concat(account.substring(account.length - 4)) : null;
    var _f = usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom-end",
        modifiers: [{ name: "offset", options: { offset: [0, 0] } }]
    }), styles = _f.styles, attributes = _f.attributes;
    useEffect(function () {
        var showDropdownMenu = function () {
            setIsOpen(true);
        };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            if (target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target))) {
                setIsOpen(false);
                evt.stopPropagation();
            }
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen]);
    return (_jsxs(Flex, __assign({ alignItems: "center", height: "100%", ref: setTargetRef }, props, { children: [_jsxs(StyledUserMenu, __assign({ onTouchStart: function () {
                    setIsOpen(function (s) { return !s; });
                } }, { children: [_jsx(MenuIcon, { avatarSrc: avatarSrc, variant: variant }), _jsx(LabelText, __assign({ title: typeof text === "string" ? text || account : account }, { children: text || accountEllipsis })), !disabled && _jsx(ChevronDownIcon, { color: "text", width: "24px" })] })), !disabled && (_jsx(Menu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { isOpen: isOpen }, { children: _jsx(Box, __assign({ onClick: function () { return setIsOpen(false); } }, { children: children === null || children === void 0 ? void 0 : children({ isOpen: isOpen }) })) })))] })));
};
export default UserMenu;
var templateObject_1, templateObject_2, templateObject_3;
