import { supabaseClient } from "$lib/utils/database/client"

export const signIn_DB = async (
    payload: { email: string, password: string },
) => {
    const res = await supabaseClient.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
    })
    return res
}