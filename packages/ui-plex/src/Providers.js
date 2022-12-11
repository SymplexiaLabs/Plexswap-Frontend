import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from "styled-components";
import { MatchBreakpointsProvider } from "./contexts/MatchBreakpoints/Provider";
import { ToastsProvider } from "./contexts/ToastsContext/Provider";
export var UIKitProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return (_jsx(ThemeProvider, __assign({ theme: theme }, { children: _jsx(MatchBreakpointsProvider, { children: _jsx(ToastsProvider, { children: children }) }) })));
};
