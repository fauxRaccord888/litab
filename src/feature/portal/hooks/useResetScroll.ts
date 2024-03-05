import { MutableRefObject, useEffect } from "react"

// COMMENT Tanstack Router의 Scroll이 modal 내부의 scroll도 복원되는 부분 제거
export function useResetScroll(ref: MutableRefObject<HTMLDivElement | null>) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!ref.current) return
            ref.current.scrollTop = 0
        }, 25)

        return () => {
            clearTimeout(timer)
        }
    }, [ref])
}