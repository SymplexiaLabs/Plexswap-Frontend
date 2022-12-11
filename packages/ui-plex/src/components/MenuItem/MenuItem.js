import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useRef, useEffect } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { useMatchBreakpoints } from "../../contexts";
var MenuItem = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.variant, variant = _d === void 0 ? "default" : _d, scrollLayerRef = _a.scrollLayerRef, statusColor = _a.statusColor, props = __rest(_a, ["children", "href", "isActive", "isDisabled", "variant", "scrollLayerRef", "statusColor"]);
    var isMobile = useMatchBreakpoints().isMobile;
    var menuItemRef = useRef(null);
    var linkComponent = useContext(MenuContext).linkComponent;
    var itemLinkProps = href
        ? {
            as: linkComponent,
            href: href
        }
        : {
            as: "div"
        };
    useEffect(function () {
        if (!isMobile || !isActive || !menuItemRef.current || !(scrollLayerRef === null || scrollLayerRef === void 0 ? void 0 : scrollLayerRef.current))
            return;
        var scrollLayer = scrollLayerRef.current;
        var menuNode = menuItemRef.current.parentNode;
        if (!menuNode)
            return;
        if (scrollLayer.scrollLeft > menuNode.offsetLeft ||
            scrollLayer.scrollLeft + scrollLayer.offsetWidth < menuNode.offsetLeft + menuNode.offsetWidth) {
            scrollLayer.scrollLeft = menuNode.offsetLeft;
        }
    }, [isActive, isMobile, scrollLayerRef]);
    return (_jsx(StyledMenuItemContainer, __assign({ "$isActive": isActive, "$variant": variant, ref: menuItemRef }, { children: _jsx(StyledMenuItem, __assign({}, itemLinkProps, { "$isActive": isActive, "$isDisabled": isDisabled, "$variant": variant, "$statusColor": statusColor }, props, { children: children })) })));
};
export default MenuItem;
