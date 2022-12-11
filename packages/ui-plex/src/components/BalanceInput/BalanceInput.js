import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Box } from "../Box";
import { SwapVertIcon } from "../Svg";
import Text from "../Text/Text";
import { StyledBalanceInput, StyledInput, UnitContainer, SwitchUnitsButton } from "./styles";
var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, innerRef = _a.innerRef, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, unit = _a.unit, switchEditingUnits = _a.switchEditingUnits, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (_jsx(StyledBalanceInput, __assign({ isWarning: isWarning }, props, { children: _jsxs(Flex, __assign({ justifyContent: "flex-end" }, { children: [_jsxs(Box, { children: [_jsxs(Flex, __assign({ alignItems: "center" }, { children: [_jsx(StyledInput, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0,".concat(decimals, "}$"), inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder, ref: innerRef }, inputProps)), unit && _jsx(UnitContainer, { children: unit })] })), currencyValue && (_jsx(Text, __assign({ fontSize: "12px", textAlign: "right", color: "textSubtle" }, { children: currencyValue })))] }), switchEditingUnits && (_jsx(Flex, __assign({ alignItems: "center", pl: "12px" }, { children: _jsx(SwitchUnitsButton, __assign({ scale: "sm", variant: "text", onClick: switchEditingUnits }, { children: _jsx(SwapVertIcon, { color: "textSubtle" }) })) })))] })) })));
};
export default BalanceInput;
