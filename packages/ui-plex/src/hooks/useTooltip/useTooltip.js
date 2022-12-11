import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../theme";
import getPortalRoot from "../../util/getPortalRoot";
import isTouchDevice from "../../util/isTouchDevice";
import { Arrow, StyledTooltip } from "./StyledTooltip";
var animationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};
var animationMap = {
    initial: "initial",
    animate: "animate",
    exit: "exit"
};
var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return light;
    }
    return dark;
};
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e, _f = options.hideTimeout, hideTimeout = _f === void 0 ? 100 : _f;
    var _g = useState(null), targetElement = _g[0], setTargetElement = _g[1];
    var _h = useState(null), tooltipElement = _h[0], setTooltipElement = _h[1];
    var _j = useState(null), arrowElement = _j[0], setArrowElement = _j[1];
    var _k = useState(false), visible = _k[0], setVisible = _k[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeoutRef = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeoutRef.current) {
                window.clearTimeout(hideTimeoutRef.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeoutRef.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, hideTimeout);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger, hideTimeout]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeoutRef.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyond the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyond the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _l = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding }
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ]
    }), styles = _l.styles, attributes = _l.attributes;
    var tooltip = (_jsxs(StyledTooltip, __assign({}, animationMap, { variants: animationVariants, transition: { duration: 0.3 }, ref: setTooltipElement, style: styles.popper }, attributes.popper, { children: [_jsx(ThemeProvider, __assign({ theme: invertTheme }, { children: content })), _jsx(Arrow, { ref: setArrowElement, style: styles.arrow })] })));
    var AnimatedTooltip = (_jsx(LazyMotion, __assign({ features: domAnimation }, { children: _jsx(AnimatePresence, { children: visible && tooltip }) })));
    var portal = getPortalRoot();
    var tooltipInPortal = portal ? createPortal(AnimatedTooltip, portal) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : AnimatedTooltip,
        tooltipVisible: visible
    };
};
export default useTooltip;
