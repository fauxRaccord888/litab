import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "$lib/api/supabase/types"

export const getPreferenceTest_DB = async (
    supabaseClient: SupabaseClient<Database>
) => {
    const res = await supabaseClient
        .from('preference_tests')
        .select()

    return res
}