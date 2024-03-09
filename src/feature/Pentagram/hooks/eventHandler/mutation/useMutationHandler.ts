import type { AppRootState } from "$lib/stores/store";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useUnmergedChangeInfo } from "../..";
import { supabaseClient } from "$lib/supabase/client";
import { InsertPentagramTransactionError, UpdatePentagramTransactionError } from "$feature/Pentagram/error";
import { filterChanges, formatChanges } from '../../../utils';

export function useMutationHandler() {
    const { description } = useSelector((state: AppRootState) => state.pentagramUpsert)
    const changes = useUnmergedChangeInfo()
    const filteredChanges = filterChanges(changes)
    const {
        processedUpsertChanges,
        processedUpdateChanges,
        processedRecoverChanges,
        processedRemoveChanges
    } = formatChanges(filteredChanges)

    const handleInsertPentagram = useCallback(async () => {
        const { data, error } =await supabaseClient
            .rpc('batched_insert_pentagram', {
                pentagram: {
                    description: description
                },
                upsert: processedUpsertChanges,
            })

        if (error) throw new UpdatePentagramTransactionError()
        return data
    }, [description, processedUpsertChanges])

    const handleUpdatePentagram = useCallback(async (pentagramId: string) => {
        const { data, error } =await supabaseClient
            .rpc('batched_update_pentagram', {
                pentagram_id: pentagramId,
                pentagram: {
                    description: description
                },
                upsert: processedUpsertChanges,
                update: processedUpdateChanges,
                remove: processedRemoveChanges,
                recover: processedRecoverChanges,
            })

        if (error) throw new InsertPentagramTransactionError()
        return data
        }, [description, processedRecoverChanges, processedRemoveChanges, processedUpdateChanges, processedUpsertChanges])


    return { handleInsertPentagram, handleUpdatePentagram }
}