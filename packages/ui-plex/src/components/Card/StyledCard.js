import { __makeTemplateObject } from "tslib";
import styled, { keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
var PromotedGradient = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"], ["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"])));
/**
 * Priority: Warning --> Success --> Active
 */
var getBorderColor = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, borderBackground = _a.borderBackground, theme = _a.theme;
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return "linear-gradient(180deg, ".concat(theme.colors.primaryBright, ", ").concat(theme.colors.secondary, ")");
    }
    return theme.colors.cardBorder;
};
export var StyledCard = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"])), getBorderColor, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "], ["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "])), PromotedGradient);
}, space);
export var StyledCardInner = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var hasCustomBorder = _a.hasCustomBorder;
    return (hasCustomBorder ? "initial" : "inherit");
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background !== null && background !== void 0 ? background : theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
});
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
