import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { breakpoints } from "@plexswap/style";
import { useIsomorphicEffect } from "../../hooks/useIsomorphicEffect";
/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpoints).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpoints).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: ".concat(prevMinWidth, "px)"), _a));
        }
        var minWidth = prevMinWidth;
        // @ts-ignore
        var breakpoint = breakpoints[size];
        // Min width for next iteration
        prevMinWidth = breakpoint;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint - 1, "px)"), _b));
    }, {});
})();
var getKey = function (size) { return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1)); };
var getState = function () {
    var s = Object.keys(mediaQueries).reduce(function (accum, size) {
        var _a, _b;
        var _c;
        var key = getKey(size);
        if (typeof window === "undefined") {
            return __assign(__assign({}, accum), (_a = {}, _a[key] = false, _a));
        }
        var mql = typeof (window === null || window === void 0 ? void 0 : window.matchMedia) === "function" ? window.matchMedia(mediaQueries[size]) : null;
        return __assign(__assign({}, accum), (_b = {}, _b[key] = (_c = mql === null || mql === void 0 ? void 0 : mql.matches) !== null && _c !== void 0 ? _c : false, _b));
    }, {});
    return s;
};
export var MatchBreakpointsContext = createContext({
    isMobile: false,
    isTablet: false,
    isDesktop: false
});
export var getBreakpointChecks = function (state) {
    return __assign(__assign({}, state), { isMobile: state.isXs || state.isSm, isTablet: state.isMd || state.isLg, isDesktop: state.isXl || state.isXxl });
};
export var MatchBreakpointsProvider = function (_a) {
    var children = _a.children;
    var _b = useState(function () { return getBreakpointChecks(getState()); }), state = _b[0], setState = _b[1];
    useIsomorphicEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql;
            var handler;
            if (typeof (window === null || window === void 0 ? void 0 : window.matchMedia) === "function") {
                mql = window.matchMedia(mediaQueries[size]);
                handler = function (matchMediaQuery) {
                    var key = getKey(size);
                    setState(function (prevState) {
                        var _a;
                        return getBreakpointChecks(__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                    });
                };
                // Safari < 14 fix
                if (mql.addEventListener) {
                    mql.addEventListener("change", handler);
                }
            }
            return function () {
                // Safari < 14 fix
                if (mql === null || mql === void 0 ? void 0 : mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        setState(getBreakpointChecks(getState()));
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, []);
    return _jsx(MatchBreakpointsContext.Provider, __assign({ value: state }, { children: children }));
};
