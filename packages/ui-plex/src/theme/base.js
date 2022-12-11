import { breakpoints, mediaQueries, vars } from "@plexswap/style";
export default {
    siteWidth: 1200,
    breakpoints: Object.values(breakpoints).map(function (bp) { return "".concat(bp, "px"); }),
    mediaQueries: mediaQueries,
    spacing: vars.space,
    shadows: vars.shadows,
    radii: vars.radii,
    zIndices: { ribbon: 9, dropdown: 10, modal: 100 }
};
