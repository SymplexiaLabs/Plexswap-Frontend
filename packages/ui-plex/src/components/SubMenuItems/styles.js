import { __makeTemplateObject } from "tslib";
import styled, { css } from "styled-components";
import { Flex, Box } from "../Box";
export var SubMenuItemWrapper = styled(Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    ", ";\n  }\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n"], ["\n  ", " {\n    ", ";\n  }\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var $isMobileOnly = _a.$isMobileOnly;
    return ($isMobileOnly ? "display:none" : "");
});
var StyledSubMenuItems = styled(Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: block;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  ", " {\n    width: auto;\n    display: flex;\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: block;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  ", " {\n    width: auto;\n    display: flex;\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.backgroundAlt2);
});
var maskSharedStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  width: 48px;\n  height: 100%;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  opacity: 1;\n  will-change: opacity;\n  transition: 0.25s ease-in opacity;\n  &.hide {\n    pointer-events: none;\n    opacity: 0;\n    transition: 0.25s ease-out opacity;\n  }\n"], ["\n  position: absolute;\n  z-index: 2;\n  width: 48px;\n  height: 100%;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  opacity: 1;\n  will-change: opacity;\n  transition: 0.25s ease-in opacity;\n  &.hide {\n    pointer-events: none;\n    opacity: 0;\n    transition: 0.25s ease-out opacity;\n  }\n"])));
export var LeftMaskLayer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  left: 0px;\n  background: ", ";\n"], ["\n  ", "\n  left: 0px;\n  background: ", ";\n"])), maskSharedStyle, function (_a) {
    var theme = _a.theme;
    return theme.isDark
        ? "linear-gradient(90deg, #27262c 29.76%, rgba(39,38,44, 0) 100%)"
        : "linear-gradient(90deg, #ffffff 29.76%, rgba(255, 255, 255, 0) 100%)";
});
export var RightMaskLayer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  right: 0px;\n  background: ", ";\n"], ["\n  ", "\n  right: 0px;\n  background: ", ";\n"])), maskSharedStyle, function (_a) {
    var theme = _a.theme;
    return theme.isDark
        ? "linear-gradient(270deg, #27262c 0%, rgba(39,38,44, 0) 87.5%)"
        : "linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 87.5%)";
});
export var StyledSubMenuItemWrapper = styled(Box)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: top;\n  scroll-snap-align: start;\n"], ["\n  display: inline-block;\n  vertical-align: top;\n  scroll-snap-align: start;\n"])));
export default StyledSubMenuItems;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
