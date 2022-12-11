import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Input from "./Input";
import { scales } from "./types";
var getPadding = function (scale, hasIcon) {
    if (!hasIcon) {
        return "16px";
    }
    switch (scale) {
        case scales.SM:
            return "32px";
        case scales.LG:
            return "56px";
        case scales.MD:
        default:
            return "48px";
    }
};
var StyledInputGroup = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), Input, function (_a) {
    var hasStartIcon = _a.hasStartIcon, scale = _a.scale;
    return getPadding(scale, hasStartIcon);
}, function (_a) {
    var hasEndIcon = _a.hasEndIcon, scale = _a.scale;
    return getPadding(scale, hasEndIcon);
});
var InputIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ", "\n"])), function (_a) {
    var isEndIcon = _a.isEndIcon, scale = _a.scale;
    return isEndIcon
        ? "\n    right: ".concat(scale === scales.SM ? "8px" : "16px", ";\n  ")
        : "\n    left: ".concat(scale === scales.SM ? "8px" : "16px", ";\n  ");
});
var InputGroup = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["scale", "startIcon", "endIcon", "children"]);
    return (_jsxs(StyledInputGroup, __assign({ scale: scale, width: "100%", position: "relative", hasStartIcon: !!startIcon, hasEndIcon: !!endIcon }, props, { children: [startIcon && _jsx(InputIcon, __assign({ scale: scale }, { children: startIcon })), cloneElement(children, { scale: scale }), endIcon && (_jsx(InputIcon, __assign({ scale: scale, isEndIcon: true }, { children: endIcon })))] })));
};
export default InputGroup;
var templateObject_1, templateObject_2;
