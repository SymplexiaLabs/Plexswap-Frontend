import { __assign, __rest } from "tslib";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { StyledCard, StyledCardInner } from "./StyledCard";
var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, background = _a.background, props = __rest(_a, ["ribbon", "children", "background"]);
    return (_jsx(StyledCard, __assign({}, props, { children: _jsxs(StyledCardInner, __assign({ background: background, hasCustomBorder: !!props.borderBackground }, { children: [ribbon, children] })) })));
};
export default Card;
