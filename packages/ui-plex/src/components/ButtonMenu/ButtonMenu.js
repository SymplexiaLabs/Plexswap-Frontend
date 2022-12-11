import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, Children } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var getBorderColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"])), getBackgroundColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, getBorderColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle, ";\n        }\n    ");
    }
    return "";
}, space);
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "children", "fullWidth"]);
    return (_jsx(StyledButtonMenu, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth }, props, { children: Children.map(children, function (child, index) {
            return cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                scale: scale,
                variant: variant,
                disabled: disabled
            });
        }) })));
};
export default ButtonMenu;
var templateObject_1;
