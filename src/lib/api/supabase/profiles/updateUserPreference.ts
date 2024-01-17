import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "$lib/api/supabase/types"

export const updatePreference_DB = async (
    payload: [number, number, number],
    supabaseClient: SupabaseClient<Database>,
    userId: string
) => {
    const res = await supabaseClient
        .from('profiles')
        .update({
            preference: payload
        })
        .eq('id', userId)
        .select()

    return res
}