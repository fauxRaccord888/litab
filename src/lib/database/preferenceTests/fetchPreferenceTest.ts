import { supabaseClient } from "$lib/utils/database/client"

export const fetchPreferenceTest_DB = async () => {
    const res = await supabaseClient
        .from('preference_tests')
        .select()

    return res
}