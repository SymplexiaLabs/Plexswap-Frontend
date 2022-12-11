import { useContext } from "react";
import { MatchBreakpointsContext } from "./Provider";
var useMatchBreakpoints = function () {
    var matchBreakpointContext = useContext(MatchBreakpointsContext);
    if (matchBreakpointContext === undefined) {
        throw new Error("Match Breakpoint context is undefined");
    }
    return matchBreakpointContext;
};
export default useMatchBreakpoints;
