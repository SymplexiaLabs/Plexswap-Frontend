import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { SunIcon, MoonIcon } from "../Svg";
import { Toggle } from "../Toggle";
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (_jsx(Toggle, { checked: isDark, defaultColor: "textDisabled", checkedColor: "textDisabled", onChange: function () { return toggleTheme(!isDark); }, scale: "md", startIcon: function (isActive) {
            if (isActive === void 0) { isActive = false; }
            return _jsx(SunIcon, { color: isActive ? "warning" : "backgroundAlt" });
        }, endIcon: function (isActive) {
            if (isActive === void 0) { isActive = false; }
            return _jsx(MoonIcon, { color: isActive ? "secondary" : "backgroundAlt" });
        } }));
};
export default memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });
