import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";
var TokenPairImage = function (_a) {
    var primarySrc = _a.primarySrc, secondarySrc = _a.secondarySrc, width = _a.width, height = _a.height, _b = _a.variant, variant = _b === void 0 ? variants.DEFAULT : _b, _c = _a.primaryImageProps, primaryImageProps = _c === void 0 ? {} : _c, _d = _a.secondaryImageProps, secondaryImageProps = _d === void 0 ? {} : _d, props = __rest(_a, ["primarySrc", "secondarySrc", "width", "height", "variant", "primaryImageProps", "secondaryImageProps"]);
    var secondaryImageSize = Math.floor(width / 2);
    return (_jsxs(Wrapper, __assign({ position: "relative", width: width, height: height }, props, { children: [_jsx(StyledPrimaryImage, __assign({ variant: variant, src: primarySrc, width: width, height: height }, primaryImageProps)), _jsx(StyledSecondaryImage, __assign({ variant: variant, src: secondarySrc, width: secondaryImageSize, height: secondaryImageSize }, secondaryImageProps))] })));
};
export default TokenPairImage;
