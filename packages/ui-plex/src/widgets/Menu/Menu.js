import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import throttle from "lodash/throttle";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../contexts";
import WayaPrice from "../../components/WayaPrice/WayaPrice";
import Logo from "./components/Logo";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n"])), MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var FixedContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"])), function (_a) {
    var showMenu = _a.showMenu, height = _a.height;
    return (showMenu ? 0 : "-".concat(height, "px"));
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
});
var TopBannerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: 100%;\n"], ["\n  height: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: 100%;\n"])), function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
});
var BodyWrapper = styled(Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"], ["\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"])));
var Menu = function (_a) {
    var _b;
    var _c = _a.linkComponent, linkComponent = _c === void 0 ? "a" : _c, banner = _a.banner, rightSide = _a.rightSide, isDark = _a.isDark, toggleTheme = _a.toggleTheme, currentLang = _a.currentLang, setLang = _a.setLang, wayaPriceUsd = _a.wayaPriceUsd, links = _a.links, subLinks = _a.subLinks, footerLinks = _a.footerLinks, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, langs = _a.langs, buyWayaLabel = _a.buyWayaLabel, children = _a.children;
    var _d = useMatchBreakpoints(), isMobile = _d.isMobile, isMd = _d.isMd;
    var _e = useState(true), showMenu = _e[0], setShowMenu = _e[1];
    var refPrevOffset = useRef(typeof window === "undefined" ? 0 : window.pageYOffset);
    var topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;
    var totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [totalTopMenuHeight]);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    var subLinksWithoutMobile = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function (subLink) { return !subLink.isMobileOnly; });
    var subLinksMobileOnly = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function (subLink) { return subLink.isMobileOnly; });
    return (_jsx(MenuContext.Provider, __assign({ value: { linkComponent: linkComponent } }, { children: _jsxs(Wrapper, { children: [_jsxs(FixedContainer, __assign({ showMenu: showMenu, height: totalTopMenuHeight }, { children: [banner && _jsx(TopBannerContainer, __assign({ height: topBannerHeight }, { children: banner })), _jsxs(StyledNav, { children: [_jsxs(Flex, { children: [_jsx(Logo, { isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }), !isMobile && _jsx(MenuItems, { items: links, activeItem: activeItem, activeSubItem: activeSubItem, ml: "24px" })] }), _jsxs(Flex, __assign({ alignItems: "center", height: "100%" }, { children: [!isMobile && !isMd && (_jsx(Box, __assign({ mr: "12px" }, { children: _jsx(WayaPrice, { showSkeleton: false, wayaPriceUsd: wayaPriceUsd }) }))), _jsx(Box, __assign({ mt: "4px" }, { children: _jsx(LangSelector, { currentLang: currentLang, langs: langs, setLang: setLang, buttonScale: "xs", color: "textSubtle", hideLanguage: true }) })), rightSide] }))] })] })), subLinks && (_jsxs(Flex, __assign({ justifyContent: "space-around" }, { children: [_jsx(SubMenuItems, { items: subLinksWithoutMobile, mt: "".concat(totalTopMenuHeight + 1, "px"), activeItem: activeSubItem }), (subLinksMobileOnly === null || subLinksMobileOnly === void 0 ? void 0 : subLinksMobileOnly.length) > 0 && (_jsx(SubMenuItems, { items: subLinksMobileOnly, mt: "".concat(totalTopMenuHeight + 1, "px"), activeItem: activeSubItem, isMobileOnly: true }))] }))), _jsx(BodyWrapper, __assign({ mt: !subLinks ? "".concat(totalTopMenuHeight + 1, "px") : "0" }, { children: _jsxs(Inner, __assign({ isPushed: false, showMenu: showMenu }, { children: [children, _jsx(Footer, { items: footerLinks, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, wayaPriceUsd: wayaPriceUsd, buyWayaLabel: buyWayaLabel, mb: ["".concat(MOBILE_MENU_HEIGHT, "px"), null, "0px"] })] })) })), isMobile && _jsx(BottomNav, { items: links, activeItem: activeItem, activeSubItem: activeSubItem })] }) })));
};
export default Menu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
