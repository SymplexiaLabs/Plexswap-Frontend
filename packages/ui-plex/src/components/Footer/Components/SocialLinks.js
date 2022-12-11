import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { darkColors } from "../../../theme";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { socials } from "../config";
var SocialLinks = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(Flex, __assign({}, props, { "data-theme": "dark" }, { children: socials.map(function (social, index) {
            var iconProps = {
                width: "20px",
                color: darkColors.contrast,
                style: { cursor: "pointer" }
            };
            var Icon = social.icon;
            var mr = index < socials.length - 1 ? "24px" : 0;
            return (_jsx(Link, __assign({ external: true, href: social.href, "aria-label": social.label, mr: mr }, { children: _jsx(Icon, __assign({}, iconProps)) }), social.label));
        }) })));
};
export default React.memo(SocialLinks, function () { return true; });
