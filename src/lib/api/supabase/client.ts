import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_DB_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_DB_API_KEY;

export const createSupabaseClient = () => {
    return createClient(supabaseUrl, supabaseKey)
}