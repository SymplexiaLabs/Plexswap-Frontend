import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, domAnimation, LazyMotion, m as Motion } from "framer-motion";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { layout, space, borderRadius } from "styled-system";
import { animation as ANIMATION, variant as VARIANT } from "./types";
import { appearAnimation, disappearAnimation, animationVariants, animationMap, animationHandler, } from "../../util/animationToolkit";
var waves = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var AnimationWrapper = styled(Motion.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ", " 0.3s ease-in-out forwards;\n  }\n  &.disappear {\n    animation: ", " 0.3s ease-in-out forwards;\n  }\n"], ["\n  position: relative;\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ", " 0.3s ease-in-out forwards;\n  }\n  &.disappear {\n    animation: ", " 0.3s ease-in-out forwards;\n  }\n"])), appearAnimation, disappearAnimation);
var SkeletonWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  ", "\n  ", "\n  overflow: hidden;\n"], ["\n  position: relative;\n  ", "\n  ", "\n  overflow: hidden;\n"])), layout, space);
var Root = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return (variant === VARIANT.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space, borderRadius);
var Pulse = styled(Root)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? VARIANT.RECT : _b, _c = _a.animation, animation = _c === void 0 ? ANIMATION.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation === ANIMATION.WAVES) {
        return _jsx(Waves, __assign({ variant: variant }, props));
    }
    return _jsx(Pulse, __assign({ variant: variant }, props));
};
export var SkeletonV2 = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? VARIANT.RECT : _b, _c = _a.animation, animation = _c === void 0 ? ANIMATION.PULSE : _c, _d = _a.isDataReady, isDataReady = _d === void 0 ? false : _d, children = _a.children, wrapperProps = _a.wrapperProps, _e = _a.skeletonTop, skeletonTop = _e === void 0 ? "0" : _e, _f = _a.skeletonLeft, skeletonLeft = _f === void 0 ? "0" : _f, width = _a.width, height = _a.height, mr = _a.mr, ml = _a.ml, props = __rest(_a, ["variant", "animation", "isDataReady", "children", "wrapperProps", "skeletonTop", "skeletonLeft", "width", "height", "mr", "ml"]);
    var animationRef = useRef(null);
    var skeletonRef = useRef(null);
    return (_jsx(SkeletonWrapper, __assign({ width: width, height: height, mr: mr, ml: ml }, wrapperProps, { children: _jsx(LazyMotion, __assign({ features: domAnimation }, { children: _jsxs(AnimatePresence, { children: [isDataReady && (_jsx(AnimationWrapper, __assign({ ref: animationRef, onAnimationStart: function () { return animationHandler(animationRef.current); } }, animationMap, { variants: animationVariants, transition: { duration: 0.3 } }, { children: children }), "content")), !isDataReady && (_jsx(AnimationWrapper, __assign({ style: { position: "absolute", top: skeletonTop, left: skeletonLeft }, ref: skeletonRef, onAnimationStart: function () { return animationHandler(skeletonRef.current); } }, animationMap, { variants: animationVariants, transition: { duration: 0.3 } }, { children: animation === ANIMATION.WAVES ? (_jsx(Waves, __assign({ variant: variant }, props, { width: width, height: height }))) : (_jsx(Pulse, __assign({ variant: variant }, props, { width: width, height: height }))) }), "skeleton"))] }) })) })));
};
export default Skeleton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
