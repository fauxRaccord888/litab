import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useProfileNavigation() {
    const navigate = useNavigate()

    const showProfileHandler = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId', params: { mutableId } })
    }, [navigate])

    const showMoreInteractionHandler = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId/interaction', params: { mutableId } })
    }, [navigate])

    const showMutualFollowersHandler = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/mutualFollowers', params: { mutableId }})
    }, [navigate])

    const showFollowingsHandler = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followings', params: { mutableId }})
    }, [navigate])

    const showFollowersHandler = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followers', params: { mutableId }})
    }, [navigate])

    return {
        profile: showProfileHandler,
        interaction: showMoreInteractionHandler,
        mutualFollowers: showMutualFollowersHandler,
        followings: showFollowingsHandler,
        followers:showFollowersHandler
    }
}