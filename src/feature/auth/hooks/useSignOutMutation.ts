import type { AuthError } from "@supabase/supabase-js"
import { useCallback, useState } from "react"
import { signOut_SUPABASE } from "../supabase"

export function useSignOutMutation(): [typeof mutation, typeof status] {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AuthError | null>(null)
    const status = { loading, error }
    
    const mutation = useCallback(() => {
        setLoading(true)
        const response = signOut_SUPABASE()
        response.then((response) => {
            const { error: supabaseError } = response
            setLoading(false)
            if (supabaseError) setError(supabaseError)
        })
        return response
    }, [])

    return [mutation, status]
}