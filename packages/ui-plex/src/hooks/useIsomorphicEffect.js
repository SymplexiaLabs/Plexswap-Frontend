import { useEffect, useLayoutEffect } from "react";
export var useIsomorphicEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
