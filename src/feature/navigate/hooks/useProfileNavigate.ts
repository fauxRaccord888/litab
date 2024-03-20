import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useProfileNavigate() {
    const navigate = useNavigate()

    const profileSelectNavigator = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId', params: { mutableId } })
    }, [navigate])

    const profileUpdateNavigator = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId/update', params: { mutableId } })
    }, [navigate])

    const profileSelectMenuModalNavigator = useCallback((mutableId: string) => {
        navigate({ to: '/profile/$mutableId/menu', params: { mutableId } })
    }, [navigate])

    const mutualFollowersModalNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/mutualFollowers', params: { mutableId }})
    }, [navigate])

    const followingsModalNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followings', params: { mutableId }})
    }, [navigate])

    const followersModalNavigator = useCallback((mutableId: string)=> {
        navigate({to: '/profile/$mutableId/followers', params: { mutableId }})
    }, [navigate])

    return {
        profileSelect: profileSelectNavigator,
        profileUpdate: profileUpdateNavigator,

        profileSelectMenuModal: profileSelectMenuModalNavigator,
        mutualFollowersModal: mutualFollowersModalNavigator,
        followingsModal: followingsModalNavigator,
        followersModal: followersModalNavigator,
    }
}