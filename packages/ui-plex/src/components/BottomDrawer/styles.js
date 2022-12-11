import { __makeTemplateObject } from "tslib";
/* eslint-disable import/prefer-default-export */
import styled, { keyframes, css } from "styled-components";
export var mountAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      transform: translateY(20%);\n    }\n    100% {\n      transform: translateY(0%);\n    }\n  "], ["\n    0% {\n      transform: translateY(20%);\n    }\n    100% {\n      transform: translateY(0%);\n    }\n  "])));
export var unmountAnimation = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n      transform: translateY(0%);\n    }\n    100% {\n      transform: translateY(20%);\n    }\n  "], ["\n    0% {\n      transform: translateY(0%);\n    }\n    100% {\n      transform: translateY(20%);\n    }\n  "])));
export var DrawerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 80vh;\n  bottom: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ", " 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  will-change: transform;\n  z-index: 21;\n  ", "\n"], ["\n  width: 100%;\n  height: 80vh;\n  bottom: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ", " 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  will-change: transform;\n  z-index: 21;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, mountAnimation, function (_a) {
    var isUnmounting = _a.isUnmounting;
    return isUnmounting && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      animation: ", " 350ms ease forwards;\n    "], ["\n      animation: ", " 350ms ease forwards;\n    "])), unmountAnimation);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
