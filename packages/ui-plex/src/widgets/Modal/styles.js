import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { MotionBox } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
export var mobileFooterHeight = 73;
export var ModalHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background: transparent;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n\n  ", " {\n    background: ", ";\n  }\n"], ["\n  align-items: center;\n  background: transparent;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n\n  ", " {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var background = _a.background;
    return background || "transparent";
});
export var ModalTitle = styled(Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
export var ModalBody = styled(Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: column;\n  overflow-y: auto;\n  max-height: calc(90vh - ", "px);\n  ", " {\n    display: flex;\n    max-height: 90vh;\n  }\n"], ["\n  flex-direction: column;\n  overflow-y: auto;\n  max-height: calc(90vh - ", "px);\n  ", " {\n    display: flex;\n    max-height: 90vh;\n  }\n"])), mobileFooterHeight, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
export var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (_jsx(IconButton, __assign({ variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" }, { children: _jsx(CloseIcon, { color: "primary" }) })));
};
export var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (_jsx(IconButton, __assign({ variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" }, { children: _jsx(ArrowBackIcon, { color: "primary" }) })));
};
export var ModalContainer = styled(MotionBox)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px 32px 0px 0px;\n  width: 100%;\n  max-height: calc(var(--vh, 1vh) * 100);\n  z-index: ", ";\n  position: absolute;\n  min-width: ", ";\n  bottom: 0;\n  max-width: none !important;\n  min-height: 300px;\n\n  ", " {\n    width: auto;\n    position: auto;\n    bottom: auto;\n    border-radius: 32px;\n    max-width: 100%;\n    max-height: 100vh;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px 32px 0px 0px;\n  width: 100%;\n  max-height: calc(var(--vh, 1vh) * 100);\n  z-index: ", ";\n  position: absolute;\n  min-width: ", ";\n  bottom: 0;\n  max-width: none !important;\n  min-height: 300px;\n\n  ", " {\n    width: auto;\n    position: auto;\n    bottom: auto;\n    border-radius: 32px;\n    max-width: 100%;\n    max-height: 100vh;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var $minWidth = _a.$minWidth;
    return $minWidth;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
