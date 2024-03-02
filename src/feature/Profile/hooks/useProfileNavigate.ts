import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

type Handler = () => void
export function useProfileNavigate(mutableId: string): Record<string, Handler> {
    const navigate = useNavigate()

    const showProfileHandler = useCallback(() => {
        navigate({ to: '/profile/$mutableId', params: { mutableId } })
    }, [navigate, mutableId])

    const showMoreInteractionHandler = useCallback(() => {
        navigate({ to: '/profile/$mutableId/interaction', params: { mutableId } })
    }, [navigate, mutableId])

    const showMutualFollowersHandler = useCallback(()=> {
        navigate({to: '/profile/$mutableId/mutualFollowers', params: { mutableId }})
    }, [navigate, mutableId])

    const showFollowingsHandler = useCallback(()=> {
        navigate({to: '/profile/$mutableId/followings', params: { mutableId }})
    }, [navigate, mutableId])

    const showFollowersHandler = useCallback(()=> {
        navigate({to: '/profile/$mutableId/followers', params: { mutableId }})
    }, [navigate, mutableId])

    return {
        showProfile: showProfileHandler,
        showInteraction: showMoreInteractionHandler,
        showMutualFollowers: showMutualFollowersHandler,
        showFollowings: showFollowingsHandler,
        showFollowers:showFollowersHandler
    }
}