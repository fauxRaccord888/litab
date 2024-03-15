import type { PentagramUpdateRoute } from "routes/_auth/pentagram/$pentagramId/update"
import type { PentagramInsertRoute } from "routes/_auth/pentagram/create"
import type { FeedViewRoute } from "routes/_auth/feed"
import type { PentagramSelectRoute } from "routes/_public/pentagram/$pentagramId/view"
import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

type ViewRoutes = PentagramSelectRoute | FeedViewRoute
type UpsertRoutes = PentagramUpdateRoute | PentagramInsertRoute 

export function usePentagramNavigate() {
    const navigate = useNavigate()

    const pentagramInsertNavigator = useCallback(() => {
        navigate({ 
            to: '/pentagram/create', 
        })
    }, [navigate])

    const pentagramUpdateNavigator = useCallback((pentagramId: string) => {
        navigate({ 
            to: '/pentagram/$pentagramId/update', 
            params: { 
                pentagramId,
            },
        })
    }, [navigate])

    const nodeUpsertDetailNavigator = useCallback((
        nodeUpsertId: string,
        from: UpsertRoutes["fullPath"],
        params?: { pentagramId: string } | undefined
    ) => {
        navigate({ 
            from,
            params: params || {},
            search: {
                nodeUpsertId,
                insertNode: undefined, 
                pentagramInteractionId: undefined, 
                nodeViewId: undefined, 
                revisionViewId: undefined
            },
        })
    }, [navigate])

    const nodeInsertNavigator =  useCallback((
        from: UpsertRoutes["fullPath"],
        params?: { pentagramId: string } | undefined
    )=> {
        navigate({ 
            from,
            params: params || {},
            search: {
                insertNode: true,
                nodeUpsertId: undefined,
                pentagramInteractionId: undefined, 
                nodeViewId: undefined, 
                revisionViewId: undefined

            },
        })
    }, [navigate])

    const pentagramSelectNavigator = useCallback((pentagramId: string) => {
        navigate({ 
            to: '/pentagram/$pentagramId/view', 
            params: { 
                pentagramId,
            },
        })
    }, [navigate])

    const nodeSelectDetailNavigator = useCallback((
        nodeViewId: string,
        from: ViewRoutes["fullPath"],
        params?: { pentagramId: string } | undefined
    ) => {
        navigate({
            from,
            params: params || {},
            search: {
                nodeViewId,
                nodeUpsertId: undefined,
                insertNode: undefined, 
                pentagramInteractionId: undefined, 
                revisionViewId: undefined
            },
        })
    }, [navigate])

    const revisionSelectDetailNavigator = useCallback((
        revisionViewId: string,
        from: ViewRoutes["fullPath"], 
        params?: { pentagramId: string } | undefined
    )=> {
        navigate({
            from,
            params: params || {},
            search: {
                revisionViewId,
                nodeUpsertId: undefined,
                insertNode: undefined, 
                pentagramInteractionId: undefined, 
                nodeViewId: undefined, 
            },
        })
    }, [navigate])

    const pentagramSelectDetailNavigator = useCallback((
        pentagramInteractionId: string,
        from: ViewRoutes["fullPath"], 
        params?: { pentagramId: string } | undefined
    ) => {
        navigate({
            from,
            params: params || {},
            search: {
                pentagramInteractionId,
                nodeUpsertId: undefined,
                insertNode: undefined, 
                nodeViewId: undefined, 
                revisionViewId: undefined
            },
        })
    }, [navigate])

    return {
        createPentagram: pentagramInsertNavigator,
        viewPentagram: pentagramSelectNavigator,
        updatePentagram: pentagramUpdateNavigator,

        pentagramSelectDetail: pentagramSelectDetailNavigator,
        revisionSelectDetail: revisionSelectDetailNavigator,
        
        nodeSelectDetail: nodeSelectDetailNavigator,
        nodeUpsertDetail: nodeUpsertDetailNavigator,
        nodeInsertDetail: nodeInsertNavigator 
    }
}