import { __assign, __rest } from "tslib";
import { jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { scales } from "./types";
import { StyledTag } from "./StyledTag";
var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (_jsxs(StyledTag, __assign({}, props, { children: [React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5em"
                }), children, React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5em"
                })] })));
};
/* eslint-disable react/default-props-match-prop-types */
Tag.defaultProps = {
    variant: "primary",
    scale: scales.MD,
    outline: false
};
export default Tag;
