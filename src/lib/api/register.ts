import type { SupabaseClient } from "@supabase/supabase-js"

import { registerOnAuth_DB } from "./supabase/registerOnAuth"
import { registerOnTable_DB } from "./supabase/registerOnTable"
import { parseErrorMessage } from "./utils/error"

export interface RegisterPayload {
    email: string,
    password: string,
}

export const register_SERVER = async (
    payload: RegisterPayload, 
    client: SupabaseClient
) => {
    try {
        const { data, error } = await registerOnAuth_DB(payload, client)

        const sessionUser = data?.user
        if (error || !sessionUser) {
            const msg = parseErrorMessage(error?.message)
            throw new Error(msg)
        }

        const { 
            data: tableData,
        } = await registerOnTable_DB(sessionUser, client)

        const user = tableData?.[0] || null
        return { user, sessionUser }

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}
