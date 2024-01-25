import { supabaseClient } from "$lib/graphql/supabaseClient"

export const signIn_DB = async (
    payload: { email: string, password: string },
) => {
    const res = await supabaseClient.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
    })
    return res
}