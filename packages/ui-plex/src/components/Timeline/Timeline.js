import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lightColors } from "../../theme";
import { Flex } from "../Box";
import { CircleOutlineIcon, LogoIcon, CheckmarkCircleFillIcon } from "../Svg";
import { Text } from "../Text";
import InfoTooltip from "./InfoTooltip";
import { TimelineContainer, TimelineEvent } from "./styles";
var getTextColor = function (_a) {
    var eventStatus = _a.eventStatus, useDark = _a.useDark;
    if (eventStatus === "upcoming")
        return useDark ? "textDisabled" : lightColors.textDisabled;
    if (eventStatus === "live")
        return "success";
    return useDark ? "textSubtle" : lightColors.textSubtle;
};
var Timeline = function (_a) {
    var events = _a.events, _b = _a.useDark, useDark = _b === void 0 ? true : _b;
    return (_jsx(TimelineContainer, { children: events.map(function (_a) {
            var text = _a.text, status = _a.status, altText = _a.altText, infoText = _a.infoText;
            var isUpcoming = status === "upcoming";
            var isLive = status === "live";
            var isPast = status === "past";
            return (_jsxs(TimelineEvent, __assign({ "$useDark": useDark }, { children: [_jsxs(Flex, __assign({ mr: "10px", alignItems: "center" }, { children: [isUpcoming && _jsx(CircleOutlineIcon, { color: useDark ? "textDisabled" : lightColors.textDisabled }), isLive && _jsx(LogoIcon, {}), isPast && _jsx(CheckmarkCircleFillIcon, { color: useDark ? "textSubtle" : lightColors.textSubtle })] })), _jsx(Text, __assign({ color: getTextColor({ eventStatus: status, useDark: useDark }), bold: true }, { children: text })), altText && (_jsx(Text, __assign({ color: "warning", ml: "2px", bold: true }, { children: altText }))), infoText && (_jsx(InfoTooltip, { text: infoText, ml: "10px", iconColor: useDark ? "textSubtle" : lightColors.textSubtle }))] }), text));
        }) }));
};
export default Timeline;
