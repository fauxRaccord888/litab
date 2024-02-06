import { useState } from 'react';
import { useRef } from 'react';

export function useHover() {
    const [status, setStatus] = useState(false)
    const timeOutRef = useRef<null |(() => void)>(null)

    const handleMouseOver = () => {
        setStatus(true)
        if (timeOutRef.current) timeOutRef.current()
    }

    const handleMouseLeave = () => {
        const timeOut = setTimeout(() => {
            setStatus(false)
        }, 400)
        timeOutRef.current = () => clearTimeout(timeOut)
    }

    return { status, handleMouseOver, handleMouseLeave }
}