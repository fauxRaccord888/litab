import type { SupabaseClient } from "@supabase/supabase-js"
import type { RegisterRequestPayload } from "$lib/api/auth"

export const registerOnAuth_DB = async (
    payload: RegisterRequestPayload,
    supabaseClient: SupabaseClient
) => {
    const res = await supabaseClient.auth.signUp({
        email: payload.email,
        password: payload.password,
    })

    return res
}