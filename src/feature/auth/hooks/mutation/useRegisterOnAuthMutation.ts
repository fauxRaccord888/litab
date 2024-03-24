import type { RegisterPayload } from "$feature/auth/types"
import type { AuthError, User } from "@supabase/supabase-js"
import { useCallback, useState } from "react"
import { register_SUPABASE } from "../../supabase"

export function useRegisterOnAuthMutation(): [typeof mutation, typeof status] {
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AuthError | null>(null)
    const status = { data, loading, error}

    const mutation = useCallback((payload: RegisterPayload) => {
        setLoading(true)
        const response = register_SUPABASE(payload)
        response.then((response) => {
            const { data: supabaseData, error: supabaseError } = response
            setLoading(false)
            if (supabaseError) setError(supabaseError)
            if (supabaseData?.user) setData(supabaseData.user)
        })
        return response
    }, [])

    return [mutation, status]
}