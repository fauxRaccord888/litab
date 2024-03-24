import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useApolloClient } from "@apollo/client";
import { useCurrentUser } from "$feature/auth/hooks/useCurrentUser";
import { useDescription, useUnmergedChangeInfo } from "../..";

import { supabaseClient } from "$lib/supabase";
import { abortChanges } from "../../../store/pentagramUpsertSlice";
import { filterChanges, formatChanges } from '../../../utils';
import { evictCacheById } from "$lib/utils";
import { InsertPentagramTransactionError, UpdatePentagramTransactionError } from "../../../error";
import { PendingError } from "$lib/error";
import { getOeuvreExtensiveInfoById_QUERY } from "$feature/Oeuvre/graphql";
import { getUserById_QUERY } from "$feature/auth/graphql";


export function useMutationHandler() {
    const dispatch = useDispatch()
    const apolloClient = useApolloClient()
    const currentUser = useCurrentUser()

    const changes = useUnmergedChangeInfo()
    const filteredChanges = filterChanges(changes)

    const description = useDescription()
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

        if (data) {
            evictCacheById({
                cache: apolloClient.cache, 
                entity: 'users', 
                id: currentUser?.id
            })
            apolloClient.refetchQueries({
                include: [
                    getOeuvreExtensiveInfoById_QUERY,
                    getUserById_QUERY
                ],
            })
        }

        dispatch(abortChanges())
        return data
    }, [pending, description, processedUpsertChanges, apolloClient, currentUser, dispatch])

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

        if (error) throw new InsertPentagramTransactionError()

        if (data) {
            evictCacheById({
                cache: apolloClient.cache, 
                entity: 'users', 
                id: currentUser?.id
            })
            apolloClient.refetchQueries({
                include: [
                    getOeuvreExtensiveInfoById_QUERY,
                    getUserById_QUERY
                ],
            })
        }

        dispatch(abortChanges())
        return data
    }, [apolloClient, currentUser, description, dispatch, pending, processedRecoverChanges, processedRemoveChanges, processedUpdateChanges, processedUpsertChanges])


    return { handleInsertPentagram, handleUpdatePentagram }
}