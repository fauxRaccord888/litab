import { supabaseClient } from "$lib/graphql/supabaseClient"

export const fetchPreferenceTest_DB = async () => {
    const res = await supabaseClient
        .from('preference_tests')
        .select()

    return res
}