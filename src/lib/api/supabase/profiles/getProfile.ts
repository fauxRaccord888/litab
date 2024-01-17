import type { SupabaseClient } from "@supabase/supabase-js"

import type { GetProfilePayload } from "$lib/api/profiles"
import type { Database } from "$lib/api/supabase/types"


export const getProfile_DB = async (
    payload: GetProfilePayload,
    supabaseClient: SupabaseClient<Database>
) => {
    const res = await supabaseClient
        .from('profiles')
        .select()
        .eq('id', payload.id)

    return res
}