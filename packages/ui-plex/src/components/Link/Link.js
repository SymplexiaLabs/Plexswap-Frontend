import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import Text from "../Text/Text";
var StyledLink = styled(Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? EXTERNAL_LINK_PROPS : {};
    return _jsx(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
/* eslint-disable react/default-props-match-prop-types */
Link.defaultProps = {
    color: "primary"
};
export default Link;
var templateObject_1;
