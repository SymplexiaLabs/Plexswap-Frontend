import { useEffect } from "react";
var useOnClickOutside = function (htmlNode, handler) {
    useEffect(function () {
        if (htmlNode) {
            var listener_1 = function (event) {
                // Do nothing if clicking ref's element or descendent elements
                if (htmlNode.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener_1);
            document.addEventListener("touchstart", listener_1);
            return function () {
                document.removeEventListener("mousedown", listener_1);
                document.removeEventListener("touchstart", listener_1);
            };
        }
        return undefined;
    }, 
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [htmlNode, handler]);
};
export default useOnClickOutside;
