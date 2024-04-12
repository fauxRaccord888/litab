import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useUtilNavigate() {
    const navigate = useNavigate()

    const feedNavigator = useCallback(() => {
        navigate({ 
            to: "/feed",
            resetScroll: false
        })
    }, [navigate])

    const searchNavigator = useCallback(() => {
        navigate({ 
            to: "/search",
        })
    }, [navigate])

    const errorNavigator = useCallback(() => {
        navigate({ 
            to: "/error",
        })
    }, [navigate])

    const homeNavigator = useCallback(() => {
        navigate({ 
            to: "/home",
       })
    }, [navigate])

    const landingNavigator = useCallback(() => {
        navigate({ 
            to: "/landing",
        })
    }, [navigate])

    return {
        feed: feedNavigator,
        search: searchNavigator,
        error: errorNavigator,
        home: homeNavigator,
        landing: landingNavigator
    }
}