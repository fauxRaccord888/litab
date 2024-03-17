import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useOeuvreNavigate() {
    const navigate = useNavigate()

    const selectNavigator = useCallback((id: string) => {
        navigate({ to: '/oeuvre/$id', params: { id } })
    }, [navigate])

    const pentagramTabNavigator = useCallback((id: string) => {
        navigate({ to: '/oeuvre/$id/pentagram', params: { id } })
    }, [navigate])

    const followerTabNavigator = useCallback((id: string) => {
        navigate({ to: '/oeuvre/$id/follower', params: { id } })
    }, [navigate])

    return {
        select: selectNavigator,
        pentagramTab: pentagramTabNavigator,
        followerTab: followerTabNavigator
    }
}