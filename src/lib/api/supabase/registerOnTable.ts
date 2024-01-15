import type { SupabaseClient, User } from "@supabase/supabase-js"
import type { Database } from "./types"

export const registerOnTable_DB = async (
    user: User,
    supabaseClient: SupabaseClient<Database>
) => {
    const res = await supabaseClient
        .from('profiles')
        .insert({id: user.id})
        .select()

    return res
}