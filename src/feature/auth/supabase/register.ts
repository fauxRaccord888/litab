import type { RegisterPayload } from "../types"
import { supabaseClient } from "$lib/supabase"

export const register_SUPABASE = async (
    payload: RegisterPayload,
) => {
    const res = await supabaseClient.auth.signUp(payload)
    return res
}