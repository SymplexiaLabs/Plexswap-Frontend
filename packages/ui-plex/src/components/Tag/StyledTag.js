import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { space, variant, typography } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { variants } from "./types";
var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: ".concat(color, ";\n      background: ").concat(theme.colors.background, ";\n      border: 2px solid ").concat(color, ";\n    ");
    }
    return "";
};
export var StyledTag = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, variant({
    prop: "scale",
    variants: scaleVariants
}), variant({
    variants: styleVariants
}), space, typography, getOutlineStyles);
export default null;
var templateObject_1;
