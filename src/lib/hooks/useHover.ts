import { useState } from 'react';
import { useRef } from 'react';
import { isMobile } from '$lib/utils';

export function useHover() {
    const [status, setStatus] = useState(false)
    const displayTimeOutRef = useRef<null |(() => void)>(null)
    const hideTimeOutRef = useRef<null |(() => void)>(null)

    const handleMouseOver = () => {
        if (isMobile(window.navigator.userAgent)) return
        const timeOut = setTimeout(() => {
            setStatus(true)
        }, 400)
        displayTimeOutRef.current = () => clearTimeout(timeOut)
        if (hideTimeOutRef.current) hideTimeOutRef.current()
    }

    const handleMouseLeave = () => {
        if (isMobile(window.navigator.userAgent)) return
        const timeOut = setTimeout(() => {
            setStatus(false)
        }, 400)
        hideTimeOutRef.current = () => clearTimeout(timeOut)
        if (displayTimeOutRef.current) displayTimeOutRef.current()
    }

    return { status, handleMouseOver, handleMouseLeave }
}