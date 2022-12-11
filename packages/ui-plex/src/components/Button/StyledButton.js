import { __makeTemplateObject } from "tslib";
import styled, { css } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.plex-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.plex-button--disabled {\n      background-color: ".concat(theme.colors.backgroundDisabled, ";\n      border-color: ").concat(theme.colors.backgroundDisabled, ";\n      box-shadow: none;\n      color: ").concat(theme.colors.textDisabled, ";\n      cursor: not-allowed;\n    }\n  ");
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.plex-button--disabled):not(.plex-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.plex-button--disabled):not(.plex-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.plex-button--disabled):not(.plex-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.plex-button--disabled):not(.plex-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant({
    prop: "scale",
    variants: scaleVariants
}), variant({
    variants: styleVariants
}), layout, space, function (_a) {
    var _b, _c;
    var decorator = _a.decorator, theme = _a.theme;
    return decorator && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      &::before {\n        content: \"", "\";\n        position: absolute;\n        border-bottom: 20px solid ", ";\n        border-left: 34px solid transparent;\n        border-right: 12px solid transparent;\n        height: 0;\n        top: -1px;\n        right: -12px;\n        width: 75px;\n        text-align: center;\n        padding-right: 30px;\n        line-height: 20px;\n        font-size: 12px;\n        font-weight: 400;\n        transform: rotate(31.17deg);\n        color: ", ";\n      }\n    "], ["\n      &::before {\n        content: \"", "\";\n        position: absolute;\n        border-bottom: 20px solid ", ";\n        border-left: 34px solid transparent;\n        border-right: 12px solid transparent;\n        height: 0;\n        top: -1px;\n        right: -12px;\n        width: 75px;\n        text-align: center;\n        padding-right: 30px;\n        line-height: 20px;\n        font-size: 12px;\n        font-weight: 400;\n        transform: rotate(31.17deg);\n        color: ", ";\n      }\n    "])), decorator.text, (_b = decorator.backgroundColor) !== null && _b !== void 0 ? _b : theme.colors.secondary, (_c = decorator.color) !== null && _c !== void 0 ? _c : "white");
});
export default StyledButton;
var templateObject_1, templateObject_2;
