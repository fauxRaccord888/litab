import type { SignInPayload } from "../types"
import { supabaseClient } from "$lib/supabase"

export const signIn_SUPABASE = async (
    payload: SignInPayload,
) => {
    const res = await supabaseClient.auth.signInWithPassword(payload)
    return res
}