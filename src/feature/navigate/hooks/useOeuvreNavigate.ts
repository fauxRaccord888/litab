import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function useOeuvreNavigate() {
    const navigate = useNavigate()

    const selectNavigator = useCallback((id: string) => {
        navigate({ to: '/oeuvre/$id', params: { id } })
    }, [navigate])

    const addNavigator = useCallback(() => {
        navigate({ to: '/oeuvre/add' })
    }, [navigate])

    const updateNavigator = useCallback((id: string) => {
        navigate({ to: '/oeuvre/$id/update', params: { id } })
    }, [navigate])

    return {
        select: selectNavigator,
        add: addNavigator,
        update: updateNavigator
    }
}