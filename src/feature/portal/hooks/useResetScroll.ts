import { MutableRefObject, useCallback, useEffect } from "react"

// COMMENT Tanstack Router의 Scroll이 modal 내부의 scroll도 복원되는 부분 제거
export function useResetScroll(
    ref?: MutableRefObject<HTMLDivElement | null>, 
    initiated?: boolean | undefined
) {
    const resetScroll = useCallback(() => {
        const timer = setTimeout(() => {
            if (!ref?.current) {
                window.scrollTo({top: 0})
                return
            }
            ref.current.scrollTop = 0
        }, 25)

        return () => clearTimeout(timer)
    }, [ref])
    
    useEffect(() => {
        if (!initiated) resetScroll()
    }, [initiated, resetScroll])


    return resetScroll
}