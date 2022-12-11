import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "./Link";
import OpenNewIcon from "../Svg/Icons/OpenNew";
var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsxs(Link, __assign({ external: true }, props, { children: [children, _jsx(OpenNewIcon, { color: props.color ? props.color : "primary", ml: "4px" })] })));
};
export default LinkExternal;
