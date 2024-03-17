import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useArtistNavigate() {
    const navigate = useNavigate()

    const selectNavigator = useCallback((id: string) => {
        navigate({ to: '/artist/$id', params: { id } })
    }, [navigate])

    const oeuvreTabNavigator = useCallback((id: string) => {
        navigate({ to: '/artist/$id/oeuvre', params: { id } })
    }, [navigate])

    const followerTabNavigator = useCallback((id: string) => {
        navigate({ to: '/artist/$id/follower', params: { id } })
    }, [navigate])

    return {
        select: selectNavigator,
        oeuvreTab: oeuvreTabNavigator,
        followerTab: followerTabNavigator
    }
}