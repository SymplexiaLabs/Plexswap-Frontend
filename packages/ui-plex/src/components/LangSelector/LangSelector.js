import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, color = _a.color, setLang = _a.setLang, _b = _a.dropdownPosition, dropdownPosition = _b === void 0 ? "bottom" : _b, _c = _a.buttonScale, buttonScale = _c === void 0 ? "md" : _c, _d = _a.hideLanguage, hideLanguage = _d === void 0 ? false : _d;
    return (_jsx(Dropdown, __assign({ position: dropdownPosition, target: _jsx(Button, __assign({ scale: buttonScale, variant: "text", startIcon: _jsx(LanguageIcon, { color: color, width: "24px" }) }, { children: !hideLanguage && _jsx(Text, __assign({ color: color }, { children: currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase() })) })) }, { children: langs.map(function (lang) { return (_jsx(MenuButton, __assign({ fullWidth: true, onClick: function () { return setLang(lang); }, 
            // Safari fix
            style: { minHeight: "32px", height: "auto" } }, { children: lang.language }), lang.locale)); }) })));
};
export default React.memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });
