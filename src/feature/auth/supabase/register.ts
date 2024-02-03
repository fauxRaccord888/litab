import { supabaseClient } from "$lib/supabase/client"

export const register_SUPABASE = async (
    payload: { email: string, password: string },
) => {
    const res = await supabaseClient.auth.signUp({
        email: payload.email,
        password: payload.password,
    })

    return res
}