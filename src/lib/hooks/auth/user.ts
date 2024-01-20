/* types */
import type { AuthState } from '$lib/stores/authSlice'
/* hooks */
import { useDispatch } from 'react-redux';
import { useStatus } from '$lib/utils/hooks';
/* database */
import { getProfile_DB } from '$lib/database/profiles';
/* actions */
import { setSessionUser, setUser } from '$lib/stores/authSlice';
/* utils */
import { supabaseClient } from '$lib/utils/database/client';
import { queryHelper } from '$lib/utils/hooks/queryHelper';
import { useCallback } from 'react';

export function useSessionUser() {
    const dispatch = useDispatch()
    const [status, setStatus] = useStatus()

    const query = useCallback(async () => {
        setStatus('pending')
        const { data } = await supabaseClient.auth.getSession()
        if (data?.session?.user) {
            setStatus('success')
            dispatch(setSessionUser(data?.session.user))
        } else {
            setStatus('error')
        }
    }, [dispatch, setStatus])
    const reset = () => setStatus('idle')

    return { status, query, reset }
}

type User = AuthState['sessionUser']
export function useUser(sessionUser: User) {
    const dispatch = useDispatch()
    const [status, setStatus] = useStatus()

    const query = useCallback(
        async () => queryHelper({
            setStatus,
            fn: () => getProfile_DB({id: sessionUser?.id}),
            beforeQuery: Boolean(sessionUser?.id),
            errorCondition: (data) => (!data || data.length === 0),
            onSuccess: (data) => dispatch(setUser(data?.[0]))
        })
    , [dispatch, setStatus, sessionUser?.id])
    const reset = () => setStatus('idle')

    return { query, status, reset }
}