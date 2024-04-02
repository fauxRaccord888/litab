import { useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react"

export function useRedirectOnError(shouldRedirect: boolean) {
    const navigate = useNavigate()
    const [redirected, setRedirected] = useState(false)

    useEffect(() => {
        if (shouldRedirect && !redirected) {
            navigate({
                to: "/error"
            })
            setRedirected(true)
        }
    }, [navigate, redirected, shouldRedirect])
}