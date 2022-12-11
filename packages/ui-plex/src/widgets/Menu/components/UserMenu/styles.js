import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
export var UserMenuDivider = styled.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
export var UserMenuItem = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:is(button) {\n    cursor: ", ";\n  }\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:is(button) {\n    cursor: ", ";\n  }\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "textSubtle"];
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1, templateObject_2;
