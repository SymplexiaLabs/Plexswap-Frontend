import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { space } from "styled-system";
var CardFooter = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, space);
CardFooter.defaultProps = {
    p: "24px"
};
export default CardFooter;
var templateObject_1;
