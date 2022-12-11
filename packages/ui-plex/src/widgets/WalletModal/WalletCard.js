import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isDesktop, isMobile } from "react-device-detect";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { Link } from "../../components/Link";
import MoreHorizontal from "../../components/Svg/Icons/MoreHorizontal";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
var WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"])));
export var MoreWalletCard = function (_a) {
    var t = _a.t, props = __rest(_a, ["t"]);
    return (_jsxs(WalletButton, __assign({ variant: "tertiary" }, props, { children: [_jsx(MoreHorizontal, { width: "40px", mb: "8px", color: "textSubtle" }), _jsx(Text, __assign({ fontSize: "14px" }, { children: t("More") }))] })));
};
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon, installed = walletConfig.installed, downloadLink = walletConfig.downloadLink;
    var linkAction = {
        onClick: function () {
            login(walletConfig.connectorId);
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }
    };
    if (installed === false && isDesktop && (downloadLink === null || downloadLink === void 0 ? void 0 : downloadLink.desktop)) {
        linkAction = {
            as: Link,
            href: downloadLink.desktop,
            style: {
                textDecoration: "none"
            },
            target: "_blank",
            rel: "noopener noreferrer"
        };
    }
    if (typeof window !== "undefined" && !window.ethereum && walletConfig.href && isMobile) {
        linkAction = {
            style: {
                textDecoration: "none"
            },
            as: Link,
            href: walletConfig.href,
            target: "_blank",
            rel: "noopener noreferrer"
        };
    }
    return (_jsxs(WalletButton, __assign({ variant: "tertiary" }, linkAction, { id: "wallet-connect-".concat(title.toLowerCase()) }, { children: [_jsx(Icon, { width: "40px", mb: "8px" }), _jsx(Text, __assign({ fontSize: "14px" }, { children: title }))] })));
};
export default WalletCard;
var templateObject_1;
