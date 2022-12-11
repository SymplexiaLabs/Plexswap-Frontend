import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import BaseLayout from "./BaseLayout";
var GridLayout = styled(BaseLayout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
export default GridLayout;
var templateObject_1;
