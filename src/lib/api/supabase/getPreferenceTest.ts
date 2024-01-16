import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "./types"

export const getPreferenceTest_DB = async (
    supabaseClient: SupabaseClient<Database>
) => {
    const res = await supabaseClient
        .from('preference_test')
        .select()

    return res
}