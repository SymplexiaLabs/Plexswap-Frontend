import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useTooltip from "../../hooks/useTooltip/useTooltip";
import { Flex } from "../Box";
import { InfoIcon } from "../Svg";
var InfoTooltip = function (_a) {
    var text = _a.text, _b = _a.iconColor, iconColor = _b === void 0 ? "textSubtle" : _b, props = __rest(_a, ["text", "iconColor"]);
    var _c = useTooltip(text, {}), targetRef = _c.targetRef, tooltip = _c.tooltip, tooltipVisible = _c.tooltipVisible;
    return (_jsxs(Flex, __assign({}, props, { alignItems: "center" }, { children: [tooltipVisible && tooltip, _jsx(Flex, __assign({ ref: targetRef, alignItems: "center" }, { children: _jsx(InfoIcon, { color: iconColor }) }))] })));
};
export default InfoTooltip;
