import type { SupabaseClient } from '@supabase/supabase-js';

import { signIn_DB } from '$lib/api/supabase/auth';
import { parseErrorMessage } from "$lib/api/utils"

export interface SignInReqeustPayload {
    email: string,
    password: string,
}

export const signIn_SERVER = async (
    payload: SignInReqeustPayload, 
    client: SupabaseClient
) => {
    try {
        const { data, error} = await signIn_DB(payload, client)

        if (error) {
            const msg = parseErrorMessage(error.message)
            throw new Error(msg)
        }
        
        return data
    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}