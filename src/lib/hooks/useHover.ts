import { useState } from 'react';
import { useRef } from 'react';

export function useHover() {
    const [status, setStatus] = useState(false)
    const displayTimeOutRef = useRef<null |(() => void)>(null)
    const hideTimeOutRef = useRef<null |(() => void)>(null)

    const handleMouseOver = () => {
        const timeOut = setTimeout(() => {
            setStatus(true)
        }, 400)
        displayTimeOutRef.current = () => clearTimeout(timeOut)
        if (hideTimeOutRef.current) hideTimeOutRef.current()
    }

    const handleMouseLeave = () => {
        const timeOut = setTimeout(() => {
            setStatus(false)
        }, 400)
        hideTimeOutRef.current = () => clearTimeout(timeOut)
        if (displayTimeOutRef.current) displayTimeOutRef.current()
    }

    return { status, handleMouseOver, handleMouseLeave }
}