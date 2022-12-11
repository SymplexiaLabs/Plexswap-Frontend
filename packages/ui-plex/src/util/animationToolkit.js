import { __makeTemplateObject } from "tslib";
import { keyframes } from "styled-components";
export var appearAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { opacity:0 }\n  to { opacity:1 }\n"], ["\n  from { opacity:0 }\n  to { opacity:1 }\n"])));
export var disappearAnimation = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from { opacity:1 }\n  to { opacity:0 }\n"], ["\n  from { opacity:1 }\n  to { opacity:0 }\n"])));
export var animationHandler = function (element) {
    if (!element)
        return;
    if (element.classList.contains("appear")) {
        element.classList.remove("appear");
        element.classList.add("disappear");
    }
    else {
        element.classList.remove("disappear");
        element.classList.add("appear");
    }
};
export var animationVariants = {
    initial: { transform: "translateX(0px)" },
    animate: { transform: "translateX(0px)" },
    exit: { transform: "translateX(0px)" }
};
export var animationMap = {
    initial: "initial",
    animate: "animate",
    exit: "exit"
};
var templateObject_1, templateObject_2;
