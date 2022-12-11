import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import styled, { css } from "styled-components";
import { useMatchBreakpoints } from "../../contexts";
var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 0px;\n  overflow: hidden;\n  z-index: ", ";\n  border-radius: ", ";\n  opacity: 0;\n  transition: max-height 0s 0.3s, opacity 0.3s ease-in-out;\n  will-change: opacity;\n  pointer-events: none;\n"], ["\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 0px;\n  overflow: hidden;\n  z-index: ", ";\n  border-radius: ", ";\n  opacity: 0;\n  transition: max-height 0s 0.3s, opacity 0.3s ease-in-out;\n  will-change: opacity;\n  pointer-events: none;\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), function (_a) {
    var $scrolling = _a.$scrolling;
    return !$scrolling && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:hover ", ", &:focus-within ", " {\n        opacity: 1;\n        max-height: 400px;\n        overflow-y: auto;\n        transition: max-height 0s 0s, opacity 0.3s ease-in-out;\n        pointer-events: auto;\n      }\n    "], ["\n      &:hover ", ", &:focus-within ", " {\n        opacity: 1;\n        max-height: 400px;\n        overflow-y: auto;\n        transition: max-height 0s 0s, opacity 0.3s ease-in-out;\n        pointer-events: auto;\n      }\n    "])), DropdownContent, DropdownContent);
});
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    var _c = useState(false), scrolling = _c[0], setScrolling = _c[1];
    var isMobile = useMatchBreakpoints().isMobile;
    useEffect(function () {
        if (isMobile) {
            var scrollEndTimer_1;
            var handleScroll = function () {
                if (scrollEndTimer_1)
                    clearTimeout(scrollEndTimer_1);
                setScrolling(true);
                // @ts-ignore
                scrollEndTimer_1 = setTimeout(function () {
                    setScrolling(false);
                }, 300);
            };
            var throttledHandleScroll_1 = throttle(handleScroll, 200);
            document.addEventListener("scroll", throttledHandleScroll_1);
            return function () {
                document.removeEventListener("scroll", throttledHandleScroll_1);
            };
        }
        return undefined;
    }, [isMobile]);
    return (_jsxs(Container, __assign({ "$scrolling": scrolling }, { children: [target, _jsx(DropdownContent, __assign({ position: position }, { children: children }))] })));
};
Dropdown.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    position: "bottom"
};
export default Dropdown;
var templateObject_1, templateObject_2, templateObject_3;
