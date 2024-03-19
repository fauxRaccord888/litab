import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useProfileNavigate() {
    const navigate = useNavigate()

    const profileSelectNavigator = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId', params: { mutableId } })
    }, [navigate])

    const profileSelectDetailNavigator = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId/interaction', params: { mutableId } })
    }, [navigate])

    const mutualFollowersDetailNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/mutualFollowers', params: { mutableId }})
    }, [navigate])

    const followingsDetailHandler = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followings', params: { mutableId }})
    }, [navigate])

    const followersDetailHandler = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followers', params: { mutableId }})
    }, [navigate])

    return {
        profileSelect: profileSelectNavigator,

        profileSelectDetail: profileSelectDetailNavigator,
        mutualFollowersDetail: mutualFollowersDetailNavigator,
        followingsDetail: followingsDetailHandler,
        followersDetail:followersDetailHandler,
    }
}