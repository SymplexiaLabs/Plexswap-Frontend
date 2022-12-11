// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var getPortalRoot = function () { var _a; return typeof window !== "undefined" && ((_a = document.getElementById("portal-root")) !== null && _a !== void 0 ? _a : document.body); };
export default getPortalRoot;
