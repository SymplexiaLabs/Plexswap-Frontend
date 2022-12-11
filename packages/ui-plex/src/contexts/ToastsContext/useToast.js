import { useContext } from "react";
import { ToastsContext } from "./Provider";
export var useToast = function () {
    var toastContext = useContext(ToastsContext);
    if (toastContext === undefined) {
        throw new Error("Toasts context undefined");
    }
    return toastContext;
};
