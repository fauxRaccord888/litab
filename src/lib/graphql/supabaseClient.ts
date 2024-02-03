import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_DB_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_DB_API_KEY;

const createSupabaseClient = () => {
    return createClient(supabaseUrl, supabaseKey, {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
        }
    })
}

export const supabaseClient = createSupabaseClient()