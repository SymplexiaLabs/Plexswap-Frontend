import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlexStack, PlexInput, PlexLabel } from "./StyledPlexToggle";
import { scales } from "./types";
var PlexToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.LG : _b, props = __rest(_a, ["checked", "scale"]);
    return (_jsxs(PlexStack, __assign({ scale: scale }, { children: [_jsx(PlexInput, __assign({ id: props.id || "plex-toggle", scale: scale, type: "checkbox", checked: checked }, props)), _jsx(PlexLabel, __assign({ scale: scale, checked: checked, htmlFor: props.id || "plex-toggle" }, { children: _jsxs("div", __assign({ className: "plex" }, { children: [_jsx("div", { className: "plex" }), _jsx("div", { className: "plex" }), _jsx("div", { className: "plex" }), _jsx("div", { className: "butter" })] })) }))] })));
};
export default PlexToggle;
