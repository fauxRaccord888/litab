import { supabaseClient } from "$lib/graphql/supabaseClient"

export const getProfileById_DB = async (
    payload: { id?: string },
) => {
    const res = await supabaseClient
        .from('profiles')
        .select()
        .eq('id', payload.id || '')

    return res
}