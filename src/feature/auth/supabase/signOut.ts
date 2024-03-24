import { supabaseClient } from "$lib/supabase"

export const signOut_SUPABASE = async () => {
    const res = await supabaseClient.auth.signOut()
    return res
}