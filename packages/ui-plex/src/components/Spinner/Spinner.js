import { __makeTemplateObject } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import BasicSpinner from "react-spinners/RingLoader";
import styled from "styled-components";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#F5A700"
};
var Spinner = function () {
    var loading = useState(true)[0];
    var color = useState("#F5A700")[0];
    return (_jsx(Container, { children: _jsx(BasicSpinner, { color: color, loading: loading, cssOverride: override, size: 70 }) }));
};
export default Spinner;
var templateObject_1;
