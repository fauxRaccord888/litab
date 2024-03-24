import type { UploadCoverPayload } from "../../types"
import type { PostgrestError } from "@supabase/supabase-js"
import type { StorageError } from "@supabase/storage-js"
import type { AccessNotGrantedError } from "$feature/auth/error"
import { useCallback, useState } from "react"
import { uploadCover_SUPABASE } from "../../supabase"

export function useUploadCoverMutation(): [typeof mutation, typeof status] {
    const [data, setData] = useState<{ path: string } | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<PostgrestError | AccessNotGrantedError | StorageError | null>(null)
    const status = { data, loading, error}

    const mutation = useCallback((payload: UploadCoverPayload) => {
        setLoading(true)
        const response = uploadCover_SUPABASE(payload)
        response.then((response) => {
            const { data: supabaseData, error: supabaseError } = response
            setLoading(false)
            if (supabaseError) setError(supabaseError)
            if (supabaseData) setData(supabaseData)
        })
        return response
    }, [])

    return [mutation, status]
}