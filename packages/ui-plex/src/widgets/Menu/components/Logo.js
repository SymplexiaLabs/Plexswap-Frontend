import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";
var blink = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"], ["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"])));
var StyledLink = styled("a")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, blink);
var Logo = function (_a) {
    var isDark = _a.isDark, href = _a.href;
    var linkComponent = useContext(MenuContext).linkComponent;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (_jsxs(_Fragment, { children: [_jsx(LogoIcon, { className: "mobile-icon" }), _jsx(LogoWithTextIcon, { className: "desktop-icon", isDark: isDark })] }));
    return (_jsx(Flex, { children: isAbsoluteUrl ? (_jsx(StyledLink, __assign({ as: "a", href: href, "aria-label": "Plexswap home page" }, { children: innerLogo }))) : (_jsx(StyledLink, __assign({ href: href, as: linkComponent, "aria-label": "Plexswap home page" }, { children: innerLogo }))) }));
};
export default React.memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });
var templateObject_1, templateObject_2;
