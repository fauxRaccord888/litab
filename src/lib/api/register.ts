import { createSupabaseClient } from "./supabase/client"
import { register_DB } from "./supabase/register"

import { parseErrorMessage } from "./utils/error"

export interface RegisterPayload {
    email: string,
    password: string,
    display_name: string,
}


export const register_SERVER = async (payload: RegisterPayload) => {
    try {
        const client = createSupabaseClient()
        const { data, error } = await register_DB(payload, client)

        if (error) {
            const msg = parseErrorMessage(error.message)
            throw new Error(msg)
        }

        return data

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}