import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Text from "../Text/Text";
import { StyledBalanceInput, StyledInput } from "./styles";
var Textfield = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b;
    var handleOnChange = function (e) {
        onUserInput(e.target.value);
    };
    return (_jsxs(StyledBalanceInput, __assign({ isWarning: isWarning }, { children: [_jsx(Text, __assign({ fontSize: "14px" }, { children: label })), _jsx(StyledInput, __assign({ value: value, onChange: handleOnChange, placeholder: placeholder, textAlign: "left" }, inputProps))] })));
};
export default Textfield;
