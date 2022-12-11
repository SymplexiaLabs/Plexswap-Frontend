import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledAnimatedIconComponent, StyledIconContainer } from "./styles";
var AnimatedIconComponent = function (_a) {
    var icon = _a.icon, fillIcon = _a.fillIcon, _b = _a.color, color = _b === void 0 ? "textSubtle" : _b, _c = _a.activeColor, activeColor = _c === void 0 ? "secondary" : _c, activeBackgroundColor = _a.activeBackgroundColor, _d = _a.isActive, isActive = _d === void 0 ? false : _d, props = __rest(_a, ["icon", "fillIcon", "color", "activeColor", "activeBackgroundColor", "isActive"]);
    var IconElement = icon;
    var IconElementFill = fillIcon;
    return IconElement ? (_jsxs(StyledAnimatedIconComponent, __assign({ isActive: isActive, hasFillIcon: !!IconElementFill }, props, { children: [_jsx(StyledIconContainer, __assign({ activeBackgroundColor: activeBackgroundColor }, { children: _jsx(IconElement, { color: color }) })), !!IconElementFill && (_jsx(StyledIconContainer, __assign({ activeBackgroundColor: activeBackgroundColor }, props, { children: _jsx(IconElementFill, { color: activeColor }) })))] }))) : null;
};
export default AnimatedIconComponent;
