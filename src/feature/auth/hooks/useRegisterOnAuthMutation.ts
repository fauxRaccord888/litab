import type { AuthError, AuthResponse, User } from "@supabase/supabase-js"
import { useCallback, useState } from "react"
import { register_SUPABASE } from "../supabase"

//TODO 3번 반복 시 추상화
export type AuthRegisterMutation = (email: string, password: string) => Promise<AuthResponse>
type Status = { data: User | null, error: null | AuthError, loading: boolean}

export function useRegisterOnAuthMutation(): [AuthRegisterMutation, Status] {
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AuthError | null>(null)
    
    const mutation = useCallback((email: string, password: string) => {
        setLoading(true)
        const response = register_SUPABASE({email, password})
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