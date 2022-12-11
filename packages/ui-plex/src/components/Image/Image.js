import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import Placeholder from "./Placeholder";
var StyledImage = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, props = __rest(_a, ["src", "alt", "width", "height"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var observer;
        var isSupported = typeof window === "object" && window.IntersectionObserver;
        if (imgRef.current && isSupported) {
            observer = new window.IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        if (typeof (observer === null || observer === void 0 ? void 0 : observer.disconnect) === "function") {
                            observer.disconnect();
                        }
                    }
                });
            }, observerOptions);
            observer.observe(imgRef.current);
        }
        return function () {
            if (typeof (observer === null || observer === void 0 ? void 0 : observer.disconnect) === "function") {
                observer.disconnect();
            }
        };
    }, [src]);
    return (_jsx(Wrapper, __assign({ ref: imgRef, height: height, width: width }, props, { children: isLoaded ? _jsx(StyledImage, { src: src, alt: alt }) : _jsx(Placeholder, {}) })));
};
export default Image;
var templateObject_1;
