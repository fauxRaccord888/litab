import { supabaseClient } from "$lib/graphql/supabaseClient"

export const updatePreference_DB = async (
    payload: [number, number, number],
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