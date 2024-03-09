import type { AppRootState } from "$lib/stores/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUnmergedChangeInfo } from "../..";
import { supabaseClient } from "$lib/supabase/client";
import { abortChanges } from "../../../store/pentagramUpsertSlice";
import { InsertPentagramTransactionError, UpdatePentagramTransactionError } from "../../../error";
import { filterChanges, formatChanges } from '../../../utils';

export function useMutationHandler() {
    const dispatch = useDispatch()
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
                upsert_changes: processedUpsertChanges,
            })

        if (error) throw new UpdatePentagramTransactionError()
        dispatch(abortChanges())
        return data
    }, [description, dispatch, processedUpsertChanges])

    const handleUpdatePentagram = useCallback(async (pentagramId: string) => {
        const { data, error } =await supabaseClient
            .rpc('batched_update_pentagram', {
                pentagram_id: pentagramId,
                pentagram: {
                    description: description
                },
                upsert_changes: processedUpsertChanges,
                update_changes: processedUpdateChanges,
                remove_changes: processedRemoveChanges,
                recover_changes: processedRecoverChanges,
            })

        if (error) throw new InsertPentagramTransactionError()
        dispatch(abortChanges())
        return data
        }, [description, dispatch, processedRecoverChanges, processedRemoveChanges, processedUpdateChanges, processedUpsertChanges])


    return { handleInsertPentagram, handleUpdatePentagram }
}