import { useNavigate } from "@tanstack/react-router"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { closeModal, setInsertNode, setNodeUpsertId, setNodeViewId, setPentagramDecorationId, setPentagramMenuId, setRevisionViewId } from "$feature/portal/store/modalSlice"

export function usePentagramNavigate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        dispatch(closeModal())
    }, [dispatch, navigate])

    const nodeUpsertModalNavigator = useCallback((
        nodeUpsertId: string,
    ) => {
        dispatch(setNodeUpsertId(nodeUpsertId))
    }, [dispatch])

    const nodeInsertNavigator =  useCallback((
    )=> {
        dispatch(setInsertNode())
    }, [dispatch])

    const pentagramSelectNavigator = useCallback((pentagramId: string) => {
        navigate({ 
            to: '/pentagram/$pentagramId/view', 
            params: { 
                pentagramId,
            },
        })
        dispatch(closeModal())
    }, [dispatch, navigate])

    const nodeSelectModalNavigator = useCallback((
        nodeViewId: string,
    ) => {
        dispatch(setNodeViewId(nodeViewId))
    }, [dispatch])

    const revisionSelectModalNavigator = useCallback((
        revisionViewId: string,
    )=> {
        dispatch(setRevisionViewId(revisionViewId))
    }, [dispatch])

    const pentagramSelectModalNavigator = useCallback((
        pentagramMenuId: string,
    ) => {
        dispatch(setPentagramMenuId(pentagramMenuId))
    }, [dispatch])

    const pentagramDecorationModalNavigator = useCallback((
        pentagramMenuId: string,
    ) => {
        dispatch(setPentagramDecorationId(pentagramMenuId))
    }, [dispatch])


    return {
        select: pentagramSelectNavigator,
        create: pentagramInsertNavigator,
        update: pentagramUpdateNavigator,

        pentagramSelectModal: pentagramSelectModalNavigator,
        pentagramDecorationModal: pentagramDecorationModalNavigator,
        revisionSelectModal: revisionSelectModalNavigator,
        
        nodeSelectModal: nodeSelectModalNavigator,
        nodeUpsertModal: nodeUpsertModalNavigator,
        nodeInsertModal: nodeInsertNavigator 
    }
}