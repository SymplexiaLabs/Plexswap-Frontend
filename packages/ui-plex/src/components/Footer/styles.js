import { __makeTemplateObject } from "tslib";
import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";
export var StyledFooter = styled(Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), darkColors.backgroundAlt);
export var StyledList = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n  margin-bottom: 40px;\n\n  ", " {\n    margin-bottom: 0px;\n  }\n"], ["\n  list-style: none;\n  margin-bottom: 40px;\n\n  ", " {\n    margin-bottom: 0px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
export var StyledListItem = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  margin-bottom: 8px;\n  text-transform: capitalize;\n\n  &:first-child {\n    color: ", ";\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n"], ["\n  font-size: 16px;\n  margin-bottom: 8px;\n  text-transform: capitalize;\n\n  &:first-child {\n    color: ", ";\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n"])), darkColors.secondary);
export var StyledIconMobileContainer = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 24px;\n"], ["\n  margin-bottom: 24px;\n"])));
export var StyledToolsContainer = styled(Flex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-color: ", ";\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n  border-style: solid;\n  padding: 24px 0;\n  margin-bottom: 24px;\n\n  ", " {\n    border-top-width: 0;\n    border-bottom-width: 0;\n    padding: 0 0;\n    margin-bottom: 0;\n  }\n"], ["\n  border-color: ", ";\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n  border-style: solid;\n  padding: 24px 0;\n  margin-bottom: 24px;\n\n  ", " {\n    border-top-width: 0;\n    border-bottom-width: 0;\n    padding: 0 0;\n    margin-bottom: 0;\n  }\n"])), darkColors.cardBorder, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
export var StyledSocialLinks = styled(SocialLinks)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), darkColors.cardBorder);
export var StyledText = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), darkColors.text);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
