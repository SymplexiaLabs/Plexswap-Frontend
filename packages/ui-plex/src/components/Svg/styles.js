import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
export var StyledIconContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (_a) {
    var activeBackgroundColor = _a.activeBackgroundColor, theme = _a.theme;
    return activeBackgroundColor ? theme.colors[activeBackgroundColor] : "transparent";
});
export var StyledAnimatedIconComponent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  ", ";\n  ", ";\n\n  div:first-child {\n    ", ";\n    ", ";\n    z-index: 0;\n  }\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  ", ";\n  ", ";\n\n  div:first-child {\n    ", ";\n    ", ";\n    z-index: 0;\n  }\n  ", "\n\n  ", "\n"])), function (_a) {
    var height = _a.height;
    return height && "height: ".concat(height);
}, function (_a) {
    var width = _a.width;
    return "width: ".concat(width || "100%");
}, function (_a) {
    var height = _a.height;
    return height && "height: ".concat(height);
}, function (_a) {
    var width = _a.width;
    return "width: ".concat(width || "100%");
}, function (_a) {
    var hasFillIcon = _a.hasFillIcon;
    return hasFillIcon &&
        "\n    div, svg {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      overflow:hidden;\n    }\n\n    div:last-child {\n      height: 0;\n      z-index: 5;\n      transition: height 0.25s ease;\n    }\n  ";
}, function (_a) {
    var isActive = _a.isActive, height = _a.height, width = _a.width, hasFillIcon = _a.hasFillIcon;
    return isActive &&
        "\n    div:last-child {\n      ".concat(height && hasFillIcon && "height:".concat(height), ";\n      ").concat("width: ".concat(width || "100%"), ";\n    }\n  ");
});
var templateObject_1, templateObject_2;
