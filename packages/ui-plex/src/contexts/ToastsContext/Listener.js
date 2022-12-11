import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { ToastContainer } from "../../components/Toast";
import { useToast } from "./useToast";
var ToastListener = function () {
    var _a = useToast(), toasts = _a.toasts, remove = _a.remove;
    var handleRemove = useCallback(function (id) { return remove(id); }, [remove]);
    return _jsx(ToastContainer, { toasts: toasts, onRemove: handleRemove });
};
export default ToastListener;
