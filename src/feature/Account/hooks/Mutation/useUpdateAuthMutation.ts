import type { AuthError, User } from "@supabase/supabase-js"
import type { UpdateAuthPayload } from "../../types"
import { useCallback, useState } from "react"
import { updateUser_SUPABASE } from "../../supabase"

export function useUpdateAuthMutation(): [typeof mutation, typeof status] {
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AuthError | null>(null)
    const status = { data, loading, error}

    const mutation = useCallback((payload: UpdateAuthPayload) => {
        setLoading(true)
        const response = updateUser_SUPABASE(payload)
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