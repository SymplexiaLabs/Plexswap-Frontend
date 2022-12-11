import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { typography } from "styled-system";
export var Td = styled.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"], ["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, typography);
export var Th = styled(Td).attrs({ as: "th" })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"], ["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
});
var templateObject_1, templateObject_2;
