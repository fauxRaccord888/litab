import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useArtistNavigate() {
    const navigate = useNavigate()

    const selectNavigator = useCallback((id: string) => {
        navigate({ to: '/artist/$id', params: { id } })
    }, [navigate])

    return {
        select: selectNavigator,
    }
}