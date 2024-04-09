import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useUtilNavigate() {
    const navigate = useNavigate()

    const feedNavigator = useCallback(() => {
        navigate({ 
            to: "/feed",
            search: {},
        })
    }, [navigate])

    const searchNavigator = useCallback(() => {
        navigate({ 
            to: "/search",
            search: {
                initiated: undefined
            },
        })
    }, [navigate])

    const errorNavigator = useCallback(() => {
        navigate({ 
            to: "/error",
            search: {},
        })
    }, [navigate])

    const homeNavigator = useCallback(() => {
        navigate({ 
            to: "/home",
            search: {},
        })
    }, [navigate])

    const landingNavigator = useCallback(() => {
        navigate({ 
            to: "/landing",
            search: {},
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