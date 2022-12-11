import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import useDelayedUnmount from "../../hooks/useDelayedUnmount";
import { useMatchBreakpoints } from "../../contexts";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import getPortalRoot from "../../util/getPortalRoot";
import { Box } from "../Box";
import { IconButton } from "../Button";
import { Overlay } from "../Overlay";
import { CloseIcon } from "../Svg";
import { DrawerContainer } from "./styles";
var BottomDrawer = function (_a) {
    var content = _a.content, isOpen = _a.isOpen, setIsOpen = _a.setIsOpen;
    var ref = useRef(null);
    var shouldRender = useDelayedUnmount(isOpen, 350);
    var isMobile = useMatchBreakpoints().isMobile;
    useOnClickOutside(ref === null || ref === void 0 ? void 0 : ref.current, useCallback(function () { return setIsOpen(false); }, [setIsOpen]));
    if (!shouldRender || !isMobile) {
        return null;
    }
    var portal = getPortalRoot();
    if (portal)
        return createPortal(_jsxs(_Fragment, { children: [_jsx(Overlay, { isUnmounting: !isOpen }), _jsxs(DrawerContainer, __assign({ ref: ref, isUnmounting: !isOpen }, { children: [_jsx(Box, __assign({ position: "absolute", right: "16px", top: "0" }, { children: _jsx(IconButton, __assign({ variant: "text", onClick: function () { return setIsOpen(false); } }, { children: _jsx(CloseIcon, {}) })) })), content] }))] }), portal);
    return null;
};
export default BottomDrawer;
