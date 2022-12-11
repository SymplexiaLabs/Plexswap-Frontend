import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { variants } from "./types";
import { Image } from "../../../../components/Image";
import { RefreshIcon, WalletFilledIcon, WarningIcon } from "../../../../components/Svg";
var MenuIconWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 32px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 32px;\n  z-index: 102;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 32px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 32px;\n  z-index: 102;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return theme.colors[borderColor];
});
var ProfileIcon = styled(Image)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"], ["\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])));
export var NoProfileMenuIcon = function () { return (_jsx(MenuIconWrapper, __assign({ borderColor: "primary" }, { children: _jsx(WalletFilledIcon, { color: "primary", width: "24px" }) }))); };
export var PendingMenuIcon = function () { return (_jsx(MenuIconWrapper, __assign({ borderColor: "secondary" }, { children: _jsx(RefreshIcon, { color: "secondary", width: "24px", spin: true }) }))); };
export var WarningMenuIcon = function () { return (_jsx(MenuIconWrapper, __assign({ borderColor: "warning" }, { children: _jsx(WarningIcon, { color: "warning", width: "24px" }) }))); };
export var DangerMenuIcon = function () { return (_jsx(MenuIconWrapper, __assign({ borderColor: "failure" }, { children: _jsx(WarningIcon, { color: "failure", width: "24px" }) }))); };
var MenuIcon = function (_a) {
    var avatarSrc = _a.avatarSrc, variant = _a.variant;
    if (variant === variants.DANGER) {
        return _jsx(DangerMenuIcon, {});
    }
    if (variant === variants.WARNING) {
        return _jsx(WarningMenuIcon, {});
    }
    if (variant === variants.PENDING) {
        return _jsx(PendingMenuIcon, {});
    }
    if (!avatarSrc) {
        return _jsx(NoProfileMenuIcon, {});
    }
    return _jsx(ProfileIcon, { src: avatarSrc, height: 32, width: 32 });
};
export default MenuIcon;
var templateObject_1, templateObject_2;
