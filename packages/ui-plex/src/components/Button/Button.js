import { __assign, __rest } from "tslib";
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, isValidElement } from "react";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import StyledButton from "./StyledButton";
import { scales, variants } from "./types";
var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? EXTERNAL_LINK_PROPS : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("plex-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("plex-button--disabled");
    }
    return (_jsx(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest, { children: _jsxs(_Fragment, { children: [isValidElement(startIcon) &&
                    cloneElement(startIcon, {
                        mr: "0.5rem"
                    }), children, isValidElement(endIcon) &&
                    cloneElement(endIcon, {
                        ml: "0.5rem"
                    })] }) })));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants.PRIMARY,
    scale: scales.MD,
    disabled: false
};
export default Button;
