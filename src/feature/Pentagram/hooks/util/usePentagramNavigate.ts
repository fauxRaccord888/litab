import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

export function usePentagramNavigate() {
    const navigate = useNavigate()

    const showInsertHandler = useCallback(() => {
        navigate({ to: '/pentagram/create'})
    }, [navigate])

    const showSelectHandler = useCallback((pentagramId: string) => {
        navigate({ to: '/pentagram/$pentagramId/view', params: { pentagramId } })
    }, [navigate])

    const showUpdateHandler = useCallback((pentagramId: string) => {
        navigate({ to: '/pentagram/$pentagramId/update', params: { pentagramId } })
    }, [navigate])


    const showAddNodeHandler = useCallback((pentagramId: string)=> {
        navigate({to: '/pentagram/$pentagramId/update/addNode', params: { pentagramId }})
    }, [navigate])

    const showUpdateNodeInteractionHandler = useCallback((pentagramId: string, nodeId: string) => {
        navigate({ to: '/pentagram/$pentagramId/update/node/$nodeId', params: { pentagramId, nodeId } })
    }, [navigate])


    const showNodeDetailHandler = useCallback((pentagramId: string, nodeId: string) => {
        navigate({ to: '/pentagram/$pentagramId/view/node/$nodeId', params: { pentagramId, nodeId } })
    }, [navigate])

    const showRevisionDetailHandler = useCallback((pentagramId: string, revisionId: string)=> {
        navigate({to: '/pentagram/$pentagramId/view/revision/$revisionId', params: { pentagramId, revisionId }})
    }, [navigate])

    const showSelectInteractionHandler = useCallback((pentagramId: string) => {
        navigate({ to: '/pentagram/$pentagramId/view/interaction', params: { pentagramId } })
    }, [navigate])

   

    return {
        create: showInsertHandler,
        view: showSelectHandler,
        update: showUpdateHandler,

        selectInteraction: showSelectInteractionHandler,
        nodeDetail: showNodeDetailHandler,
        revisionDetail: showRevisionDetailHandler,
        
        addNode: showAddNodeHandler,
        updateNodeInteraction: showUpdateNodeInteractionHandler,
    }
}