import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";
export var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (_jsxs(IconButton, __assign({ "aria-label": "Hide or show expandable content", onClick: onClick }, { children: [children, expanded ? _jsx(ChevronUpIcon, { color: "invertedContrast" }) : _jsx(ChevronDownIcon, { color: "invertedContrast" })] })));
};
ExpandableButton.defaultProps = {
    expanded: false
};
export var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (_jsx(Button, __assign({ variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? _jsx(ChevronUpIcon, { color: "primary" }) : _jsx(ChevronDownIcon, { color: "primary" }) }, { children: children })));
};
ExpandableLabel.defaultProps = {
    expanded: false
};
