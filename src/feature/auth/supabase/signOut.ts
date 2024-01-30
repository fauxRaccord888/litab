import { supabaseClient } from "$lib/graphql/supabaseClient"

export const signOut_SUPABASE = async () => {
    const res = await supabaseClient.auth.signOut()
    return res
}