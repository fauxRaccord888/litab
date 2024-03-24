import { supabaseClient } from "$lib/supabase"

export const updateUser_SUPABASE = async (
    payload: { newPassword: string },
) => {
    const res = await supabaseClient.auth.updateUser({
        password: payload.newPassword,
    })
    return res
}