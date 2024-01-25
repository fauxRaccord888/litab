import { supabaseClient } from "$lib/graphql/supabaseClient"

export const registerOnAuth_DB = async (
    payload: { email: string, password: string },
) => {
    const res = await supabaseClient.auth.signUp({
        email: payload.email,
        password: payload.password,
    })

    return res
}