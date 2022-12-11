import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import Button from "../Button/Button";
var MenuButton = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm"
};
export default MenuButton;
var templateObject_1;
