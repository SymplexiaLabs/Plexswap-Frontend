import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { Text } from "../Text";
var getTextColor = function (_a) {
    var $isActive = _a.$isActive, disabled = _a.disabled, theme = _a.theme;
    if (disabled)
        return theme.colors.textDisabled;
    if ($isActive)
        return theme.colors.secondary;
    return theme.colors.textSubtle;
};
export var DropdownMenuItem = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:is(button) {\n    cursor: ", ";\n  }\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:is(button) {\n    cursor: ", ";\n  }\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, $isActive = _a.$isActive;
    return getTextColor({ theme: theme, disabled: disabled, $isActive: $isActive });
}, function (_a) {
    var _b = _a.$isActive, $isActive = _b === void 0 ? false : _b;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
export var StyledDropdownMenuItemContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"], ["\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"])), DropdownMenuItem, DropdownMenuItem);
export var DropdownMenuDivider = styled.hr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
export var StyledDropdownMenu = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  margin-bottom: 0;\n  width: ", ";\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  margin-bottom: 0;\n  width: ", ";\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var $isBottomNav = _a.$isBottomNav;
    return ($isBottomNav ? "calc(100% - 32px)" : "280px");
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
});
export var LinkStatus = styled(Text)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii["default"];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
