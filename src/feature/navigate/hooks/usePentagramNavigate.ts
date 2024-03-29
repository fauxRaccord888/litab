import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"

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

    const nodeUpsertModalNavigator = useCallback((
        nodeUpsertId: string,
    ) => {
        navigate({
            params: {},
            search: {
                nodeUpsertId,
            },
        })
    }, [navigate])

    const nodeInsertNavigator =  useCallback((
    )=> {
        navigate({
            params: {},
            search: {
                insertNode: true,
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

    const nodeSelectModalNavigator = useCallback((
        nodeViewId: string,
    ) => {
        navigate({
            params: {},
            search: {
                nodeViewId,
            },
        })
    }, [navigate])

    const revisionSelectModalNavigator = useCallback((
        revisionViewId: string,
    )=> {
        navigate({
            params: {},
            search: {
                revisionViewId,
            },
        })
    }, [navigate])

    const pentagramSelectModalNavigator = useCallback((
        pentagramMenuId: string,
    ) => {
        navigate({
            params: {},
            search: {
                pentagramMenuId,
            },
        })
    }, [navigate])

    return {
        select: pentagramSelectNavigator,
        create: pentagramInsertNavigator,
        update: pentagramUpdateNavigator,

        pentagramSelectModal: pentagramSelectModalNavigator,
        revisionSelectModal: revisionSelectModalNavigator,
        
        nodeSelectModal: nodeSelectModalNavigator,
        nodeUpsertModal: nodeUpsertModalNavigator,
        nodeInsertModal: nodeInsertNavigator 
    }
}