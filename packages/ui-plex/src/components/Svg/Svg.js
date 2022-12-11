import { __makeTemplateObject } from "tslib";
import styled, { css, keyframes } from "styled-components";
import { space } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", ";\n  ", ";\n\n  // Safari fix\n  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {\n    filter: none !important;\n  }\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", ";\n  ", ";\n\n  // Safari fix\n  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {\n    filter: none !important;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue(theme, "colors.".concat(color), color);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false
};
export default Svg;
var templateObject_1, templateObject_2, templateObject_3;
