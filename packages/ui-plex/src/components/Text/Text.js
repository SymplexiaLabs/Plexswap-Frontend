import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue(theme, "colors.".concat(color), color);
};
var Text = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  color: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), getColor, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout, function (_a) {
    var small = _a.small;
    return small && "font-size: 14px;";
});
Text.defaultProps = {
    color: "text",
    small: false,
    fontSize: "16px",
    ellipsis: false
};
export default Text;
var templateObject_1;
