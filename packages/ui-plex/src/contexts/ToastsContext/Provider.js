import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import kebabCase from "lodash/kebabCase";
import { types as toastTypes } from "../../components/Toast";
export var ToastsContext = createContext(undefined);
export var ToastsProvider = function (_a) {
    var children = _a.children;
    var _b = useState([]), toasts = _b[0], setToasts = _b[1];
    var toast = useCallback(function (_a) {
        var title = _a.title, description = _a.description, type = _a.type;
        setToasts(function (prevToasts) {
            var id = kebabCase(title);
            // Remove any existing toasts with the same id
            var currentToasts = prevToasts.filter(function (prevToast) { return prevToast.id !== id; });
            return __spreadArray([
                {
                    id: id,
                    title: title,
                    description: description,
                    type: type
                }
            ], currentToasts, true);
        });
    }, [setToasts]);
    var toastError = useCallback(function (title, description) {
        return toast({ title: title, description: description, type: toastTypes.DANGER });
    }, [toast]);
    var toastInfo = useCallback(function (title, description) {
        return toast({ title: title, description: description, type: toastTypes.INFO });
    }, [toast]);
    var toastSuccess = useCallback(function (title, description) {
        return toast({ title: title, description: description, type: toastTypes.SUCCESS });
    }, [toast]);
    var toastWarning = useCallback(function (title, description) {
        return toast({ title: title, description: description, type: toastTypes.WARNING });
    }, [toast]);
    var clear = useCallback(function () { return setToasts([]); }, []);
    var remove = useCallback(function (id) {
        setToasts(function (prevToasts) { return prevToasts.filter(function (prevToast) { return prevToast.id !== id; }); });
    }, []);
    return (_jsx(ToastsContext.Provider, __assign({ value: { toasts: toasts, clear: clear, remove: remove, toastError: toastError, toastInfo: toastInfo, toastSuccess: toastSuccess, toastWarning: toastWarning } }, { children: children })));
};
