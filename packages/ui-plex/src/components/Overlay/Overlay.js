import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import { Box } from "../Box";
var unmountAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  "], ["\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  "])));
var mountAnimation = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n     opacity: 0;\n    }\n    100% {\n     opacity: 1;\n    }\n  "], ["\n    0% {\n     opacity: 0;\n    }\n    100% {\n     opacity: 1;\n    }\n  "])));
var StyledOverlay = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  z-index: 20;\n  will-change: opacity;\n  animation: ", " 350ms ease forwards;\n  ", "\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  z-index: 20;\n  will-change: opacity;\n  animation: ", " 350ms ease forwards;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.text, "99");
}, mountAnimation, function (_a) {
    var isUnmounting = _a.isUnmounting;
    return isUnmounting && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      animation: ", " 350ms ease forwards;\n    "], ["\n      animation: ", " 350ms ease forwards;\n    "])), unmountAnimation);
});
var BodyLock = function () {
    useEffect(function () {
        document.body.style.cssText = "\n      overflow: hidden;\n    ";
        document.body.style.overflow = "hidden";
        return function () {
            document.body.style.cssText = "\n        overflow: visible;\n        overflow: overlay;\n      ";
        };
    }, []);
    return null;
};
export var Overlay = function (props) {
    return (_jsxs(_Fragment, { children: [_jsx(BodyLock, {}), _jsx(StyledOverlay, __assign({ role: "presentation" }, props))] }));
};
export default Overlay;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
