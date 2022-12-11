import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import BaseMenu from "./BaseMenu";
import { InlineMenuContainer } from "./styles";
var InlineMenu = function (_a) {
    var children = _a.children, component = _a.component, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "isOpen"]);
    return (_jsx(BaseMenu, __assign({ options: { placement: "bottom" }, component: component, isOpen: isOpen }, { children: _jsx(InlineMenuContainer, __assign({}, props, { children: children })) })));
};
export default InlineMenu;
