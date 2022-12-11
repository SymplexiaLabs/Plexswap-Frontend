import { __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from "framer-motion";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Overlay } from "../../components/Overlay";
import getPortalRoot from "../../util/getPortalRoot";
var ModalWrapper = styled(m.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
export function ModalV2(_a) {
    var isOpen = _a.isOpen, onDismiss = _a.onDismiss, closeOnOverlayClick = _a.closeOnOverlayClick, children = _a.children;
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
        }
    };
    var portal = getPortalRoot();
    if (portal) {
        return createPortal(isOpen && (_jsxs(ModalWrapper, { children: [_jsx(Overlay, { onClick: handleOverlayDismiss }), children] })), portal);
    }
    return null;
}
var templateObject_1;
