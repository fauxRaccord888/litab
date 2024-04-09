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
            search: (prev) => ({
                page: prev.page,
                initiated: prev.initiated,
                nodeUpsertId,
            }),
        })
    }, [navigate])

    const nodeInsertNavigator =  useCallback((
    )=> {
        navigate({
            search: (prev) => ({
                page: prev.page,
                initiated: prev.initiated,
                insertNode: true,
            }),
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
            search: {
                nodeViewId,
            },
        })
    }, [navigate])

    const revisionSelectModalNavigator = useCallback((
        revisionViewId: string,
    )=> {
        navigate({
            search: {
                revisionViewId,
            },
        })
    }, [navigate])

    const pentagramSelectModalNavigator = useCallback((
        pentagramMenuId: string,
    ) => {
        navigate({
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