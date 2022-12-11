import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { useMatchBreakpoints } from "../../contexts";
export var MODAL_SWIPE_TO_CLOSE_VELOCITY = 300;
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    var theme = useTheme();
    var isMobile = useMatchBreakpoints().isMobile;
    var wrapperRef = useRef(null);
    return (
    // @ts-ignore
    _jsxs(ModalContainer, __assign({ drag: isMobile ? "y" : false, dragConstraints: { top: 0, bottom: 600 }, dragElastic: { top: 0 }, dragSnapToOrigin: true, onDragStart: function () {
            if (wrapperRef.current)
                wrapperRef.current.style.animation = "none";
        }, onDragEnd: function (e, info) {
            if (info.velocity.y > MODAL_SWIPE_TO_CLOSE_VELOCITY && onDismiss)
                onDismiss();
        }, ref: wrapperRef, "$minWidth": minWidth }, props, { children: [_jsxs(ModalHeader, __assign({ background: getThemeValue(theme, "colors.".concat(headerBackground), headerBackground) }, { children: [_jsxs(ModalTitle, { children: [onBack && _jsx(ModalBackButton, { onBack: onBack }), _jsx(Heading, { children: title })] }), !hideCloseButton && _jsx(ModalCloseButton, { onDismiss: onDismiss })] })), _jsx(ModalBody, __assign({ p: bodyPadding }, { children: children }))] })));
};
export default Modal;
