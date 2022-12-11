import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressBunnyWrapper from "./ProgressBunnyWrapper";
import { ProgressBunny } from "../Svg";
import { variants, scales } from "./types";
var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f, _g = _a.useDark, useDark = _g === void 0 ? true : _g, children = _a.children;
    return (_jsx(StyledProgress, __assign({ "$useDark": useDark, variant: variant, scale: scale }, { children: children || (_jsxs(_Fragment, { children: [showProgressBunny && (_jsx(ProgressBunnyWrapper, __assign({ style: { left: "".concat(stepGuard(primaryStep), "%") } }, { children: _jsx(ProgressBunny, {}) }))), _jsx(Bar, { "$useDark": useDark, primary: true, style: { width: "".concat(stepGuard(primaryStep), "%") } }), secondaryStep ? _jsx(Bar, { "$useDark": useDark, style: { width: "".concat(stepGuard(secondaryStep), "%") } }) : null] })) })));
};
export default Progress;
