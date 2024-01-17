import type { SupabaseClient, User } from "@supabase/supabase-js"

import { registerOnTable_DB } from "$lib/api/supabase/profiles"
import { parseErrorMessage } from "$lib/api/utils"

export const registerTableOnly_SERVER = async (
    payload: User, 
    client: SupabaseClient
) => {
    try {
        const { 
            data: tableData,
            error: tableError
        } = await registerOnTable_DB(payload, client)

        if (tableError) {
            const msg = parseErrorMessage(tableError?.message)
            throw new Error(msg)
        }

        const user = tableData?.[0] || null
        return user

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}
