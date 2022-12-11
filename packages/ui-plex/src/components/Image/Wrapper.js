import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import styled from "styled-components";
import { space } from "styled-system";
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"], ["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ($height / $width) * 100;
}, space);
var Wrapper = forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return _jsx(StyledWrapper, __assign({ ref: ref, "$width": width, "$height": height }, props));
});
export default Wrapper;
var templateObject_1;
