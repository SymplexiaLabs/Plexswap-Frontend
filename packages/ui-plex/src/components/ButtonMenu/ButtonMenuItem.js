import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import Button from "../Button/Button";
import { variants } from "../Button/types";
var InactiveButton = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return _jsx(InactiveButton, __assign({ forwardedAs: as, variant: variant }, props));
    }
    return _jsx(Button, __assign({ as: as, variant: variant }, props));
};
export default ButtonMenuItem;
var templateObject_1;
