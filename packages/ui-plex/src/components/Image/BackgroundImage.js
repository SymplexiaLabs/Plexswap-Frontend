import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import Placeholder from "./Placeholder";
var StyledBackgroundImage = styled(Wrapper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-repeat: no-repeat;\n  background-size: contain;\n"], ["\n  background-repeat: no-repeat;\n  background-size: contain;\n"])));
var BackgroundImage = function (_a) {
    var loadingPlaceholder = _a.loadingPlaceholder, src = _a.src, width = _a.width, height = _a.height, props = __rest(_a, ["loadingPlaceholder", "src", "width", "height"]);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var ref = useRef(null);
    var placeholder = loadingPlaceholder || _jsx(Placeholder, {});
    useEffect(function () {
        var observer;
        var isSupported = typeof window === "object" && window.IntersectionObserver;
        if (ref.current && isSupported) {
            var div_1 = ref.current;
            observer = new window.IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        if (src) {
                            // Load the image via an image element so we can show a placeholder until the image is downloaded
                            var img = document.createElement("img");
                            img.onload = function () {
                                div_1.style.backgroundImage = "url(\"".concat(src, "\")");
                                setIsLoaded(true);
                            };
                            img.src = src;
                        }
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(div_1);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src, setIsLoaded]);
    return (_jsx(StyledBackgroundImage, __assign({ ref: ref, width: width, height: height }, props, { children: !isLoaded && placeholder })));
};
export default BackgroundImage;
var templateObject_1;
