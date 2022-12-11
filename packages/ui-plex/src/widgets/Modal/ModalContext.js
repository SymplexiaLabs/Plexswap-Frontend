import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, domMax, LazyMotion, m } from "framer-motion";
import React, { createContext, useRef, useState } from "react";
import styled from "styled-components";
import { mountAnimation, unmountAnimation } from "../../components/BottomDrawer/styles";
import { Overlay } from "../../components/Overlay";
import { useIsomorphicEffect } from "../../hooks";
import { animationHandler, animationMap, animationVariants, appearAnimation, disappearAnimation, } from "../../util/animationToolkit";
import { ModalContainer } from "./styles";
var ModalWrapper = styled(m.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ", " 0.3s ease-in-out forwards;\n    ", " {\n      animation: ", " 0.3s ease-in-out forwards;\n      ", " {\n        animation: none;\n      }\n    }\n  }\n  &.disappear {\n    animation: ", " 0.3s ease-in-out forwards;\n    ", " {\n      animation: ", " 0.3s ease-in-out forwards;\n      ", " {\n        animation: none;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ", " 0.3s ease-in-out forwards;\n    ", " {\n      animation: ", " 0.3s ease-in-out forwards;\n      ", " {\n        animation: none;\n      }\n    }\n  }\n  &.disappear {\n    animation: ", " 0.3s ease-in-out forwards;\n    ", " {\n      animation: ", " 0.3s ease-in-out forwards;\n      ", " {\n        animation: none;\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
}, appearAnimation, ModalContainer, mountAnimation, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, disappearAnimation, ModalContainer, unmountAnimation, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
export var Context = createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function () { return null; },
    onPresent: function () { return null; },
    onDismiss: function () { return null; }
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(""), nodeId = _d[0], setNodeId = _d[1];
    var _e = useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    var animationRef = useRef(null);
    useIsomorphicEffect(function () {
        var setViewportHeight = function () {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
        };
        setViewportHeight();
        window.addEventListener("resize", setViewportHeight);
        return function () { return window.removeEventListener("resize", setViewportHeight); };
    }, []);
    var handlePresent = function (node, newNodeId, closeOverlayClick) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
        setCloseOnOverlayClick(closeOverlayClick);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
        setCloseOnOverlayClick(true);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (_jsxs(Context.Provider, __assign({ value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss
        } }, { children: [_jsx(LazyMotion, __assign({ features: domMax }, { children: _jsx(AnimatePresence, { children: isOpen && (_jsxs(ModalWrapper, __assign({ ref: animationRef, onAnimationStart: function () { return animationHandler(animationRef.current); } }, animationMap, { variants: animationVariants, transition: { duration: 0.3 } }, { children: [_jsx(Overlay, { onClick: handleOverlayDismiss }), React.isValidElement(modalNode) &&
                                React.cloneElement(modalNode, {
                                    onDismiss: handleDismiss
                                })] }))) }) })), children] })));
};
export default ModalProvider;
var templateObject_1;
