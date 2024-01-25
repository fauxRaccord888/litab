import { supabaseClient } from "$lib/graphql/supabaseClient"

export const registerOnTable_DB = async (userId: string) => {
    const res = await supabaseClient
    .from('profiles')
    .insert({id: userId})
    .select()
    
    return res
}