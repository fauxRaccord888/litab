import { supabaseClient } from "$lib/supabase/client"

export const signIn_SUPABASE = async (
    payload: { email: string, password: string },
) => {
    const res = await supabaseClient.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
    })
    return res
}