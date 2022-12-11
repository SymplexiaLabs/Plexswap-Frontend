import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import styled from "styled-components";
import { variant as systemVariant, space } from "styled-system";
import { WarningIcon, ErrorIcon, CheckmarkCircleFillIcon } from "../Svg";
import { Text } from "../Text";
import { Box } from "../Box";
import variants from "./theme";
var MessageContext = React.createContext({ variant: "success" });
var Icons = {
    warning: WarningIcon,
    danger: ErrorIcon,
    success: CheckmarkCircleFillIcon
};
var MessageContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ", "\n"], ["\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ", "\n"])), space, systemVariant({
    variants: variants
}));
var Flex = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var colors = {
    // these color names should be place in the theme once the palette is finalized
    warning: "#D67E0A",
    success: "#129E7D",
    danger: "failure"
};
export var MessageText = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var ctx = useContext(MessageContext);
    return (_jsx(Text, __assign({ fontSize: "14px", color: colors[ctx === null || ctx === void 0 ? void 0 : ctx.variant] }, props, { children: children })));
};
var Message = function (_a) {
    var children = _a.children, variant = _a.variant, icon = _a.icon, action = _a.action, actionInline = _a.actionInline, props = __rest(_a, ["children", "variant", "icon", "action", "actionInline"]);
    var Icon = Icons[variant];
    return (_jsx(MessageContext.Provider, __assign({ value: { variant: variant } }, { children: _jsxs(MessageContainer, __assign({ variant: variant }, props, { children: [_jsxs(Flex, { children: [_jsx(Box, __assign({ mr: "12px" }, { children: icon !== null && icon !== void 0 ? icon : _jsx(Icon, { color: variants[variant].borderColor, width: "24px" }) })), children, actionInline && action] }), !actionInline && action] })) })));
};
export default Message;
var templateObject_1, templateObject_2;
