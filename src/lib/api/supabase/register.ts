import { SupabaseClient } from "@supabase/supabase-js"
import { UserRegistrationPayload } from "../register"

export const registerUser_DB = async (
    payload: UserRegistrationPayload,
    supabaseClient: SupabaseClient
) => {
    const res = await supabaseClient.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
            data: {
                display_name: payload.display_name,
            }
        }
    })

    return res
}