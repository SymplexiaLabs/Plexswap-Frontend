import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { space } from "styled-system";
var CardHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.radii.card, " ").concat(theme.radii.card, " 0 0");
}, space);
CardHeader.defaultProps = {
    p: "24px"
};
export default CardHeader;
var templateObject_1;
