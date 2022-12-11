import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import BaseMenu from "./BaseMenu";
import { SubMenuContainer } from "./styles";
var SubMenu = function (_a) {
    var children = _a.children, component = _a.component, options = _a.options, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "options", "isOpen"]);
    return (_jsx(BaseMenu, __assign({ component: component, options: options, isOpen: isOpen }, { children: _jsx(SubMenuContainer, __assign({}, props, { children: children })) })));
};
export default SubMenu;
