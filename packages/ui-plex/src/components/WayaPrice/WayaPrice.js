import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
var PriceLink = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var WayaPrice = function (_a) {
    var wayaPriceUsd = _a.wayaPriceUsd, _b = _a.color, color = _b === void 0 ? "textSubtle" : _b, _c = _a.showSkeleton, showSkeleton = _c === void 0 ? true : _c;
    return wayaPriceUsd ? (_jsxs(PriceLink, __assign({ href: "https://swap.plexfinance.us/swap?outputCurrency=0x32d9F70F6eF86718A51021ad269522Abf4CFFE49&chainId=56", target: "_blank" }, { children: [_jsx(LogoRound, { width: "24px", mr: "8px" }), _jsx(Text, __assign({ color: color, bold: true }, { children: "$".concat(wayaPriceUsd.toFixed(3)) }))] }))) : showSkeleton ? (_jsx(Skeleton, { width: 80, height: 24 })) : null;
};
export default React.memo(WayaPrice);
var templateObject_1;
