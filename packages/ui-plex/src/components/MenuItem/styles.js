import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
export var StyledMenuItemContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ", ";\n"])), function (_a) {
    var $isActive = _a.$isActive, $variant = _a.$variant, theme = _a.theme;
    return $isActive &&
        $variant === "subMenu" &&
        "\n      &:after{\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        background-color: ".concat(theme.colors.primary, ";\n        border-radius: 2px 2px 0 0;\n      }\n    ");
});
var StyledMenuItem = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 16px;\n  font-weight: ", ";\n  opacity: ", ";\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background: ", ";\n    ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 16px;\n  font-weight: ", ";\n  opacity: ", ";\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background: ", ";\n    ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, $isActive = _a.$isActive;
    return ($isActive ? theme.colors.secondary : theme.colors.textSubtle);
}, function (_a) {
    var $isActive = _a.$isActive;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var $isDisabled = _a.$isDisabled;
    return ($isDisabled ? 0.5 : 1);
}, function (_a) {
    var $statusColor = _a.$statusColor, theme = _a.theme;
    return $statusColor &&
        "\n    &:after {\n      content: \"\";\n      border-radius: 100%;\n      background: ".concat(theme.colors[$statusColor], ";\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n  ");
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default"
        ? "\n    padding: 0 16px;\n    height: 48px;\n  "
        : "\n    padding: 4px 4px 0px 4px;\n    height: 42px;\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default" && "border-radius: 16px;";
});
export default StyledMenuItem;
var templateObject_1, templateObject_2;
