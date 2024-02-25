import { useCallback, useRef } from "react";
import { useThrottledErrorToast } from './toaster/useThrottledErrorToast';

export function useThrottle() {
    const timeoutRef = useRef<(() => void) | null>(null)
    const errorToast = useThrottledErrorToast(1000)

    const throttle = useCallback((callback: () => void, ms: number) => {
        if (timeoutRef.current) return
        
        const timeout = setTimeout(() => {
            errorToast(callback)
            if (timeoutRef.current) {
                timeoutRef.current()
                timeoutRef.current = null
            }
        }, ms)
        timeoutRef.current = () => clearTimeout(timeout)
    }, [errorToast])

    return throttle
}