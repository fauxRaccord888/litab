import type { SupabaseClient } from "@supabase/supabase-js"
import type { SignInReqeustPayload } from "../signIn"

export const signIn_DB = async (
    payload: SignInReqeustPayload,
    supabaseClient: SupabaseClient
) => {
    const res = await supabaseClient.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
    })
    return res
}