import { useCallback, useRef } from "react";

export function useThrottle() {
    
    const timeoutRef = useRef<(() => void) | null>(null)

    const throttle = useCallback((callback: () => void, ms: number) => {
        if (timeoutRef.current) return
        
        const timeout = setTimeout(() => {
            callback()
            if (timeoutRef.current) {
                timeoutRef.current()
                timeoutRef.current = null
            }
        }, ms)
        timeoutRef.current = () => clearTimeout(timeout)
    }, [])

    return throttle
}