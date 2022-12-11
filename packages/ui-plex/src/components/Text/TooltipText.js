import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import Text from "./Text";
var TooltipText = styled(Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var _b;
    var theme = _a.theme, decorationColor = _a.decorationColor;
    return "underline dotted ".concat((theme === null || theme === void 0 ? void 0 : theme.colors) && decorationColor ? theme.colors[decorationColor] : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.textSubtle);
});
export default TooltipText;
var templateObject_1;
