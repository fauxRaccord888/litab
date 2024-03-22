import { useCallback, useRef } from "react";

export function useThrottle() {
    const resultRef = useRef<Promise<unknown> | null>(null)

    const throttle = useCallback(async (callback: () => void, ms: number=30) => {
        if (resultRef.current) return resultRef.current
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    callback()
                    resolve(true)
                } catch (e) {
                    reject(e)
                }
            }, ms)
        })
        resultRef.current = timeoutPromise
        
        return await resultRef.current
            .catch((e) => {
                throw e
            })
            .finally(() => {
                resultRef.current = null
            })
    }, [])

    return throttle
}