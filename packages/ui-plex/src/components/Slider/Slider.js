import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { Box } from "../Box";
import { CommonSlider, BarBackground, BarProgress, StyledInput, SliderLabel, SliderLabelContainer } from "./styles";
var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = useCallback(function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    }, [onValueChanged]);
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = "".concat(progressPercentage + 0.5, "%");
    }
    else if (progressPercentage >= 90) {
        progressWidth = "".concat(progressPercentage - 4, "%");
    }
    else if (progressPercentage >= 60) {
        progressWidth = "".concat(progressPercentage - 2.5, "%");
    }
    else {
        progressWidth = "".concat(progressPercentage, "%");
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : "".concat(progressPercentage, "%");
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (_jsxs(Box, __assign({ position: "relative", height: "48px" }, props, { children: [_jsxs(CommonSlider, { children: [_jsx(BarBackground, { disabled: disabled }), _jsx(BarProgress, { style: { width: progressWidth }, disabled: disabled }), _jsx(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })] }), valueLabel && (_jsx(SliderLabelContainer, { children: _jsx(SliderLabel, __assign({ progress: labelProgress }, { children: displayValueLabel })) }))] })));
};
export default Slider;
