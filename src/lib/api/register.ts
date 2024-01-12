import { createSupabaseClient } from "./supabase/client"
import { registerUser_DB } from "./supabase/register"

import { parseErrorMessage } from "./utils/error"

export interface UserRegistrationPayload {
    email: string,
    password: string,
    display_name: string,
}


export const requestUserRegistration = async (payload: UserRegistrationPayload) => {
    try {
        const client = createSupabaseClient()
        const { data: registerData, error: registerError} = await registerUser_DB({
            ...payload,
        }, client)

        if (registerError) {
            const msg = parseErrorMessage(registerError.message)
            throw new Error(msg)
        }

        return registerData

    } catch (err) {
        if (err instanceof Error) throw err
        const msg = parseErrorMessage('')
        throw new Error(msg)
    }
}