import { __assign, __makeTemplateObject, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Grid from "../../components/Box/Grid";
import { Button } from "../../components/Button";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import getThemeValue from "../../util/getThemeValue";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import { walletLocalStorageKey } from "./config";
import WalletCard, { MoreWalletCard } from "./WalletCard";
var WalletWrapper = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var getPriority = function (priority) { return (typeof priority === "function" ? priority() : priority); };
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
function getPreferredConfig(walletConfig) {
    var sortedConfig = walletConfig.sort(function (a, b) { return getPriority(a.priority) - getPriority(b.priority); });
    var preferredWalletName = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(walletLocalStorageKey);
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }), true);
}
function ConnectModal(_a) {
    var _b, _c;
    var login = _a.login, _d = _a.onDismiss, onDismiss = _d === void 0 ? function () { return null; } : _d, _e = _a.displayCount, displayCount = _e === void 0 ? 3 : _e, t = _a.t, connectors = _a.wallets;
    var _f = useState(false), showMore = _f[0], setShowMore = _f[1];
    var theme = useTheme();
    var sortedConfig = getPreferredConfig(connectors);
    // Filter out WalletConnect if user is inside TrustWallet built-in browser
    var walletsToShow = ((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.isTrust) &&
        // @ts-ignore
        !((_c = window === null || window === void 0 ? void 0 : window.ethereum) === null || _c === void 0 ? void 0 : _c.isSafePal)
        ? sortedConfig.filter(function (wallet) { return wallet.title !== "WalletConnect"; })
        : sortedConfig;
    var displayListConfig = showMore ? walletsToShow : walletsToShow.slice(0, displayCount);
    return (_jsxs(ModalContainer, __assign({ "$minWidth": "320px" }, { children: [_jsxs(ModalHeader, __assign({ background: getThemeValue(theme, "colors.gradientCloudyday") }, { children: [_jsx(ModalTitle, { children: _jsx(Heading, { children: t("Connect Wallet") }) }), _jsx(ModalCloseButton, { onDismiss: onDismiss })] })), _jsxs(ModalBody, __assign({ minWidth: ["320px", null, "340px"] }, { children: [_jsx(WalletWrapper, __assign({ py: "24px", maxHeight: "453px", overflowY: "auto" }, { children: _jsxs(Grid, __assign({ gridTemplateColumns: "1fr 1fr" }, { children: [displayListConfig.map(function (wallet) { return (_jsx(Box, { children: _jsx(WalletCard, { walletConfig: wallet, login: login, onDismiss: onDismiss }) }, wallet.title)); }), !showMore && walletsToShow.length > 4 && _jsx(MoreWalletCard, { t: t, onClick: function () { return setShowMore(true); } })] })) })), _jsxs(Box, __assign({ p: "24px" }, { children: [_jsx(Text, __assign({ textAlign: "center", color: "textSubtle", as: "p", mb: "16px" }, { children: t("Haven’t got a crypto wallet yet?") })), _jsx(Button, __assign({ as: "a", href: "https://docs.plexfinance.us/get-started/connection-guide", variant: "subtle", width: "100%" }, EXTERNAL_LINK_PROPS, { children: t("Learn How to Connect") }))] }))] }))] })));
}
export default ConnectModal;
var templateObject_1;
