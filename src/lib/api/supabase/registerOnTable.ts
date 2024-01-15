import type { SupabaseClient, User } from "@supabase/supabase-js"

export const registerOnTable_DB = async (
    user: User,
    supabaseClient: SupabaseClient
) => {
    const res = await supabaseClient
        .from('profiles')
        .insert({id: user.id})
        .select()

    return res
}