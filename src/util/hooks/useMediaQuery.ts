"use client"

import { useCallback, useState, useEffect } from "react";
 
export const UseMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: { matches: any; }) => {
        if (e.matches) setTargetReached(true)
        else setTargetReached(false)
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', updateTarget);
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) setTargetReached(true);
        return () => media.removeEventListener('change', updateTarget)
    }, [updateTarget, width]);

    return targetReached 
}