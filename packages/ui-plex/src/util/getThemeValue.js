import get from "lodash/get";
var getThemeValue = function (theme, path, fallback) {
    return get(theme, path, fallback);
};
export default getThemeValue;
