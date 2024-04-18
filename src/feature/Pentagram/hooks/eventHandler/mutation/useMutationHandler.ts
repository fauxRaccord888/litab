import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useApolloClient } from "@apollo/client";
import { useCurrentUser } from "$feature/auth/hooks/useCurrentUser";
import { useUnmergedChangeInfo } from "../..";

import { supabaseClient } from "$lib/supabase";
import { abortChanges } from "../../../store/pentagramUpsertSlice";
import { filterChanges, formatChanges } from '../../../utils';
import { evictCacheById } from "$lib/utils";
import { PendingError } from "$lib/error/customError";
import { getOeuvreInfoById_QUERY } from "$feature/Oeuvre/graphql";
import { getUserById_QUERY } from "$feature/auth/graphql";


export function useMutationHandler() {
    const dispatch = useDispatch()
    const apolloClient = useApolloClient()
    const { currentUser } = useCurrentUser()

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
                upsert_changes: processedUpsertChanges,
            })

        if (data || error) {
            setPending(false)
        }
    
        if (error) throw error

        if (data) {
            evictCacheById({
                cache: apolloClient.cache, 
                entity: 'Users', 
                id: currentUser?.id
            })
            evictCacheById({
                cache: apolloClient.cache, 
                entity: 'Feed', 
                id: currentUser?.id
            })
            apolloClient.refetchQueries({
                include: [
                    getOeuvreInfoById_QUERY,
                    getUserById_QUERY
                ],
            })
        }

        dispatch(abortChanges())
        return data
    }, [pending, processedUpsertChanges, apolloClient, currentUser, dispatch])

    const handleUpdatePentagram = useCallback(async (pentagramId: string) => {
        if (pending) throw new PendingError()
        setPending(true)
        const { data, error } = await supabaseClient
            .rpc('batched_update_pentagram', {
                pentagram_id: pentagramId,
                upsert_changes: processedUpsertChanges,
                update_changes: processedUpdateChanges,
                remove_changes: processedRemoveChanges,
                recover_changes: processedRecoverChanges,
            })

        if (data || error) {
            setPending(false)
        }

        if (error) throw error

        if (data) {
            evictCacheById({
                cache: apolloClient.cache, 
                entity: 'Users', 
                id: currentUser?.id
            })
            evictCacheById({
                cache: apolloClient.cache, 
                entity: 'Feed', 
                id: currentUser?.id
            })
            apolloClient.refetchQueries({
                include: [
                    getOeuvreInfoById_QUERY,
                    getUserById_QUERY
                ],
            })
        }

        dispatch(abortChanges())
        return data
    }, [apolloClient, currentUser, dispatch, pending, processedRecoverChanges, processedRemoveChanges, processedUpdateChanges, processedUpsertChanges])


    return { handleInsertPentagram, handleUpdatePentagram }
}