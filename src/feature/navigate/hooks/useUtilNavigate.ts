import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { setMetaData } from "$feature/portal/store/modalSlice"

export function useUtilNavigate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

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

    const metaDataNavigator = useCallback(() => {
        dispatch(setMetaData())
    }, [dispatch])


    return {
        feed: feedNavigator,
        search: searchNavigator,
        error: errorNavigator,
        home: homeNavigator,
        landing: landingNavigator,
        metaData: metaDataNavigator
    }
}