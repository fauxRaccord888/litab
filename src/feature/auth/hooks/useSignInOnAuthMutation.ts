import type { AuthError, AuthTokenResponsePassword, User } from "@supabase/supabase-js"
import { useCallback, useState } from "react"
import { signIn_SUPABASE } from "../supabase"

export type AuthSignInMutation = (email: string, password: string) => Promise<AuthTokenResponsePassword>
type Status = { data: User | null, error: null | AuthError, loading: boolean}

export function useSignInOnAuthMutation(): [AuthSignInMutation, Status] {
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AuthError | null>(null)
    
    const mutation = useCallback((email: string, password: string) => {
        setLoading(true)
        const response = signIn_SUPABASE({email, password})
        response.then((response) => {
            const { data: supabaseData, error: supabaseError } = response
            setLoading(false)
            if (supabaseError) setError(supabaseError)
            if (supabaseData?.user) setData(supabaseData.user)
        })
        return response
    }, [])

    return [mutation, { data, loading, error }]
}