import { __makeTemplateObject } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { Toast } from "./Toast";
var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
export var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (_jsx(StyledToastContainer, { children: _jsx(TransitionGroup, { children: toasts.map(function (toast, index) {
                var zIndex = (ZINDEX - index).toString();
                var top = TOP_POSITION + index * stackSpacing;
                return (_jsx(Toast, { toast: toast, onRemove: onRemove, ttl: ttl, style: { top: "".concat(top, "px"), zIndex: zIndex } }, toast.id));
            }) }) }));
};
var templateObject_1;
