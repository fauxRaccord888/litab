import type { SupabaseClient } from "@supabase/supabase-js"
import type { RegisterPayload } from "../register"

export const register_DB = async (
    payload: RegisterPayload,
    supabaseClient: SupabaseClient
) => {
    const res = await supabaseClient.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
            data: {
                display_name: payload.display_name,
            }
        }
    })

    return res
}