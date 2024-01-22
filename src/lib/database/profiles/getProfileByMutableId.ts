import { supabaseClient } from "$lib/utils/database/client"

export const getProfileByMutableId_DB = async (
    payload: { mutableId: string },
) => {
    const res = await supabaseClient
        .from('profiles')
        .select()
        .eq('mutable_id', payload.mutableId)

    return res
}