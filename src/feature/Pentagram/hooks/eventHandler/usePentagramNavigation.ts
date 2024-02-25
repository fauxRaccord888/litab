import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function usePentagramNavigation() {
    const navigate = useNavigate()

    const showPentagramHandler = useCallback((pentagramId: string) => {
        navigate({ to: '/pentagram/$pentagramId/update', params: { pentagramId } })
    }, [navigate])

    
    const showAddNodeHandler = useCallback((pentagramId: string)=> {
        navigate({to: '/pentagram/$pentagramId/update/addNode', params: { pentagramId }})
    }, [navigate])

    const showMoreInteractionHandler = useCallback((pentagramId: string, nodeId: string) => {
        navigate({ to: '/pentagram/$pentagramId/update/interaction/$nodeId', params: { pentagramId, nodeId } })
    }, [navigate])

    return {
        pentagram: showPentagramHandler,
        addNode: showAddNodeHandler,
        nodeInteraction: showMoreInteractionHandler,
    }
}