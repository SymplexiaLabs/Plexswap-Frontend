import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
var BottomNavItem = function (_a) {
    var label = _a.label, icon = _a.icon, fillIcon = _a.fillIcon, href = _a.href, _b = _a.showItemsOnMobile, showItemsOnMobile = _b === void 0 ? false : _b, _c = _a.isActive, isActive = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, props = __rest(_a, ["label", "icon", "fillIcon", "href", "showItemsOnMobile", "isActive", "disabled"]);
    var linkComponent = useContext(MenuContext).linkComponent;
    var bottomNavItemContent = (_jsxs(Flex, __assign({ flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }, { children: [icon && (_jsx(AnimatedIconComponent, { icon: icon, fillIcon: fillIcon, height: "22px", width: "21px", color: isActive ? "secondary" : "textSubtle", isActive: isActive, activeBackgroundColor: "backgroundAlt" })), _jsx(StyledBottomNavText, __assign({ color: isActive ? "text" : "textSubtle", fontWeight: isActive ? "600" : "400", fontSize: "10px" }, { children: label }))] })));
    return showItemsOnMobile ? (_jsx(StyledBottomNavItem, __assign({ style: { opacity: disabled ? 0.5 : 1 }, type: "button" }, props, { children: bottomNavItemContent }))) : (_jsx(StyledBottomNavItem, __assign({ style: { opacity: disabled ? 0.5 : 1 }, as: linkComponent, href: href }, props, { children: bottomNavItemContent })));
};
export default BottomNavItem;
