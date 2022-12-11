import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { Box, Flex } from "../Box";
export var InlineMenuContainer = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.tooltip;
});
export var SubMenuContainer = styled(Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii["default"];
}, function (_a) {
    var theme = _a.theme;
    return "1px solid ".concat(theme.colors.inputSecondary);
});
export var ClickableElementContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-flex;\n"], ["\n  cursor: pointer;\n  display: inline-flex;\n"])));
export var SubMenuItem = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
