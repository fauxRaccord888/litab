import type { AppRootState } from "$lib/stores/store";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApolloClient } from "@apollo/client";
import { useUnmergedChangeInfo } from "../..";
import { supabaseClient } from "$lib/supabase/client";

import { abortChanges } from "../../../store/pentagramUpsertSlice";
import { filterChanges, formatChanges } from '../../../utils';

import { getPentagramSelectInfoById_QUERY } from '$feature/Pentagram/graphql';
import { getOeuvreExtensiveInfoById_QUERY } from "$feature/Oeuvre/graphql";
import { getProfileByMutableId_QUERY } from "$feature/Profile/graphql";
import { getFeedById_QUERY } from "$feature/feed/graphql";

import { InsertPentagramTransactionError, PendingError, UpdatePentagramTransactionError } from "../../../error";

export function useMutationHandler() {
    const dispatch = useDispatch()
    const client = useApolloClient()
    const { description } = useSelector((state: AppRootState) => state.pentagramUpsert)
    const changes = useUnmergedChangeInfo()
    const filteredChanges = filterChanges(changes)
    const {
        processedUpsertChanges,
        processedUpdateChanges,
        processedRecoverChanges,
        processedRemoveChanges
    } = formatChanges(filteredChanges)
    
    const [pending, setPending] = useState(false)

    const handleInsertPentagram = useCallback(async () => {
        if (pending) throw new PendingError()
        setPending(true)
        const { data, error } = await supabaseClient
            .rpc('batched_insert_pentagram', {
                pentagram: {
                    description: description || ""
                },
                upsert_changes: processedUpsertChanges,
            })
        if (data || error) {
            setPending(false)
        }
    
        if (error) throw new UpdatePentagramTransactionError()
        dispatch(abortChanges())
        return data
    }, [description, dispatch, processedUpsertChanges, pending])

    const handleUpdatePentagram = useCallback(async (pentagramId: string) => {
        if (pending) throw new PendingError()
        setPending(true)
        const { data, error } = await supabaseClient
            .rpc('batched_update_pentagram', {
                pentagram_id: pentagramId,
                pentagram: {
                    description: description || ""
                },
                upsert_changes: processedUpsertChanges,
                update_changes: processedUpdateChanges,
                remove_changes: processedRemoveChanges,
                recover_changes: processedRecoverChanges,
            })

        if (data || error) {
            setPending(false)
        }

        if (data) {
            client.refetchQueries({
                include: [
                    getPentagramSelectInfoById_QUERY,
                    getOeuvreExtensiveInfoById_QUERY,
                    getProfileByMutableId_QUERY,
                    getFeedById_QUERY,
                ],
            })
        }

        if (error) throw new InsertPentagramTransactionError()
        dispatch(abortChanges())
        return data
    }, [client, description, dispatch, pending, processedRecoverChanges, processedRemoveChanges, processedUpdateChanges, processedUpsertChanges])


    return { handleInsertPentagram, handleUpdatePentagram }
}