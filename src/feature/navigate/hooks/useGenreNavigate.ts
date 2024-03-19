import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useGenreNavigate() {
    const navigate = useNavigate()

    const selectNavigator = useCallback((id: string) => {
        navigate({ to: '/genre/$id', params: { id } })
    }, [navigate])

    return {
        select: selectNavigator,
    }
}