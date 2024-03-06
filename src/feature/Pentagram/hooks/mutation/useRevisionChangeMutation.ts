import type { 
    InsertPentagramUpsertChangeRecordsMutation,
    InsertPentagramUpdateChangeRecordsMutation,
    InsertPentagramRemoveChangeRecordsMutation,
    InsertPentagramRecoverChangeRecordsMutation
} from "$lib/graphql/__generated__/graphql";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { useUnmergedChangeInfo } from "..";
import { filterChanges, formatChanges } from "$feature/Pentagram/utils";
import { 
    insertPentagramRecoverChangeRecords_MUTATION, 
    insertPentagramRemoveChangeRecords_MUTATION, 
    insertPentagramUpdateChangeRecords_MUTATION, 
    insertPentagramUpsertChangeRecords_MUTATION, 
} from '../../graphql';

type NewNode = {
    id: string
    oeuvre_id: string
}

export function useRevisionChangeMutation() {
    const [insertUpsertChangeMutation] = useMutation<InsertPentagramUpsertChangeRecordsMutation>(insertPentagramUpsertChangeRecords_MUTATION)
    const [insertUpdateChangeMutation] = useMutation<InsertPentagramUpdateChangeRecordsMutation>(insertPentagramUpdateChangeRecords_MUTATION)
    const [insertRecoverChangeMutation] = useMutation<InsertPentagramRecoverChangeRecordsMutation>(insertPentagramRecoverChangeRecords_MUTATION)
    const [insertRemoveChangeMutation] = useMutation<InsertPentagramRemoveChangeRecordsMutation>(insertPentagramRemoveChangeRecords_MUTATION)

    const unmergedNodes = useUnmergedChangeInfo()
    const filteredChanges = filterChanges(unmergedNodes)

    const insertChanges = useCallback(async (revisionId: string, newNodes: NewNode[]) => {
        const {
            processedUpsertChanges,
            processedUpdateChanges,
            processedRecoverChanges,
            processedRemoveChanges
        } = formatChanges(filteredChanges, newNodes, revisionId)

        const upsertChangeResponse = processedUpsertChanges.length 
            ? await insertUpsertChangeMutation({
                variables : {
                    input: processedUpsertChanges
                }
            })
            : null

        const updateChangeResponse = processedUpdateChanges.length 
            ? await insertUpdateChangeMutation({
                variables : {
                    input: processedUpdateChanges
                }
            })
            : null

        const recoverChangeResponse = processedRecoverChanges.length 
            ? await insertRecoverChangeMutation({
                variables : {
                    input: processedRecoverChanges
                }
            })
            : null

        const removeChangeResponse = processedRemoveChanges.length 
            ? await insertRemoveChangeMutation({
                variables : {
                    input: processedRemoveChanges
                }
            })
            : null
        
        return {
            upsertChangeResponse,
            updateChangeResponse,
            recoverChangeResponse,
            removeChangeResponse
        }
    }, [
        filteredChanges, 
        insertRecoverChangeMutation, 
        insertRemoveChangeMutation, 
        insertUpdateChangeMutation, 
        insertUpsertChangeMutation
    ])

    return  { insertChanges }
}