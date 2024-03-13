import { supabaseClient } from "$lib/supabase/client"

export async function checkSessionUser() {
    const sessionResponse = await supabaseClient.auth.getSession()
    const sessionUser = sessionResponse?.data?.session?.user
    if (!sessionUser) return null
    return sessionUser
}