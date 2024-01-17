import type { SupabaseClient } from "@supabase/supabase-js"

import { parseErrorMessage } from "$lib/api/utils"
import { updatePreference_DB } from "$lib/api/supabase/profiles"


export const updatePreference_SERVER = async (
    payload: [number, number, number],
    client: SupabaseClient,
    userId: string
) => {
    try {
        const { data, error } = await updatePreference_DB(payload, client, userId)

        if (error) {
            const msg = parseErrorMessage(error?.message)
            throw new Error(msg)
        }

        return data

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}
