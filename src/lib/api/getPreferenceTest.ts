import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "./supabase/types";

import { parseErrorMessage } from "./utils/error"
import { getPreferenceTest_DB } from './supabase/getPreferenceTest';


export const getPreferenceTest_SERVER = async (
    client: SupabaseClient<Database>
) => {
    try {
        const { data, error } = await getPreferenceTest_DB(client)

        if (error) {
            const msg = parseErrorMessage(error?.message)
            throw new Error(msg)
        }

        return data

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}
