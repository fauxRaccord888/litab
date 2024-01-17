import type { SupabaseClient } from "@supabase/supabase-js"

import { parseErrorMessage } from "$lib/api/utils"
import { getProfile_DB } from "$lib/api/supabase/profiles"

export interface GetProfilePayload {
    id: string
}

export const getProfile_SERVER = async (
    payload: GetProfilePayload,
    client: SupabaseClient
) => {
    try {
        const { data, error } = await getProfile_DB(payload, client)

        if (error || data.length === 0) {
            const msg = parseErrorMessage(error?.message)
            throw new Error(msg)
        }

        return data[0]

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}
