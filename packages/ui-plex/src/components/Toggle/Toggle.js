import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Flex } from "../Box";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { scales } from "./types";
var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.defaultColor, defaultColor = _b === void 0 ? "input" : _b, _c = _a.checkedColor, checkedColor = _c === void 0 ? "success" : _c, _d = _a.scale, scale = _d === void 0 ? scales.LG : _d, startIcon = _a.startIcon, endIcon = _a.endIcon, props = __rest(_a, ["checked", "defaultColor", "checkedColor", "scale", "startIcon", "endIcon"]);
    var isChecked = !!checked;
    return (_jsxs(StyledToggle, __assign({ "$checked": isChecked, "$checkedColor": checkedColor, "$defaultColor": defaultColor, scale: scale }, { children: [_jsx(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })), startIcon && endIcon ? (_jsxs(_Fragment, { children: [_jsx(Handle, __assign({ scale: scale }, { children: _jsx(Flex, __assign({ height: "100%", alignItems: "center", justifyContent: "center" }, { children: checked ? endIcon(checked) : startIcon(!checked) })) })), _jsxs(Flex, __assign({ width: "100%", height: "100%", justifyContent: "space-around", alignItems: "center" }, { children: [startIcon(), endIcon()] }))] })) : (_jsx(Handle, { scale: scale }))] })));
};
export default Toggle;
