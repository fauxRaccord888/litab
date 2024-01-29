import { useDispatch } from "react-redux"
import { useCallback, useState } from "react"

import type { AuthError } from "@supabase/supabase-js"

import { signOut_SUPABASE } from "../supabase"
import { resetUserInfo } from "$lib/stores/authSlice"

export type AuthSignOutMutation = () => Promise<{error: AuthError | null}>
type Status = { error: null | AuthError, loading: boolean}

export function useSignOutMutation(): [AuthSignOutMutation, Status] {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AuthError | null>(null)
    const dispatch = useDispatch()
    
    const mutation = useCallback(() => {
        setLoading(true)
        const response = signOut_SUPABASE()
        dispatch(resetUserInfo())
        response.then((response) => {
            const { error: supabaseError } = response
            setLoading(false)
            if (supabaseError) setError(supabaseError)
        })
        return response
    }, [dispatch])

    return [mutation, { loading, error }]
}