import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Box } from "../Box";
import { StyledFooter, StyledIconMobileContainer, StyledSocialLinks, StyledToolsContainer, } from "./styles";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { LogoWithTextIcon } from "../Svg";
var MenuItem = function (_a) {
    var items = _a.items, isDark = _a.isDark, toggleTheme = _a.toggleTheme, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, wayaPriceUsd = _a.wayaPriceUsd, buyWayaLabel = _a.buyWayaLabel, props = __rest(_a, ["items", "isDark", "toggleTheme", "currentLang", "langs", "setLang", "wayaPriceUsd", "buyWayaLabel"]);
    return (_jsx(StyledFooter, __assign({ p: ["42px 32px", null, "10px 20px 10px 20px"] }, props, { justifyContent: "center", "data-theme": "dark" }, { children: _jsxs(Flex, __assign({ flexDirection: "row", justifyContent: "space-between", width: ["100%", null, "1200px;"] }, { children: [_jsx(StyledIconMobileContainer, __assign({ display: ["block", null, "none"] }, { children: _jsx(LogoWithTextIcon, { isDark: true, width: "130px" }) })), _jsx(Flex, __assign({ flexDirection: "row", alignItems: "flex-start" }, { children: _jsx(Box, __assign({ display: ["none", null, "block"] }, { children: _jsx(LogoWithTextIcon, { isDark: true, width: "160px" }) })) })), _jsx(StyledSocialLinks, { order: [2], "justify-content": "center", alignItems: "center" }), _jsx(StyledToolsContainer, __assign({ order: [3], flexDirection: "row", justifyContent: "flex-end" }, { children: _jsx(ThemeSwitcher, { isDark: isDark, toggleTheme: toggleTheme }) }))] })) })));
};
export default MenuItem;
