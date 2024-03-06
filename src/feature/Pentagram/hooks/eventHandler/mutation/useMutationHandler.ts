// COMMENT
// https://github.com/supabase/pg_graphql/issues/190, https://github.com/supabase/pg_graphql/issues/294
// 현재 pg_graphql은 upsert 기능과 mutation input 내 nested relationship을 지원하지 않음
// 불가피하게 mutation api call이 장황하고 복잡함
// 현재로서는 서버 레이어를 추가하고 graphql 서버 및 리졸버를 추가하거나, pq_graphql의 성숙을 기다려야 함
// CRITICAL
// TODO 
// graphQL 문법만으로 하나의 트랜잭션으로 중첩 처리가 불가능, 
// 에러 발생 시 기존 트랜잭션을 취소하는 로직이 필요함

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { usePentagramMutation, usePentagramNodeMutation, usePentagramRevisionMutation, useRevisionChangeMutation, useUnmergedChangeInfo } from "../..";
import { abortChanges } from "$feature/Pentagram/store/pentagramUpsertSlice";
import { getFirstRecordOfResponse } from "$lib/utils/graphql";

type NewNode = {
    id: string
    oeuvre_id: string
}

export function useMutationHandler() {
    const dispatch = useDispatch()
    const unmergedNodes = useUnmergedChangeInfo()
    const { insertPentagram, updatePentagram } = usePentagramMutation()
    const { upsertNodes } = usePentagramNodeMutation()
    const { insertRevision } = usePentagramRevisionMutation()
    const { insertChanges }= useRevisionChangeMutation()

    const handleUpsertNodes = useCallback(async (pentagramId: string) => {
        const { nodeInsertResponse, nodeUpdateResponses } = await upsertNodes(pentagramId)
        const newNodes = nodeInsertResponse?.data?.insertIntopentagram_nodesCollection?.records

        //TODO error handler
        if (
            nodeInsertResponse?.errors || 
            nodeUpdateResponses.some((response) => response?.errors)
        ) {
            throw new Error()
        }

        return newNodes || []
    }, [upsertNodes])

    const handleInsertChanges = useCallback(async (revisionId: string, newNodes: NewNode[]) => {
        const changeResponses = await insertChanges(revisionId, newNodes)

        //TODO error handler
        if (Object.values(changeResponses).some((res) => res?.errors)) {
            throw new Error()
        }
        
        dispatch(abortChanges())
    }, [dispatch, insertChanges])


    const handleInsertRevision = useCallback(async (pentagramId: string) => {
        if (!unmergedNodes.length) return

        const { revisionInsertResponse } = await insertRevision(pentagramId)
        const revision = getFirstRecordOfResponse(revisionInsertResponse.data?.insertIntopentagram_revisionsCollection)
        
        //TODO error handler
        if (!revision || revisionInsertResponse?.errors) {
            throw new Error()
        }

        const newNodes  = await handleUpsertNodes(pentagramId)
        const result = await handleInsertChanges(revision.id, newNodes)
        return result
    }, [handleInsertChanges, handleUpsertNodes, insertRevision, unmergedNodes])

    const handleUpdatePentagram = useCallback(async (pentagramId: string) => {
        const { pentagramUpdateResponse } = await updatePentagram(pentagramId)

        //TODO error handler
        if (pentagramUpdateResponse.errors) {
            throw new Error()
        }

        handleInsertRevision(pentagramId)
    }, [updatePentagram, handleInsertRevision])

    const handleInsertPentagram = useCallback(async () => {
        const { pentagramInsertResponse } = await insertPentagram()
        const pentagram = getFirstRecordOfResponse(pentagramInsertResponse.data?.insertIntopentagramsCollection)
        
        // TODO ERROR
        if (!pentagram || pentagramInsertResponse.errors) {
            throw new Error()
        }

        handleInsertRevision(pentagram.id)
        return pentagram
    }, [insertPentagram, handleInsertRevision])

    return { handleInsertPentagram, handleUpdatePentagram }
}